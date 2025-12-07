import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Login {

  userSubject:BehaviorSubject<boolean>

  constructor() {
    this.userSubject=new BehaviorSubject<boolean>(false);

  }

  Login(userName:string, password:string){

    let token = "1234567890abcdef";
    localStorage.setItem("myToken", token);
    this.userSubject.next(true);
  }
  Logout(){
    localStorage.removeItem("myToken");
    this.userSubject.next(false);
  }
  get isLoggedIn():boolean{
    return localStorage.getItem("myToken")? true : false;
  }
  methodSubject(){
    return this.userSubject;
  }
}
