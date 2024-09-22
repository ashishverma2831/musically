import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import { ScrollView } from 'react-native'
import { Searchbar } from 'react-native-paper'

const SearchScreen = () => {

  const [searchQuery, setSearchQuery] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar className='bg-gray-100 rounded-md mb-4' placeholder="What do you listen to...???" onChangeText={setSearchQuery} value={searchQuery} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='mb-8'>
          <Text className='text-white text-xl mb-4'>Start browsing</Text>
          <View className='flex gap-2 flex-row flex-wrap justify-center items-center'>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 64, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Music</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 64, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Podcasts</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 64, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Live Events</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 64, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Home of I-Pop</Text>
            </ImageBackground>
          </View>
        </View>

        <View className='mb-8'>
          <Text className='text-white text-xl mb-4'>Explore your genres</Text>
          <View className='flex gap-2 flex-row flex-wrap  items-center'>
            <ImageBackground className='flex flex-1 p-1 justify-end' style={{ height: 184, minWidth: 100 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-md font-bold'>#Music</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 p-1 justify-end' style={{ height: 184, minWidth: 100 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-md font-bold'>#Podcasts</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 p-1 justify-end' style={{ height: 184, minWidth: 100 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-md font-bold'>#LiveEvents</Text>
            </ImageBackground>
          </View>
        </View>


        <View className='mb-8'>
          <Text className='text-white text-xl mb-4'>Browse All</Text>
          <View className='flex gap-4 flex-row flex-wrap justify-center items-center'>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Music</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Podcasts</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Live Events</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Home of I-Pop</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Music</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Podcasts</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Live Events</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Home of I-Pop</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Music</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Podcasts</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Live Events</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Home of I-Pop</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Music</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Podcasts</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Live Events</Text>
            </ImageBackground>
            <ImageBackground className='flex flex-1 px-3.5 py-2.5' style={{ height: 96, minWidth: 150 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} >
              <Text className='text-white text-lg font-bold'>Home of I-Pop</Text>
            </ImageBackground>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001822',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})