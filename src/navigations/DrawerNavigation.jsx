import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen';
import LibraryScreen from '../screens/LibraryScreen';
import Premium from '../screens/Premium';
import SearchScreen from '../screens/SearchScreen';
import BottomTabNavigation from './BottomTabNavigation';
import ListeningHistory from '../screens/ListeningHistory';
import StackNavigation from './StackNavigation';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{
                headerShown: true,
                drawerStyle: {
                    backgroundColor: '#000',
                    width: 240,
                },
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: 'white',
            }} >
                <Drawer.Screen name="Home" component={HomeScreen} />
                {/* <Drawer.Screen name="AddAccount" component={BottomTabNavigation} />
                <Drawer.Screen name="WhatsNew" component={BottomTabNavigation} />
                <Drawer.Screen name="ListeningHistory" component={BottomTabNavigation} />
                <Drawer.Screen name="SettingsAndPrivacy" component={BottomTabNavigation} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})