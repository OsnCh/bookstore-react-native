import { TokenAuthModel } from "../models/auth/tokenAuth.model";
import { SignInAuthModel } from "../models/auth/signIn.model";
import { HttpHelper } from "../../common/helpers/http.helper";

export class AuthService{
    async login(model: SignInAuthModel): Promise<TokenAuthModel>{
        return await HttpHelper.post<SignInAuthModel, TokenAuthModel>('auth/signin', model, 'json');
    }
}