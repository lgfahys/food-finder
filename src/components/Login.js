import React, { Component } from "react";
import { StyleSheet, View, ScrollView, KeyboardAvoidingView } from "react-native";
import { Icon } from 'react-native-elements';
import { light_red_color, white_color } from '../utils/colorUtils';
import TextInput from '../uikit/TextInput';
import HeadingText from '../uikit/HeadingText';

export default class Login extends Component {
    render() {
        return (
            <View style={styles.card}> 
                <ScrollView contentContainerStyle={styles.innerContainer}>
                    <View style={{ marginLeft: 15, marginBottom: 50, paddingTop: 50 }}>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({

    innerContainer: {
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        height: 600
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
        bottom: -10
    }

});