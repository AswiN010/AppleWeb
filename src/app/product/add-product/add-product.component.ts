import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
constructor(private fb:FormBuilder,private ps:ProductserviceService,private router:Router){}

addProductForm=this.fb.group({
    id:[''],
    productName: [''],
    categoryId: [''],
    description: [''],
    price: [''],
    is_available: [''],
    productImg: [''],
    rating: [''],
    review: [''],
    vendor_name: [''],
    warranty: ['']
})

addNewProduct(){

  let newProductData=
  {
    id:this.addProductForm.value.id,
    productName:this.addProductForm.value.productName,
    categoryId:this.addProductForm.value.categoryId,
    description:this.addProductForm.value.description,
    price:this.addProductForm.value.price,
    is_available: this.addProductForm.value.is_available,
    productImg:this.addProductForm.value.productImg,
    rating:this.addProductForm.value.rating,
    review:this.addProductForm.value.review,
    vendor_name: this.addProductForm.value.vendor_name,
    warranty:this.addProductForm.value.warranty
  }
  this.ps.addProduct(newProductData).subscribe()
  alert('product added successfully')
  this.router.navigateByUrl('product')
}
}
