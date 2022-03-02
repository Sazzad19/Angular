import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, products} from '../products';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cart: CartService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const productId = Number(params.get('productId'));
    this.product = products.find(prod => prod.id === productId);
  }

  addToCart(product: Product): void{
    if(this.cart.getProducts().find(prod => product.id === prod.id)){
      window.alert("Your product is already added to the cart");
    }
    else{
      this.cart.addToCart(product);
    }
  }

}
