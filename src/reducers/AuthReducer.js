import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_STARTED,
    LOGIN_SUCCESS,
    LOGIN_INCORRECT_CREDENTIALS,
    LOGIN_CREATE_ACCOUNT_WEAK_PASSWORD,
    LOGIN_FAILURE_UNKNOWN_REASON
} from './../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    loading: false,
    error: ''
};

export default (stateSlice = INITIAL_STATE, action) => {

    switch(action.type) {
        case EMAIL_CHANGED:
            return {
                ...stateSlice,
                email: action.payload,
                error: ''
            };
        case PASSWORD_CHANGED:
            return {
                ...stateSlice,
                password: action.payload,
                error: ''
            };
        case LOGIN_STARTED:
            return {
                ...stateSlice,
                loading: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...stateSlice,
                ...INITIAL_STATE,
                user: action.payload,
            };
        case LOGIN_INCORRECT_CREDENTIALS:
            return {
                ...stateSlice,
                password: '',
                loading: false,
                error: 'Looks like you have entered wrong password!'
            };
        case LOGIN_CREATE_ACCOUNT_WEAK_PASSWORD:
            return {
                ...stateSlice,
                loading: false,
                error: 'Password should be atleast 6 characters long!'
            };
        case LOGIN_FAILURE_UNKNOWN_REASON:
            return {
                ...stateSlice,
                loading: false,
                error: 'Looks like there is some nasty bug, can you please contact support.'
            };
        default:
            return stateSlice;
    }
};
