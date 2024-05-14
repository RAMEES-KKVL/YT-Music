import { Component } from "@angular/core";
import { FormBuilder, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
// import { Signup } from "src/app/models/user.interface";

@Component({
    selector : "auth-signup",
    templateUrl : "./signup.component.html",
    styleUrls : ["./signup.component.css"]
})
export class SignupBody{
    text:string = "Signup"
    
    constructor(private userService : UserService, private fb: FormBuilder, private route: Router){}
    passwordMatch: boolean = false
    errorMessage: string = ""
    signupForm = this.fb.group({
        fullName: ["", Validators.required],
        email: ["", Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)],
        password: ["", Validators.pattern(/^(?=.[a-z])(?=.[A-Z])(?=.*\d).{8}$/)],
        confirmPassword: ["", this.passwordMatchValidator()]
    })
    datas: any
    onSubmit(){
        // const datas: Signup = this.signupForm.value as Signup
        this.datas = this.signupForm.value
        this.userService.signup(this.datas).subscribe({
            next: (response: any)=>{
                this.route.navigate(['/login'])
            },
            error: (error: any)=>{ 
                this.errorMessage = error.error
                setTimeout(() => {
                    this.errorMessage = ""
                }, 3000);
            }
        })
    }

    loginClick(){
        // this.route.navigate(['/login'])
    }

    passwordMatchValidator(): ValidationErrors | null {
        const password = this.signupForm?.get("password")?.value
        const confirmPassword = this.signupForm?.get("confirmPassword")?.value
        if(password !== confirmPassword){
            return {"passwordMismatch" : true}
        }
        return null
    }
}







