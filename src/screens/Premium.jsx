import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import { Button, Divider } from 'react-native-paper'

const Premium = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='bg-gray-800 mx-2 p-4 rounded-xl'>
          <Text className='text-2xl text-white mb-2'>Why join Premium?</Text>
          <Divider className='mb-2' />
          <Text className='text-lg text-gray-500 mb-1'>Download music.</Text>
          <Text className='text-lg text-gray-500 mb-1'>Listen without ads.</Text>
          <Text className='text-lg text-gray-500 mb-1'>Play any song.</Text>
          <Text className='text-lg text-gray-500 mb-1'>Unlimited skips.</Text>
          <Text className='text-lg text-gray-500 mb-1'>High quality audio.</Text>
          <Text className='text-lg text-gray-500 mb-1'>Listen offline.</Text>
          <Text className='text-lg text-gray-500 mb-1'>Cancel anytime.</Text>
        </View>


        <View className='px-2 mt-8'>
          <Text className='text-white text-xl mb-4'>Available Plans</Text>

          <View className='flex gap-8'>
            <View className='bg-gray-800 overflow-hidden rounded-xl'>
              <Text style={{borderBottomRightRadius:8}} className='bg-purple-500 w-40 text-center py-0.5 text-white'> ₹119 for 2 months </Text>
              <View className='flex p-4'>
                <View className='my-4 px-2'>
                  <Text className='text-white text-md'>musically Premium</Text>
                  <Text className='text-xl font-bold text-purple-500'>Individual</Text>
                  <Text className='text-white text-lg '>₹119 for 2 months</Text>
                  <Text className='text-gray-500 text-md  '>₹119 / month after</Text>
                </View>
                <Divider />
                <View className='my-4 px-2'>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                </View>
                <View className='my-4 gap-y-4'>
                  <Button className='py-1' mode='contained' >Get Premium</Button>
                  <Button className='py-1' mode='outlined'>Get Premium</Button>
                </View>
                <Text className='text-md text-gray-500 text-center'>Terms and Policies</Text>
              </View>
            </View>

            <View className='bg-gray-800 overflow-hidden rounded-xl'>
              <Text style={{borderBottomRightRadius:8}} className='bg-purple-500 w-40 text-center py-0.5 text-white'> ₹119 for 2 months </Text>
              <View className='flex p-4'>
                <View className='my-4 px-2'>
                  <Text className='text-white text-md'>musically Premium</Text>
                  <Text className='text-xl font-bold text-purple-500'>Individual</Text>
                  <Text className='text-white text-lg '>₹119 for 2 months</Text>
                  <Text className='text-gray-500 text-md  '>₹119 / month after</Text>
                </View>
                <Divider />
                <View className='my-4 px-2'>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                </View>
                <View className='my-4 gap-y-4'>
                  <Button className='py-1' mode='contained' >Get Premium</Button>
                  <Button className='py-1' mode='outlined'>Get Premium</Button>
                </View>
                <Text className='text-md text-gray-500 text-center'>Terms and Policies</Text>
              </View>
            </View>

            <View className='bg-gray-800 overflow-hidden rounded-xl'>
              <Text style={{borderBottomRightRadius:8}} className='bg-purple-500 w-40 text-center py-0.5 text-white'> ₹119 for 2 months </Text>
              <View className='flex p-4'>
                <View className='my-4 px-2'>
                  <Text className='text-white text-md'>musically Premium</Text>
                  <Text className='text-xl font-bold text-purple-500'>Individual</Text>
                  <Text className='text-white text-lg '>₹119 for 2 months</Text>
                  <Text className='text-gray-500 text-md  '>₹119 / month after</Text>
                </View>
                <Divider />
                <View className='my-4 px-2'>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                </View>
                <View className='my-4 gap-y-4'>
                  <Button className='py-1' mode='contained' >Get Premium</Button>
                  <Button className='py-1' mode='outlined'>Get Premium</Button>
                </View>
                <Text className='text-md text-gray-500 text-center'>Terms and Policies</Text>
              </View>
            </View>

            <View className='bg-gray-800 overflow-hidden rounded-xl'>
              <Text style={{borderBottomRightRadius:8}} className='bg-purple-500 w-40 text-center py-0.5 text-white'> ₹119 for 2 months </Text>
              <View className='flex p-4'>
                <View className='my-4 px-2'>
                  <Text className='text-white text-md'>musically Premium</Text>
                  <Text className='text-xl font-bold text-purple-500'>Individual</Text>
                  <Text className='text-white text-lg '>₹119 for 2 months</Text>
                  <Text className='text-gray-500 text-md  '>₹119 / month after</Text>
                </View>
                <Divider />
                <View className='my-4 px-2'>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                  <Text className='text-white text-md'> 1 Premium account</Text>
                </View>
                <View className='my-4 gap-y-4'>
                  <Button className='py-1' mode='contained' >Get Premium</Button>
                  <Button className='py-1' mode='outlined'>Get Premium</Button>
                </View>
                <Text className='text-md text-gray-500 text-center'>Terms and Policies</Text>
              </View>
            </View>

            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Premium

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001822',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
})