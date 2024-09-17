import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = () => {
  return (
    <SafeAreaView style={styles.container}>
        <View className=''>
            <Text className=''>Register</Text>
        </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})