import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../../models/product';
import {Post} from './post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  readonly ROOT_URL = '';

  posts: Observable<Post>;

  getPost() {
    this.posts = this.http.get<Post>(this.ROOT_URL + '/posts');
  }

  @Input() productItem: Product;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }


}
