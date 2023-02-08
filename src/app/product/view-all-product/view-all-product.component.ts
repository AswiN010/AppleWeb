import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
   selector: 'app-view-all-product',
   templateUrl: './view-all-product.component.html',
   styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent {
  productlist:any
filterproducts:any
searchKey:any
  constructor(private pos:ProductserviceService)
  {}
  ngOnInit():void
  {
    this.pos.viewAllProducts().subscribe((data:any)=>
    {
      this.productlist=data
    })

    this.pos.search.subscribe((data:any)=>
    {
     this.searchKey=data
    })
  }


  filter(category:any)
  {
    this.filterproducts=this.productlist.filter((item:any)=>
    {
      if(item.categoryId==category || category== "")
      {
        return item
      }
    })
  }
  
}
