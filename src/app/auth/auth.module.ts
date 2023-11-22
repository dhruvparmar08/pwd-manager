import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
