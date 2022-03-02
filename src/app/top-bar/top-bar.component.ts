import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
       constructor(private cartService: CartService){}
       cartItems : Product[] = this.cartService.getProducts();
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/