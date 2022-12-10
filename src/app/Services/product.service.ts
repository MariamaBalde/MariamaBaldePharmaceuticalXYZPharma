import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Classes/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


 dbUrl: string = "http://localhost:3000/products";


  constructor(private http:HttpClient) { }

  public getproduct():Observable<Product[]>{
    return this.http.get<Product[]>(this.dbUrl);
  }

 
  
  public getproductdetailsById(id:string | null){
    return this.http.get<Product>(this.dbUrl + '/' +id);
  }

 



 
}
