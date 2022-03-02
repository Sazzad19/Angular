import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-shipping-component',
  templateUrl: './shipping-component.component.html',
  styleUrls: ['./shipping-component.component.css']
})
export class ShippingComponentComponent implements OnInit {

  constructor(private cartService: CartService) { }

  shippingPrices = this.cartService.getShippingPrices();
  ngOnInit(): void {
  }

}
