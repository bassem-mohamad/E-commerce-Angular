import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../Models/iuser';
import { Observable, retry } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Register {
  constructor(private http:HttpClient){

  }
  // http = Inject(HttpClient);

  registerUser(user:IUser):Observable<IUser>{
    return this.http.post<IUser>(`${environment.baseUrl}/users`,user).pipe(retry(3));
}
}
