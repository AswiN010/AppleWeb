import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  httpclient: any;

  constructor(private http:HttpClient) { }
  search=new BehaviorSubject("")
viewAllProducts()
{
 return this.http.get("http://localhost:3000/products")
}

addProduct(newproduct:any)
{
return this.http.post("http://localhost:3000/products",newproduct)
}
viewproduct(id:any)
 {
  return this.http.get("http://localhost:3000/products/"+id)
 }
 deleteproduct(id:any)
 {
  return this.http.delete("http://localhost:3000/products/"+id)
 }

 
 editproduct(productid:any,productdata:any)
 {
   return this.http.put("http://localhost:3000/products/"+productid,productdata)
 }
}

