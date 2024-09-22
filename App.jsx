import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Register from './src/screens/Register'
import BottomTabNavigation from './src/navigations/BottomTabNavigation'
import StackNavigation from './src/navigations/StackNavigation'
import DrawerNavigation from './src/navigations/DrawerNavigation'

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <BottomTabNavigation />
        {/* <DrawerNavigation /> */}
      </View>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#001822',
    justifyContent: 'center',
  },
})