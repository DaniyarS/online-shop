import { Component, OnInit } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';

@Component({
  selector: 'app-smartphone-list',
  templateUrl: './smartphone-list.component.html',
  styleUrls: ['./smartphone-list.component.css']
})
export class SmartphoneListComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getSmartphones();
  }

}
