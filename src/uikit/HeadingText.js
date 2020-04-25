import React from "react";
import { Text } from 'react-native';
import { light_gray_color, dark_gray_color } from "../utils/colorUtils";

export default props => (
    <Text style={styles.text}>
        {props.children}
    </Text>
);

styles = {
    text: {
        color: dark_gray_color,
        fontSize: 24,
        fontWeight: "500",
        margin: 5
    }
}