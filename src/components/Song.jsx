import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { songs } from '../Data/data'

const Song = () => {

    const [songlist, setSonglist] = useState(songs);

  return (
    <View >
      {
        songlist.map((song, index) => {
          return (
            <View key={index}>
                <Image source={{ uri: song.tiny_url }} style={{ width: 200, height: 200 }} />
              <Text>{song.title}</Text>
            </View>
          )})
      }
    </View>
  )
}

export default Song

const styles = StyleSheet.create({})