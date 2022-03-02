import { Injectable } from '@angular/core';
import {Product} from './products';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) { }
  items: Product[] = [];

  addToCart(product: Product): void{
    this.items.push(product);
  }
  getProducts(): Product[]{
     return this.items;
   }
  clearCart(): Product[]{
      this.items = [];
      return this.items;
    }
  getShippingPrices(){
      return this.http.get<{type: String, price: number}[]>('/assets/shipping.json');
    }
}
