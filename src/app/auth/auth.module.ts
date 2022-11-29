import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
