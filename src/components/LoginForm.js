import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {
    Card,
    CardSection,
    Input,
    Button,
    Spinner
} from "./common";
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions/index';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onLoginButtonPress() {
        const { loginUser, email, password } = this.props;
        loginUser(email, password);
    }

    renderLoginButton() {

        if (this.props.isLoading) {
            return <Spinner color={'#000000'}/>
        }

        return (
                <Button onPress={this.onLoginButtonPress.bind(this)}>
                    <Text>Login</Text>
                </Button>
        );
    }

    handleAuthenticationFailure() {
        const { errorTextContainerStyle, errorTextStyle } = styles;

        if (this.props.authenticationErrorText) {
            return (
                <View style={errorTextContainerStyle}>
                    <Text style={errorTextStyle}>
                        {this.props.authenticationErrorText}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Email id'}
                        placeholder={'Enter your email id'}
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={'Password'}
                        placeholder={'Enter your password'}
                        secureTextEntry={true}
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.handleAuthenticationFailure()}

                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextContainerStyle: {
        backgroundColor: 'white'
    },
    errorTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        authenticationErrorText: state.auth.error,
        isLoading: state.auth.loading
    };
};

const actions = {
    emailChanged,
    passwordChanged,
    loginUser
};

export default connect(mapStateToProps, actions)(LoginForm);
