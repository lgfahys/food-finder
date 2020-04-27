import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

export default class AppNav extends Component {
    render () {
        const Stack = createStackNavigator();
        return (
            <SafeAreaProvider>
                <NavigationContainer>
                    <Stack.Navigator   
                        screenOptions={{
                            headerShown: false
                        }} 
                        initialRouteName="Login"
                    >
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Signup" component={Signup} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}