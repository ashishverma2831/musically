import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { Button, Icon, IconButton } from 'react-native-paper'

const LibraryScreen = () => {
  return (
    <View style={styles.container}>
      <View className='flex flex-row mb-8 justify-between items-center bg-gray-800 py-6 shadow-xl rounded-xl'>
        <View className='flex flex-row items-center gap-2'>
          <Image style={{ height: 40, width: 40 }} className='rounded-full' source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <Text className='text-xl text-white font-bold'>Your Library</Text>
        </View>

        <View className='flex flex-row items-center gap-2'>
          <Button className='text-xl bg-gray-200'> + </Button>
          <Button className='text-xl bg-gray-200'> - </Button>
        </View>
      </View>

      <ScrollView className='flex flex-col gap-y-3' showsVerticalScrollIndicator={false}>
        <View className='flex mx-auto w-full flex-row items-center bg-[#001822] rounded-lg '>
          <Image style={{ height: 64, width: 64 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <View className='flex flex-col ml-2 items-center justify-center'>
            <Text className='text-md text-white font-bold'>Your Library</Text>
            <Text className='text-sm text-gray-500'>Your Library</Text>
          </View>
        </View>
        <View className='flex flex-row items-center bg-[#001822] rounded-lg '>
          <Image style={{ height: 64, width: 64 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <View className='flex flex-col ml-2 items-center justify-center'>
            <Text className='text-md text-white font-bold'>Your Library</Text>
            <Text className='text-sm text-gray-500'>Your Library</Text>
          </View>
        </View>
        <View className='flex flex-row items-center bg-[#001822] rounded-lg '>
          <Image style={{ height: 64, width: 64 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <View className='flex flex-col ml-2 items-center justify-center'>
            <Text className='text-md text-white font-bold'>Your Library</Text>
            <Text className='text-sm text-gray-500'>Your Library</Text>
          </View>
        </View>
        <View className='flex flex-row items-center bg-[#001822] rounded-lg '>
          <Image style={{ height: 64, width: 64 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <View className='flex flex-col ml-2 items-center justify-center'>
            <Text className='text-md text-white font-bold'>Your Library</Text>
            <Text className='text-sm text-gray-500'>Your Library</Text>
          </View>
        </View>
        <View className='flex flex-row items-center bg-[#001822] rounded-lg '>
          <Image style={{ height: 64, width: 64 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <View className='flex flex-col ml-2 items-center justify-center'>
            <Text className='text-md text-white font-bold'>Your Library</Text>
            <Text className='text-sm text-gray-500'>Your Library</Text>
          </View>
        </View>
        <View className='flex flex-row items-center bg-[#001822] rounded-lg '>
          <Image style={{ height: 64, width: 64 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <View className='flex flex-col ml-2 items-center justify-center'>
            <Text className='text-md text-white font-bold'>Your Library</Text>
            <Text className='text-sm text-gray-500'>Your Library</Text>
          </View>
        </View>
        <View className='flex flex-row items-center bg-[#001822] rounded-lg '>
          <Image style={{ height: 64, width: 64 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <View className='flex flex-col ml-2 items-center justify-center'>
            <Text className='text-md text-white font-bold'>Your Library</Text>
            <Text className='text-sm text-gray-500'>Your Library</Text>
          </View>
        </View>
        <View className='flex flex-row items-center bg-[#001822] rounded-lg '>
          <Image style={{ height: 64, width: 64 }} source={{ uri: 'https://cdn.britannica.com/66/251066-050-A318AF98/dakota-johnson-met-gala.jpg' }} />
          <View className='flex flex-col ml-2 items-center justify-center'>
            <Text className='text-md text-white font-bold'>Your Library</Text>
            <Text className='text-sm text-gray-500'>Your Library</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default LibraryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001822',
    justifyContent: 'center',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
  },
})