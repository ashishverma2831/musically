import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import HorizontalScroll from '../components/HorizontalScroll'
import EpisodesForYou from '../components/EpisodesForYou'
import getSongs from '../api/getSongs'
import ArtistAlbums from '../components/ArtistAlbums'
import Song from '../components/Song'
import BottomTabNavigation from '../navigations/BottomTabNavigation'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import app from '../../firebaseConfig'

const db = getFirestore(app);

const HomeScreen = () => {

  const [songlist, setSonglist] = useState([]);
  const getSongs = async () => {
    const ref = collection(db, 'musically');
    const snapshot = await getDocs(ref);

    const data = snapshot.docs.map(doc => doc.data());
    console.log(data);
    
    setSonglist(data);
  }

  useEffect(() => {
    getSongs();
  }, [])

  // console.log(songlist);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View className='mb-8'>
          <Text className='text-white text-2xl px-2 mb-4'>Songs for you</Text>
          <ScrollView horizontal className='px-2 flex gap-x-2'>
            {
              songlist.map((song, index) => {
                return (
                  <View key={song.id} className='flex flex-col gap-1 w-36'>
                    <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
                    <Text className='text-md text-white truncate'>{song.song_title}</Text>
                    <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>


        <View className='mb-8'>
          <Text className='text-white text-2xl px-2 mb-4'>Episodes for you</Text>
          <ScrollView horizontal className='px-2 flex gap-x-2'>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
          </ScrollView>
        </View>

        <View className='mb-8'>
          <Text className='text-white text-2xl px-2 mb-4'>Shows to try</Text>
          <ScrollView horizontal className='px-2 flex gap-x-2'>
            <View className='flex flex-col gap-y-0.5 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-green-600 text-[12px] font-bold'>Arts & Entertainment</Text>
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-green-600 text-[12px] font-bold'>Arts & Entertainment</Text>
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-green-600 text-[12px] font-bold'>Arts & Entertainment</Text>
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-green-600 text-[12px] font-bold'>Arts & Entertainment</Text>
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-green-600 text-[12px] font-bold'>Arts & Entertainment</Text>
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-green-600 text-[12px] font-bold'>Arts & Entertainment</Text>
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
          </ScrollView>
        </View>

        <View className='mb-8'>
          <Text className='text-white text-2xl px-2 mb-4'>Best Episodes of the week</Text>
          <ScrollView horizontal className='px-2 flex gap-x-2'>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
          </ScrollView>
        </View>

        <View className='mb-8'>
          <Text className='text-white text-2xl px-2 mb-4'>Based on your recent listening</Text>
          <ScrollView horizontal className='px-2 flex gap-x-2'>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
          </ScrollView>
        </View>

        <View className='mb-8'>
          <Text className='text-white text-2xl px-2 mb-4'>India's Best</Text>
          <ScrollView horizontal className='px-2 flex gap-x-2'>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
          </ScrollView>
        </View>

        <View className='mb-8'>
          <Text className='text-white text-2xl px-2 mb-4'>Popular artist</Text>
          <ScrollView horizontal className='px-2 flex gap-x-4'>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-full' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-white text-center text-sm font-bold' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-full' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-white text-center text-sm font-bold'>dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-full' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-white text-center text-sm font-bold' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-full' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-white text-center text-sm font-bold' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-full' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-white text-center text-sm font-bold' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-full' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-white text-center text-sm font-bold' >dsmlgnlsdnglnwgl</Text>
            </View>
          </ScrollView>
        </View>

        <View className='mb-8'>
          <Text className='text-white text-2xl px-2 mb-4'>Recommended for today</Text>
          <ScrollView horizontal className='px-2 flex gap-x-2'>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
            <View className='flex flex-col gap-1 w-36'>
              <Image className='h-36 w-36 rounded-xl' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
              <Text className='text-md text-white truncate'>derreeeeeeeeeesmlgnlsdnglnwgl</Text>
              <Text className='text-gray-400 text-sm' >dsmlgnlsdnglnwgl</Text>
            </View>
          </ScrollView>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001822',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})