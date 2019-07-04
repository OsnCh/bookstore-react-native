import { environment } from "../../environments/environment";

const responseFunc = async function(response: Response, resolve: Function, responseType: 'string'|'json') {
    let data = (responseType == 'string') ? await response.text() : await response.json(); 
    resolve(data);
    return response;
}

const catchFunc = async function(err: any, reject: Function) {
    console.log(err); reject(err);
}

const headers: HeadersInit = {
    'Content-Type': 'application/json'
}

export class HttpHelper {

    static async get<Tresponse>(url: string, responseType: 'string'|'json'): Promise<Tresponse> {
        return await new Promise<Tresponse>((resolve, reject) => {
            fetch(`${environment.apiUrl}${url}`, {
                method: 'GET',
                headers: headers
            }).then(response => responseFunc(response, resolve, responseType)).
            catch(err => catchFunc(err, reject))
        });
    }

    static async post<Tquery, Tresponse>(url: string, model: Tquery, responseType: 'string'|'json'): Promise<Tresponse> {
        return await new Promise<Tresponse>((resolve, reject) => {
            fetch(`${environment.apiUrl}${url}`, {
                method: 'POST',
                body: JSON.stringify(model),
                headers: headers
            }).then(response => responseFunc(response, resolve, responseType)).catch(err => catchFunc(err, reject))
        })
    }

}