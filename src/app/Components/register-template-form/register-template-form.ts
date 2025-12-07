import { routes } from './../../app.routes';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUser } from '../../Models/iuser';
import { Register } from '../../services/register';

@Component({
  selector: 'app-register-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './register-template-form.html',
  styleUrl: './register-template-form.css',
})
export class RegisterTemplateForm {

  constructor(private userService:Register){}
user:IUser={} as IUser;

  AddUser(){
  this.userService.registerUser(this.user).subscribe((data)=>{
    console.log(data);

  })
}
}

