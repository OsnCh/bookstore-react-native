export default class State{
    constructor(){
        this.isLoading = false;
        this.inputsRequired = {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            confirmPassword: false
        }
        this.inputsChanged = {
            firstName: false,
            lastName: false,
            email: false,
            password: false,
            confirmPassword: false
        }
    }

    isLoading: boolean;
    inputsRequired: {
        firstName: boolean;
        lastName: boolean;
        email: boolean;
        password: boolean;
        confirmPassword: boolean;
    };
    inputsChanged: {
        firstName: boolean;
        lastName: boolean;
        email: boolean;
        password: boolean;
        confirmPassword: boolean;
    }

    isRequired = function(): boolean{
        let values = Object.values(this.inputsRequired);
        for(let i=0;i<values.length;i++){
            if(!values[i]){
                return false;
            }
        }
        return true;
    }
}