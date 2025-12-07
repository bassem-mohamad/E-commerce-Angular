import { Component } from '@angular/core';
import { Product } from '../product/product';
import { FormsModule } from '@angular/forms';
import { IProducts } from '../../Models/iproducts';

@Component({
  selector: 'app-parent-component',
  imports: [Product,FormsModule],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css',
})
export class ParentComponent {

  FilterByNameInParent:string=""
  prodList:IProducts[] = [];

  addToCartInParent(prd:IProducts){
    // this.prodList.push(prd)
    let obj=this.prodList.find(item=>item.id==prd.id)
    if(obj){
      obj.productQuantity+=1;
    }
    else{
      this.prodList.push({...prd,productQuantity:1})
    }
    console.log(this.prodList);

  }
}
