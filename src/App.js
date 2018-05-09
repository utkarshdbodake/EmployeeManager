import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'enter ur apiKey',
            authDomain: 'enter ur authDomain',
            databaseURL: 'enter ur databaseURL',
            projectId: 'enter ur projectId',
            storageBucket: 'enter ur storageBucket',
            messagingSenderId: 'enter ur messagingSenderId'
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                    <Router />
                </View>
            </Provider>
        );
    }
}

export default App;
