import React from "react";
import { Text, ScrollView, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import state from '../states/registration.state'
import styles from '../shared/styles/registration.style'
import globalStyles from '../shared/styles/global.style'
import colors from "../shared/constants/colors";
import State from "../states/registration.state";
import * as constants from "../common/constants"

export class RegistrationComponent extends React.Component<{}, state>{
    static navigationOptions = {
        title: 'Regitration'
    };

    constructor(props) {
        super(props);
        this.state = new State();
    }

    private firstName: string;
    private lastName: string;
    private email: string;
    private password: string;
    private confirmPassword: string;

    render() {
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <View style={[globalStyles.container, {paddingTop: 20}]}>
                    <TextInput onChangeText={(data) => this.checkInputData(data, constants.emptyRegex , 'firstName')}
                        placeholder="First Name" style={[globalStyles.inputs, styles.formEl]}></TextInput>
                    {
                        this.showInputMessage('firstName') ? null :
                            <Text style={[globalStyles.errorInputs,styles.formEl]}>First name is not required</Text>
                    }

                    <TextInput onChangeText={(data) => this.checkInputData(data, constants.emptyRegex, 'lastName')}
                        placeholder="Last Name" style={[globalStyles.inputs, styles.formEl]}></TextInput>
                    {
                        this.showInputMessage('lastName') ? null :
                            <Text style={[globalStyles.errorInputs,styles.formEl]}>Last name is not required</Text>
                    }
                    
                    <TextInput onChangeText={(data) => this.checkInputData(data, constants.emailRegex , 'email')}
                        placeholder="Email" style={[globalStyles.inputs, styles.formEl]}></TextInput>
                    {
                        this.showInputMessage('email') ? null :
                            <Text style={[globalStyles.errorInputs,styles.formEl]}>Email name is not required</Text>
                    }

                    <TextInput secureTextEntry={true} onChangeText={(data) => {this.checkInputData(data, constants.passwordRegex , 'password'); this.checkConfirmPassword()}}
                        placeholder="Password" style={[globalStyles.inputs, styles.formEl]}></TextInput>
                     {
                        this.showInputMessage('password') ? null :
                            <Text style={[globalStyles.errorInputs,styles.formEl]}>Password is not required</Text>
                    }

                    <TextInput secureTextEntry={true} onChangeText={(data) => this.checkConfirmPassword(data) } 
                        placeholder="Confirm Password" style={[globalStyles.inputs, styles.formEl]}></TextInput>
                    {
                        this.showInputMessage('confirmPassword') ? null :
                            <Text style={[globalStyles.errorInputs,styles.formEl]}>Passwords do not match</Text>
                    }
                    <TouchableOpacity disabled={this.state.isLoading || !this.state.isRequired()}
                        style={[styles.formEl, { height: 40, backgroundColor: colors.primary }]}
                        activeOpacity={0.5} onPress={this.registration.bind(this)}>
                        {
                            this.state.isLoading ?
                                <ActivityIndicator size="small" style={styles.registrationButtonContent} color={colors.white} /> :
                                <Text style={styles.registrationButtonContent}>Registration</Text>}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    private checkInputData(data: string, pattern: string | RegExp, propertyName: string) {
        let regexp = new RegExp(pattern);
        let state = this.state;
        state.inputsRequired[propertyName] = data && regexp.exec(data);
        state.inputsChanged[propertyName] = true;
        this.setState(state);
        debugger;
        this[propertyName] = data;
    }

    private checkConfirmPassword(data?: string){
        if(data){
            this.confirmPassword = data;
        }
        let result = this.password == this.confirmPassword;
        let state = this.state;
        state.inputsRequired.confirmPassword = result;
        state.inputsChanged.confirmPassword = true;
        this.setState(state); 
    }

    private showInputMessage(name: string): boolean{
        return this.state.inputsRequired[name] || !this.state.inputsChanged[name]
    }

    private registration(){
        this.setState({ isLoading: true });
        setTimeout(() => this.setState({ isLoading: false }), 10000)
    }
}