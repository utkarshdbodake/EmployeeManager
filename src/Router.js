import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

const RouterComponent = () => {

    return (
        <Router>
            <Scene key="root" hideNavBar={true} initial={true}>
                <Scene key={"authMain"}>
                    <Scene key={"login"} component={LoginForm} title={"Please Login"} initial={true} />
                </Scene>

                <Scene key={"EmployeeMain"}>
                    <Scene
                        key={"employeeList"}
                        component={EmployeeList}
                        title={"Employees"}
                        initial={true}
                        rightTitle={"Add"}
                        onRight={() => Actions.employeeForm()}
                    />
                    <Scene key={"employeeForm"} component={EmployeeForm} title={"Create Employee"} />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;
