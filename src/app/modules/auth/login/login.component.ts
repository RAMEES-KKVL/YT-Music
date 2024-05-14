import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
    selector : "auth-login",
    templateUrl : "./login.component.html",
    styleUrls : ["./login.component.css"]
})
export class LoginBody{
    constructor(private http: HttpClient) {}

    loginForm = {
        email: "",
        password: ""
    }

    onSubmit( formData: {email: string, password: string} ){
        
        this.http.post<loginResponse> ('http://localhost:7000/login', formData, httpOptions)
        .subscribe({
            next: response =>{
                console.log(response);
                
            },
            error: error =>{
                console.log(error);
                
            }
        })
    }
}

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
}

interface loginResponse{
    token: string 
}

