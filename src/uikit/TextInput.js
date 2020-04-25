import React from "react";
import { Input } from 'react-native-elements';
import { light_gray_color } from "../utils/colorUtils";

export default props => (
    <Input 
        placeholder={props.placeholder}
        leftIcon={{ 
            type: 'feather', 
            name: props.iconName, 
            color: light_gray_color, 
            size: 20
        }}
        leftIconContainerStyle={{ paddingRight: 10 }}
        inputStyle={{ fontSize: 16, padding: 10 }}
        inputContainerStyle={{ margin: 5, borderBottomColor: light_gray_color, marginBottom: 20 }}
        {...props}
    />
);