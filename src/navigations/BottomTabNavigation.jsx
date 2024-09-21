import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import Premium from '../screens/Premium';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Drawer, useTheme } from 'react-native-paper';
import DrawerNavigation from './DrawerNavigation';

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigation = () => {
    
    const theme = useTheme();
    theme.colors.secondaryContainer = 'transperent';

    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='Home'
                activeColor="white"
                inactiveColor="#535353"
                inactiveBackgroundColor="#212121"
                barStyle={{ backgroundColor: '#212121',opacity:0.8 }}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Tab.Screen name="Home" component={DrawerNavigation} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen name="Search" component={DrawerNavigation}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen name="Library" component={DrawerNavigation}
                    options={{
                        tabBarLabel: 'Library',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="library" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen name="Premium" component={DrawerNavigation} 
                    options={{
                        tabBarLabel: 'Premium',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="music" color={color} size={30} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})