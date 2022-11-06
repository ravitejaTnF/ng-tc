import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(){
    localStorage.setItem('username','Raviteja');
  }
  checkAuthentication(){
    return (localStorage.getItem('username') === 'Raviteja');
  }

  auth2(){
    
  }
}
