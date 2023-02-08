import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})


export class DeleteProductComponent {
  id:any
  constructor(private ps:ProductserviceService,private ar:ActivatedRoute,private router:Router)
  {}
    ngOnInit():void{
      this.ar.params.subscribe((data:any)=>
      {
        this.id=data['id']
        
      })
      this.ps.deleteproduct(this.id).subscribe((data:any)=>
      {
        alert('deleted successfully')
        this.router.navigateByUrl('product')
      })
      
    }
  
  
    delete()
    {
      this.ps.deleteproduct(this.id).subscribe()
      alert('deleted successfully')
      this.router.navigateByUrl('product')
    }
  }
  