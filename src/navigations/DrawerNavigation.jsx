import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import Premium from '../screens/Premium';
import SearchScreen from '../screens/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Library" component={LibraryScreen} />
                <Drawer.Screen name="Premium" component={Premium} />
                <Drawer.Screen name="Search" component={SearchScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})