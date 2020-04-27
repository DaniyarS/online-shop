import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category';
import {CategoryService} from '../../../services/category.service';
import {MessengerService} from '../../../services/messenger.service';
import {log} from 'util';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService, private msg: MessengerService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    const categoryObservable = this.categoryService.getCategoryList()
      .subscribe(categories=> this.categories = categories)
  }
}
