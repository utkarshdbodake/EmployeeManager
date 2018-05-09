import {
    EMPLOYEE_UPSERT,
    EMPLOYEE_INSERT
} from './types';


const upsertEmployee = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPSERT,
        payload: { prop, value }
    };
};

const insertEmployee = (name, phone, shift) => {

    return {
        type: EMPLOYEE_INSERT,
        payload: { name, phone, shift }
    };
};

export {
    upsertEmployee,
    insertEmployee
};
