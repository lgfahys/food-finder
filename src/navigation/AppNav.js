import React, { Component } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/Landing';

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
                        initialRouteName="Landing"
                    >
                        <Stack.Screen name="Landing" component={Landing} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        )
    }
}