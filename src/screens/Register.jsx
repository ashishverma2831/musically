import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import { Button, TextInput } from 'react-native-paper'

const Register = () => {
    return (
        <View style={styles.container}>
            <View className='bg-yellow-300 flex gap-y-4'>
                <View className='flex justify-center mx-auto'>
                    <Image source={require('../assets/icon.png')} className='w-40 h-40' />
                </View>
                <View className='bg-red-400 flex gap-y-4'>
                    <View className='flex gap-y-2'>
                        <TextInput label='Email' />
                        <TextInput label='Password' />
                        <Button className='text-lg'>Register</Button>
                    </View>
                    <View className='bg-blue-400 flex flex-row justify-center items-center py-2'>
                        <Text className='text-md'>Already have an account? </Text>
                        <Button className='text-blue-500 hover:text-blue-600'>Login</Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        display: 'flex',
        justifyContent: 'center',
    },
})