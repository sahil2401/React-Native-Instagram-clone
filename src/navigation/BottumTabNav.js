import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//Screens
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ReelScreen from '../screens/ReelScreen'
import NotificaitonScreen from '../screens/NotificaitonScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator();


export default function BottumTabNav() {

    const screenOptions = () => {
        return {
            tabBarShowLabel: false,
            tabBarStyle: {
                elevation: 1,
                backgroundColor: '#FFFFFF',
            }
        }
    }

    const IconStyleOptions = (iconName) => {
        return {
            headerShown: false,
            tabBarIcon: ({ focused }) => (
                <FontAwesome5
                    name={iconName}
                    size={focused ? 26 : 20}
                    color={'#000000'}
                    solid={focused ? true : false}
                />
            )
        }
    }

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeScreen} options={IconStyleOptions('home')} />
            <Tab.Screen name="Search" component={SearchScreen} options={IconStyleOptions('search')} />
            <Tab.Screen name="Reel" component={ReelScreen} options={IconStyleOptions('play-circle')} />
            <Tab.Screen name="Notificaiton" component={NotificaitonScreen} options={IconStyleOptions('heart')} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={IconStyleOptions('user-circle')} />
        </Tab.Navigator>
    )
}