import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_INCORRECT_CREDENTIALS,
    LOGIN_CREATE_ACCOUNT_WEAK_PASSWORD,
    LOGIN_FAILURE_UNKNOWN_REASON
} from './types';


const emailChanged = (email) => {
    return {
        type: EMAIL_CHANGED,
        payload: email
    };
};

const passwordChanged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    };
};


const loginSuccess = (dispatch, user) => {
    const action = {
        type: LOGIN_SUCCESS,
        payload: user
    };
    dispatch(action);

    Actions.EmployeeMain();
};

const loginFailure = (dispatch, type) => {
    const action = { type };
    dispatch(action);
};

const createUser = async (dispatch, email, password) => {
    try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return loginSuccess(dispatch, user);
    }
    catch (e) {
        if (e.code === 'auth/weak-password') {
            return loginFailure(dispatch, LOGIN_CREATE_ACCOUNT_WEAK_PASSWORD);
        }
        return loginFailure(dispatch, LOGIN_FAILURE_UNKNOWN_REASON);
    }
};

const loginUser = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: LOGIN_STARTED });
        let user = null;

        try {
            user = await firebase.auth().signInWithEmailAndPassword(email, password);
            return loginSuccess(dispatch, user);
        } catch (e) {
            console.log(e);
            if (e.code === 'auth/wrong-password') {
                return loginFailure(dispatch, LOGIN_INCORRECT_CREDENTIALS);
            }
            return await createUser(dispatch, email, password);
        }
    };
};

export {
    emailChanged,
    passwordChanged,
    loginUser
};
