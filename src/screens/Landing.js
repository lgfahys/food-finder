import React, { Component } from "react";
import { View, KeyboardAvoidingView, Platform, Dimensions, StyleSheet } from "react-native";
import { light_red_color, white_color, dark_red_color, orange_color, dark_gray_color, light_blue_color } from '../utils/colorUtils';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Login from '../components/Login';
import Signup from '../components/Signup';

export default class Landing extends Component {
    state = {
        index: 0
    }

    setIndex = () => {
        this.setState({ index: this.state.index == 0 ? 1 : 0 })
    }

    renderTabBar(props) {
        return (
            <TabBar
                style={{ backgroundColor: white_color }}
                labelStyle={{ color: dark_gray_color }}
                {...props}
                indicatorStyle={{ backgroundColor: dark_gray_color, height: 1 }}
            />
        );
    }

    render() {

        const routes = [
            { key: 'login', title: 'Login' },
            { key: 'signup', title: 'Sign up' }
        ]
       
        const renderScene = SceneMap({
          login: Login,
          signup: Signup,
        });

        const initialLayout = { width: Dimensions.get('window').width };
        
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: white_color }}>  
                <View style={{ flex: 1, backgroundColor: light_red_color }}>
                    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                        <TabView
                            navigationState={{ index: this.state.index, routes }}
                            renderScene={renderScene}
                            onIndexChange={() => this.setIndex()}
                            initialLayout={initialLayout}
                            renderTabBar={this.renderTabBar}
                            style={{ backgroundColor: light_red_color }}
                        />
                    </KeyboardAvoidingView>
                </View>              
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    tabStyle: {
        backgroundColor: light_red_color,
      },
      tab: {
        backgroundColor: light_red_color
      },

    

});