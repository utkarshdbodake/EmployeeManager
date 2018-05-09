import {
    EMPLOYEE_UPSERT,
    EMPLOYEE_INSERT
} from './../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday'
};

export default (stateSlice = INITIAL_STATE, action) => {

    switch(action.type) {
        case EMPLOYEE_UPSERT:
            // action.payload === { prop: 'phone', value: '6532432455' }
            return {
                ...stateSlice,
                [action.payload.prop]: action.payload.value
            };
        case EMPLOYEE_INSERT:
            return {
                ...stateSlice,
                ...action.payload
            };
        default:
            return stateSlice;
    }
};
