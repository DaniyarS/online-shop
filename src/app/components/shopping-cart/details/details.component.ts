import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {DetailService} from '../../../services/detail.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() product: any;

  constructor(private detail: DetailService) { }

  ngOnInit(): void {
    this.detail.currentMessage.subscribe(product => this.product = product);
  }

}
