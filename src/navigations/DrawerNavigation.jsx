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
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#001822',
                    },
                    headerTintColor: '#fff',
                }} >
                <Drawer.Screen name="drawer_tab_1" component={BottomTabNavigation} 
                    options={{
                        title: 'Home',
                    }}
                />
                <Drawer.Screen name="drawer_tab_2" component={BottomTabNavigation} />
                <Drawer.Screen name="drawer_tab_3" component={BottomTabNavigation} />
                <Drawer.Screen name="drawer_tab_4" component={BottomTabNavigation} />
                <Drawer.Screen name="drawer_tab_5" component={BottomTabNavigation} />
            </Drawer.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})