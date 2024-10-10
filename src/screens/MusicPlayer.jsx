import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MD3Colors, ProgressBar } from 'react-native-paper';

const MusicPlayer = ({ route }) => {

  const { songlist, index } = route.params
  const [currentSongIndex, setCurrentSongIndex] = useState(index)
  const [currentSong, setCurrentSong] = useState(songlist[index])
  const [sound, setSound] = useState();
  const [songState, setSongState] = useState('stopped');
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  async function playSound() {
    console.log('Loading Sound');
    if (songState === 'stopped') {
      const { sound } = await Audio.Sound.createAsync({ uri: `${currentSong.song_url}` });
      setSound(sound);
      // setPlaying(true);
      setSongState('playing');
      await sound.playAsync();
      console.log('Playing Sound');
    } else if (songState === 'paused') {
      console.log('song resumed');
      await sound.playAsync();
      setSongState('playing');
    } else if (songState === 'playing') {
      console.log('song paused');
      await sound.pauseAsync();
      setSongState('paused');
    }
  }

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(status => {
        if (status.isLoaded) {
          setPlaybackPosition(status.positionMillis);
          setDuration(status.durationMillis);
        }
      });
    }
  }, [sound]);

  // useEffect(() => {
  //   if (playbackPosition === duration) {
  //     setSongState('stopped');
  //   }
  // }, [playbackPosition, duration]);

  const getPlaybackPercentage = () => {
    if (duration === 0) return 0;
    return (playbackPosition / duration) * 100;
  };

    async function stopSound() {
      console.log('Stopping Sound');
      // setPlaying(false);
      await sound.stopAsync();
    }


    async function playNext() {
      if (index < songlist.length - 1) {
        setCurrentSongIndex(index + 1);
      }
      console.log(songlist.length);
    }

    async function playPrev() {
      if (index > 0) {
        setCurrentSongIndex(index - 1);
      }
      console.log(currentSongIndex);
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
        <View className='flex flex-row justify-center' style={{ display: 'flex', gap: 20 }}>
          {/* <Button title="Play Sound" onPress={playSound} /> */}
          {/* <Button title="Stop Sound" onPress={stopSound} /> */}
          <Icon color={'white'} name='skip-previous' size={40} title="Prev" onPress={playPrev} />
          {
             <Icon color={'white'} name={(songState === 'paused' || songState === 'stopped') ? 'play' : 'pause'} size={40} title="Play Sound" onPress={playSound} /> 
          }
          <Icon color={'white'} name='skip-next' size={40} title="Next" onPress={playNext} />
        </View>
        <View className='w-11/12 mx-auto mt-6'>
          <ProgressBar progress={getPlaybackPercentage() / 100} className='bg-gray-500/50 h-1.5 rounded-md shadow-xl' color={'white'} />
        </View>
        <View className='flex flex-row justify-between w-11/12 mx-auto mt-4'>
          <Text className='text-white'>{new Date(playbackPosition).toISOString().substr(14, 5)}</Text>
          <Text className='text-white'>{new Date(duration).toISOString().substr(14, 5)}</Text>
        </View>
      </View>
    )
  }

  export default MusicPlayer

  const styles = StyleSheet.create({})