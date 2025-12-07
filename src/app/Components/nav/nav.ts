import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Login } from '../../services/login';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  isLogin:boolean =false;
  constructor(private user:Login, private router: Router) {
    // this.isLogin=this.user.isLoggedIn
    this.user.methodSubject().subscribe((data)=>
    {
      this.isLogin=data;
    });
}

  logout() {
    this.user.Logout();
    this.router.navigate(['/Login']);
  }
}
