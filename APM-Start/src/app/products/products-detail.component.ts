import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = 'Details'
  constructor() { }

  ngOnInit(): void {
  }

}
