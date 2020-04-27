import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import {MessengerService} from "../../../services/messenger.service";
import {DetailService} from "../../../services/detail.service";

@Component({
  selector: 'app-accessory-list',
  templateUrl: './accessory-list.component.html',
  styleUrls: ['./accessory-list.component.css']
})
export class AccessoryListComponent implements OnInit {

  productList: Product[] = [];
  productItem: Product;

  constructor(private productService: ProductService, private msg: MessengerService, private detail: DetailService) {
  }

  ngOnInit(): void {
    this.getAccessories()
  }

  getAccessories() {
    const accessoriesObservable = this.productService.getAccessories()
      .subscribe(products => this.productList = products)
  }
  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }

  viewDetail() {
    this.detail.changeMessage(this.productItem);
  }
}
