import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { Audio } from 'expo-av';

const MusicPlayer = ({ route }) => {

  const { songlist,index } = route.params
  const [currentSongIndex, setCurrentSongIndex] = useState(index)
  const [currentSong, setCurrentSong] = useState(songlist[currentSongIndex])
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({ uri: `${currentSong.song_url}` });
    setSound(sound);
    console.log('Playing Sound');
    await sound.playAsync(); 
  }
  async function stopSound() {
    console.log('Stopping Sound');
    await sound.stopAsync();
  }
  async function playNext() {
    if(index < songlist.length-1){
      setCurrentSongIndex(index+1);
    }
  }
  async function playPrev() {
    if(index > 0){
      setCurrentSongIndex(index-1);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    setCurrentSong(songlist[currentSongIndex])
  }, [currentSongIndex])

  return (
    <View className='bg-[#001822] p-4 w-full h-full'>
      <Text className='text-white text-center text-xl'>{currentSong.song_title}</Text>
      <Text className='text-center text-gray-300'>{currentSong.song_artist}</Text>
      <View className='w-2/3 h-[200px] my-8 mx-auto'>
        <Image className='h-full w-full rounded' source={{ uri: `${currentSong.song_header_image_thumbnail_url}` }} />
      </View>
      <View className='flex flex-row justify-between'>
        <Button title="Play Sound" onPress={playSound} />
        <Button title="Next" onPress={playNext} />
        <Button title="Prev" onPress={playPrev} />
        <Button title="Stop Sound" onPress={stopSound} />
      </View>
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({})