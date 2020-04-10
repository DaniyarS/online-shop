import { Injectable } from '@angular/core';

import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    new Category(1, 'smartphones'),
    new Category(2, 'tablets'),
    new Category(3, 'watches'),
    new Category(4, 'accessories')
  ];

  constructor() { }

  getCategories() {
    return this.categories;
  }
}
