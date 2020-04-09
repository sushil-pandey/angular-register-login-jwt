import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  token: string;
  API_URL = 'http://localhost:3000/api';

  noAuthHeader = { headers: new HttpHeaders({ 'Noauth': 'True' }) };

  

  constructor(private httpClient: HttpClient,) { }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  public deleteToken():void {
    localStorage.removeItem('token');
  }

  getuserpayload(){
    var token=this.gettoken();
    if (token){
      var userPayload= atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else 
    return null;
  }

  gettoken(){
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    var userPayload= this.getuserpayload();
    if (userPayload)  
    return userPayload.exp > Date.now()/1000;
    else  
    return false;

  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    // this.router.navigateByUrl('/');
  }


  Register(data) {
    return this.httpClient.post(`${this.API_URL}/register`, data,this.noAuthHeader );
  }

  Login(data){
    return this.httpClient.post(`${this.API_URL}/authenticate`, data ,this.noAuthHeader  );
  }
  

  getuser(){

    return this.httpClient.get(`${this.API_URL}/userProfile`,   );
  }



}
