import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScrollCard = () => {
    return <View style={{ width: 200, height: 200, backgroundColor: 'red' }} >
    <Text>card 1</Text>
</View>
}

const HorizontalScroll = () => {
  return (
    <View>
      <ScrollView horizontal>
        <ScrollCard/>
        <ScrollCard/>
        <ScrollCard/>
        <ScrollCard/>
      </ScrollView>
    </View>
  )
}

export default HorizontalScroll

const styles = StyleSheet.create({})