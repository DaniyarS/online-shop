import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css']
})
export class AccessoryListComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getAccessories();
  }

}
