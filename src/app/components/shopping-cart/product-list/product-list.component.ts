import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
// import {Product} from '../../../models/product';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

}
