import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule ,HttpInterceptor,HTTP_INTERCEPTORS} from  '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import{AuthGuard} from '../app/auth.guard'
import{JwtInterceptor} from './jwt.interceptor'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    ProfileComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard,  {
    provide:  HTTP_INTERCEPTORS ,  
    useClass: JwtInterceptor,
    multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
