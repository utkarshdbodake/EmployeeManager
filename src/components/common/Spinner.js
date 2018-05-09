import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    const { containerStyle } = styles;
    const { size, color } = props;

    return (
        <View style={containerStyle}>
            <ActivityIndicator
                size={ size || 'small' }
                color={ color || '#00ff00'}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner }
