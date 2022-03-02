import { Injectable } from '@angular/core';
import {Product} from './products'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }
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
}
