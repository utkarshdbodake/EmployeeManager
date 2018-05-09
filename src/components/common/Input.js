import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
    const { label, placeholder, onChangeText, value, secureTextEntry } = props;
    const { containerStyle, labelStyle, inputStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>

            <TextInput
                style={inputStyle}
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 20,
        paddingLeft: 20,
        flex: 0.9
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 24,
        flex: 2.1
    }
}

export { Input }
