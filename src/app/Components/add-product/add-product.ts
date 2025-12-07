import { IProducts } from './../../Models/iproducts';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ProductsApi } from '../../services/products-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  selectedFile: File | null = null; // لتخزين الملف

  constructor(private prdService:ProductsApi,private router: Router) {}
    product:IProducts ={} as IProducts;

     onFileSelected(event: any) {
    if(event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

    addProduct(){
      this.prdService.addProduct(this.product).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/products']);
      });
    }
}
