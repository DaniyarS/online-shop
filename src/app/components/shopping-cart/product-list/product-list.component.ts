import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product';
import {Post} from './post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  readonly ROOT_URL = '';
  productList: Product[] = [];

  posts: Observable<Post[]>;

  getPost() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');
  }


  constructor(private productService: ProductService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

}
