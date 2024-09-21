import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import HorizontalScroll from '../components/HorizontalScroll'
import EpisodesForYou from '../components/EpisodesForYou'
import getSongs from '../api/getSongs'
import ArtistAlbums from '../components/ArtistAlbums'
import Song from '../components/Song'
import BottomTabNavigation from '../navigations/BottomTabNavigation'

const HomeScreen = () => {

  // const [songlist, setSonglist] = useState([]);
  // const getSongs = async () => {
  //   const url = 'https://youtube-music-api-yt.p.rapidapi.com/get-artist-songs?artistId=UCh6W-tvSImXZ8Gbz3pMNYxg';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-key': 'ddba72a05bmsh6bf38ece06aa542p1b5085jsnd329d52250e5',
  //       'x-rapidapi-host': 'youtube-music-api-yt.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     setSonglist(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getSongs();
  // }, []);  

  // console.log(songlist);
  
  
  return (
      <ScrollView>
        {/* <BottomTabNavigation /> */}
        <Text>Home Screen</Text>
      </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})