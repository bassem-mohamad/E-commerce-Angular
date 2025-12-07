import { Component } from '@angular/core';
import { Login } from '../../services/login';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login-reactive-form',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login-reactive-form.html',
  styleUrl: './login-reactive-form.css',
})
export class LoginReactiveForm {

  userFormGroup:FormGroup;
  isLogin:boolean=false;

  constructor(private userlogin:Login,private router:Router) {

    this.userFormGroup=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    password:new FormControl('',[Validators.required]),
  });

    // this.isLogin=this.userlogin.isLoggedIn
    this.userlogin.methodSubject().subscribe((data)=>
    {
      this.isLogin=data;
    });
  }

  get nameMethod(){
  return this.userFormGroup.get('name');
}
get passwordMethod(){
  return this.userFormGroup.get('password');
}

  Login(){
  // this.userlogin.Login("bassem", "123456");
  this.userlogin.Login(this.userFormGroup.value.name,this.userFormGroup.value.password);
  if(this.userlogin.isLoggedIn){
    this.router.navigate(['/products']);
  }
  // this.isLogin=this.userlogin.isLoggedIn

}
LogOut(){
this.userlogin.Logout();
this.isLogin=this.userlogin.isLoggedIn
}
}
