import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import HorizontalScroll from '../components/HorizontalScroll'

const HomeScreen = () => {
  return (
    <SafeAreaView className='px-4'>
      <Text>HomeScreen</Text>

      <View className='flex flex-row items-center gap-4 py-2'>
        <Pressable onPress={()=>{}} className='bg-red-300 py-2 px-4 rounded-full' >
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