import { Routes } from "@angular/router";
import { LoginComponent } from "src/app/auth/login/login.component";
import { RegisterComponent } from "src/app/auth/register/register.component";

export const full : Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
]