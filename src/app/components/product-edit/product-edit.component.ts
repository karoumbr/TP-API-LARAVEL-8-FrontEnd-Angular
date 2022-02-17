import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
id:any;
data: any;
product = new Product();
  constructor(private route:ActivatedRoute,private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id']);
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }
getData(){
  this.dataService.geProductById(this.id).subscribe(
    res => {
      console.log(res);
      this.data = res;
      this.product = this.data;
    }
  )
}
updateProduct(){
  this.dataService.updateProduct(this.id,this.product).subscribe(
    res => {
      
    }
  )
}
}
