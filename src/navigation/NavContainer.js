import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottumTabNav from './BottumTabNav'

//Screens
import SplashScreen from '../screens/SplashScreen'
import ChatScreen from '../screens/ChatScreen'

const Stack = createNativeStackNavigator();

export default function NavContainer() {


    //StackNavigator
    return (
        <Stack.Navigator initialRouteName='TabNav'>
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TabNav" component={BottumTabNav} options={{ headerShown: false }} />
            <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}