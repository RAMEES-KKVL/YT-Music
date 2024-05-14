import { NgModule } from "@angular/core";
import { LoginBody } from "./login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthBodyComponent } from "./authBody/authBody.component";
import { SignupBody } from "./signup/signup.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
        path: 'login',
        component: LoginBody
    },
    {
        path: 'signup',
        component: SignupBody
    }
]

@NgModule({
    declarations: [
        LoginBody,
        AuthBodyComponent,
        SignupBody
    ],
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [RouterModule],
    providers: [],
    bootstrap: []
})
export class AuthModule { }