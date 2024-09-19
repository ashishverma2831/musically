import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import HorizontalScroll from '../components/HorizontalScroll'
import EpisodesForYou from '../components/EpisodesForYou'

const HomeScreen = () => {

  const [albums, setAlbums] = useState([]);
  const getAlbums = async () => {
    const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'ddba72a05bmsh6bf38ece06aa542p1b5085jsnd329d52250e5',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.albums);
      setAlbums(data.albums);
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   getAlbums();
  // }, []);

  return (
    <SafeAreaView className='px-4'>
      <Text>HomeScreen</Text>

      <EpisodesForYou />
      <View className='flex flex-row items-center gap-4 py-2'>
        <Pressable onPress={() => { }} className='bg-red-300 py-2 px-4 rounded-full' >
          <Text>M</Text>
        </Pressable>
        <View className='bg-red-300 py-2 px-4 rounded-full'>
          <Text>All</Text>
        </View>
        <View className='bg-red-300 py-2 px-4 rounded-full'>
          <Text>Music</Text>
        </View>
        <View className='bg-red-300 py-2 px-4 rounded-full'>
          <Text>Podcast</Text>
        </View>
      </View>

      <HorizontalScroll />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})