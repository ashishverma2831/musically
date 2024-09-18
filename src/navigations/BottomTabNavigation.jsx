import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import LibraryScreen from '../screens/LibraryScreen';
import Premium from '../screens/Premium';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName='Home'
                activeColor="red"
                barStyle={{ backgroundColor: 'blue' }}
            >
                <Tab.Screen name="Home" component={HomeScreen} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Search" component={SearchScreen}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="magnify" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Library" component={LibraryScreen}
                    options={{
                        tabBarLabel: 'Library',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="library" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Premium" component={Premium} 
                    options={{
                        tabBarLabel: 'Premium',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="music" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})