import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { IProducts } from '../Models/iproducts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class ProductsApi {

  headersprop={}

  constructor(private http:HttpClient) {
    this.headersprop={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        "authorization":`Bearer ${localStorage.getItem("myToken")}`
      })
    }
  }


  // endpoint
  getAllProducts() :Observable<IProducts[]> {
    // return this.http.get<IProducts[]>('http://localhost:3000/products')
    return this.http.get<IProducts[]>(`${environment.baseUrl}/products`)
  }

  getProductById(param:number):Observable<IProducts> {
    // return this.http.get<IProducts>(`http://localhost:3000/products/${param}`)
    return this.http.get<IProducts>(`${environment.baseUrl}/products/${param}`)
  }



  // search(value:string):Observable<IProducts[]>{
  //   return this.http.get<IProducts[]>('http://localhost:3000/products?productName=${value}')
  // }

  addProduct(product:IProducts):Observable<IProducts>{
    // return this.http.post<IProducts>('http://localhost:3000/products',product)
    return this.http.post<IProducts>(`${environment.baseUrl}/products`,product,this.headersprop)
    .pipe(retry(2));
  }
}
