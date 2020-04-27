import React, { Component } from "react";
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { Icon } from 'react-native-elements';
import { light_red_color, white_color } from '../utils/colorUtils';
import TextInput from '../uikit/TextInput';
import HeadingText from '../uikit/HeadingText';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView
                style={styles.container}
            >                
                <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.card}>
                    <ScrollView contentContainerStyle={styles.innerContainer}>
                        <View style={{ marginLeft: 15, marginBottom: 50 }}>
                            <HeadingText>Welcome Back!</HeadingText>
                        </View>
                        <TextInput
                            placeholder='Email'
                            iconName='mail'
                        />
                        <TextInput
                            placeholder='Password'
                            iconName='lock'
                            secureTextEntry={true}
                        />
                        <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 100, marginBottom: 20 }}>
                            <Icon 
                                raised
                                reverse
                                name={'arrow-right'}
                                type={'feather'}
                                color={light_red_color}
                            />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: light_red_color
    },

    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 10
    },

    card: {
        backgroundColor: white_color,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'absolute',
        bottom: 0,
        paddingBottom: 50,
        paddingTop: 50
    }

});