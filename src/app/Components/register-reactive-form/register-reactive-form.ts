import { Component } from '@angular/core';
import { Register } from '../../services/register';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Login } from '../../services/login';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-register-reactive-form',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register-reactive-form.html',
  styleUrl: './register-reactive-form.css',
})
export class RegisterReactiveForm {

  userFormGroup:FormGroup;

  isLogin:boolean=false;

constructor(private userService:Register,private router:Router) {
  this.userFormGroup=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3)]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
  });

}

get nameMethod(){
  return this.userFormGroup.get('name');
}
get emailMethod(){
  return this.userFormGroup.get('email');
}
get passwordMethod(){
  return this.userFormGroup.get('password');
}

RegisterUser(){
  this.userService.registerUser(this.userFormGroup.value).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/Login']);
  })
}

}
