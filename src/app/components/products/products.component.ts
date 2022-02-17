import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any;
product=new Product;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
      console.log('liste des produits');
      this.dataService.getData().subscribe(res =>{
        console.log(res);
        this.products = res;
      })
  }
  insertData(){
    //console.log('bonjour-insertion-test');
    //console.log(this.product);
    this.dataService.insertData(this.product).subscribe(res =>{
      //console.log(res);
      this.getProductData();
    })

  }
  deleteData(id:any){
    //console.log(id);
    this.dataService.deletetData(id).subscribe(res =>{
      //console.log(res);
      this.getProductData();
    })

  }

}
