import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ RegisterComponent } from '../app/register/register.component';
import{LoginComponent} from '../app/login/login.component';
import{ProfileComponent}  from '../app/profile/profile.component'
import{AuthGuard} from './auth.guard'

const routes: Routes = [
  // { path: '', component: CreateComponent }, 
  { path: 'Register',      component: RegisterComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'profile',      component: ProfileComponent,  },
  // canActivate :[AuthGuard]

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
