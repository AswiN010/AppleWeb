import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
prodid:any
productdata:any
constructor(private ar:ActivatedRoute,private ps:ProductserviceService)
{

}

ngOnInit():void{
  this.ar.params.subscribe((data:any)=>
  {
    this.prodid=data['id']
    
  })
  this.ps.viewproduct(this.prodid).subscribe((item:any)=>
  {
    console.log(item);
    this.productdata=item
  })
}
}
