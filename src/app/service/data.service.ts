import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/products');
  }
  insertData(data:Product){
    return this.httpClient.post('http://127.0.0.1:8000/api/addProduct',data);
  }
  deletetData(id:any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteProduct/'+id);
  }
  geProductById(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/product/'+id);
  }
  updateProduct(id:any,data:Product){
    return this.httpClient.put('http://127.0.0.1:8000/api/updateProduct/'+id,data);
  }

}
