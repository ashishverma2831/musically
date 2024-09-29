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
import StackNavigation from './StackNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import MusicPlayer from '../screens/MusicPlayer';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const PremiumStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerMode: 'screen',
            headerStyle: {
                backgroundColor: '#001822',
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Premium" component={Premium} />
        </Stack.Navigator>
    )
}

const LibraryStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerMode: 'screen',
            headerStyle: {
                backgroundColor: '#001822',
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Library" component={LibraryScreen} />
        </Stack.Navigator>
    )
}

const SearchStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerMode: 'screen',
            headerStyle: {
                backgroundColor: '#001822',
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    )
}

const HomeStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerMode: 'screen',
            headerStyle: {
                backgroundColor: '#001822',
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{
                title: 'Music Player'
            }} />
        </Stack.Navigator>
    )
}

const BottomTabNavigation = () => {

    const theme = useTheme();
    theme.colors.secondaryContainer = 'transperent';

    return (
        <Tab.Navigator
            activeColor="white"
            inactiveColor="#535353"
            inactiveBackgroundColor="#212121"
            barStyle={{ backgroundColor: '#001822', opacity: 0.8 }}
        >
            <Tab.Screen name="Home" component={HomeStackNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Search" component={SearchStackNavigation}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Library" component={LibraryStackNavigation}
                options={{
                    tabBarLabel: 'Library',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="library" color={color} size={30} />
                    ),
                }}
            />
            <Tab.Screen name="Premium" component={PremiumStackNavigation}
                options={{
                    tabBarLabel: 'Premium',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="music" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
        // <CustomBottomTab />
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})