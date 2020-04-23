import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private messageSource = new BehaviorSubject<any>(Product);

  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message);
  }
}
