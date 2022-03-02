import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { }
  cartItems: Product[] = this.cartService.getProducts();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  onSubmit(){
    this.cartItems = this.cartService.clearCart();
    console.warn("Your order has been submitted with the following value", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  ngOnInit(): void {
  }

}
