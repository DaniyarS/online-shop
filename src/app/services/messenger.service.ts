import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  category = new Subject();

  constructor() { }

  sendMsg(product) {
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }

  sendCatMsg(category) {
    this.category.next(category);
  }

  getCatMsg() {
    return this.category.asObservable();
  }
}
