import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import Premium from '../screens/Premium';
import SearchScreen from '../screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import MusicPlayer from '../screens/MusicPlayer';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
            <Stack.Navigator screenOptions={{
                headerShown:true,
                headerMode:'screen',
                headerStyle:{
                    backgroundColor:'#001822',
                },
                headerTintColor:'#fff',
            }}>
                <Stack.Screen name="Home" component={HomeScreen}  />
                <Stack.Screen name="Library" component={LibraryScreen}  />
                <Stack.Screen name="Premium" component={Premium}  />
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{
                    title:'Music Player'
                }} />
            </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})