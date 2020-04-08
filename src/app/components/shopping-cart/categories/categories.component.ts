import {Component, OnInit} from '@angular/core';
import {Category} from './category';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Post} from './post';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  readonly ROOT_URL = '';

  categories: Observable<Category[]>;
  posts: Observable<Post[]>;

  getCategory() {
    this.categories = this.http.get<Category[]>(this.ROOT_URL + '/posts');
  }

  getPost() {
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts');
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

}
