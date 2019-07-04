import * as jwt from 'jsonwebtoken';
import { AppUserModel } from '../models/appUser.model';

const userLocalStorageKey = 'AppUser';
const tokenLocalStorageKey = 'AppToken';

export class AutheficationService{

    logIn(token: string) {
        this.saveUserByToken(token);
    }

    saveUserByToken(token: string) {
        localStorage.setItem(tokenLocalStorageKey, token);
        let user = this.validateUser(this.decodeToken(token));
        this.saveUserData(user);
    }

    private validateUser(userObj: any): AppUserModel {
        if (!userObj || !userObj.role) {
            return null;
        }
        return userObj;
    }

    private decodeToken(token: string, options?: jwt.DecodeOptions): null | { [key: string]: any } | string {
        return jwt.decode(token, options);
    }
    
    saveUserData(user: AppUserModel) {
        localStorage.setItem(userLocalStorageKey, JSON.stringify(user));
    }
}