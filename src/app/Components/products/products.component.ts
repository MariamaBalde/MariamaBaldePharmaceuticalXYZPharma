import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Classes/product';

import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] =[];
  pro! :any[];
  
  Name!:string;
 

  constructor(private httpserv:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.fetchAll();
  }

  public fetchAll(){
    this.httpserv.getproduct().subscribe((response)=> {
      this.products = response;
      console.log(response);
      })
  }

  

  detailsProduct(id: number){
    this.router.navigate(['/product-details', id])
  }

  Search(){
    if(this.Name==""){
      this.ngOnInit();
    }else{
      this.pro=this.pro.filter(products=>{
        return products.Name.toLocaleLowerCase().match(this.Name.toLocaleLowerCase());
      })
    }
  }




 

}
