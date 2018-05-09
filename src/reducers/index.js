import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

const store = {
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
};

export default combineReducers(store);
