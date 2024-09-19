import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import Premium from '../screens/Premium';
import SearchScreen from '../screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:true}} />
                <Stack.Screen name="Library" component={LibraryScreen} options={{headerShown:true}} />
                <Stack.Screen name="Premium" component={Premium} options={{headerShown:true}} />
                <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:true}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})