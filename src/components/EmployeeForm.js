import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import {Button, Card, CardSection, Input} from './common';
import {
    upsertEmployee,
    insertEmployee
} from "./../actions";

class EmployeeForm extends Component {

    onButtonPressed() {
        const { name, phone, shift } = this.props;
        insertEmployee(name, phone, shift);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Name'}
                        placeholder={'Alex'}
                        onChangeText={
                            (value) => this.props.upsertEmployee({ prop: 'name', value })
                        }
                        value={this.props.name}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={'Phone'}
                        placeholder={'XXXXXXXX'}
                        onChangeText={
                            (value) => this.props.upsertEmployee({ prop: 'phone', value })
                        }
                        value={this.props.phone}
                    />
                </CardSection>

                <CardSection style={styles.pickerCardSectionStyle}>
                    <Text style={styles.pickerTextStyle}>
                        {'Select a shift'}
                    </Text>
                    <Picker
                        selectedValue={this.props.shift}
                        onValueChange={
                            value => {
                                this.props.upsertEmployee({ prop: 'shift', value })
                            }
                        }
                    >
                        <Picker.Item label={'Monday'} value={'Monday'} />
                        <Picker.Item label={'Tuesday'} value={'Tuesday'} />
                        <Picker.Item label={'Wednesday'} value={'Wednesday'} />
                        <Picker.Item label={'Thursday'} value={'Thursday'} />
                        <Picker.Item label={'Friday'} value={'Friday'} />
                        <Picker.Item label={'Saturday'} value={'Saturday'} />
                        <Picker.Item label={'Sunday'} value={'Sunday'} />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPressed.bind(this)}>
                        <Text>{'Save'}</Text>
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    pickerCardSectionStyle: {
        flexDirection: 'column'
    },
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = state => {
    return {
        name: state.employeeForm.name,
        phone: state.employeeForm.phone,
        shift: state.employeeForm.shift
    };
};

const actions = {
    upsertEmployee
};

export default connect(mapStateToProps, actions)(EmployeeForm);
