import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsApi } from '../../services/products-api';
import { IProducts } from '../../Models/iproducts';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  currentId:number=0;
  product!:IProducts

  constructor(private active:ActivatedRoute, private prdServices:ProductsApi,private cdn:ChangeDetectorRef){
    this.active.params.subscribe((data)=>{
      this.currentId = data['id']
      // console.log(this.currentId);

      this.prdServices.getProductById(this.currentId).subscribe((data)=>{
        this.product=data;
        this.cdn.detectChanges();
      })

    })
  }

}
