import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import Premium from '../screens/Premium';
import SearchScreen from '../screens/SearchScreen';
// import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation';
import ListeningHistory from '../screens/ListeningHistory';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
            <Drawer.Navigator screenOptions={{
                headerShown: true,
                drawerStyle: {
                    backgroundColor: '#000',
                    width: 240,
                },
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: 'white',
            }} >
                <Drawer.Screen name="Home" component={StackNavigation} />
                {/* <Drawer.Screen name="AddAccount" component={BottomTabNavigation} />
                <Drawer.Screen name="WhatsNew" component={BottomTabNavigation} />
                <Drawer.Screen name="ListeningHistory" component={BottomTabNavigation} />
                <Drawer.Screen name="SettingsAndPrivacy" component={BottomTabNavigation} /> */}
            </Drawer.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})