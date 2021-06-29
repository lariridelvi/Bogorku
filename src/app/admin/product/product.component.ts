import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title:any;
  book:any={};
  constructor() { }

  ngOnInit(): void {
    this.title='Destinasi';
    this.book={
      title:'Taman Safari Indonesia',
      author:'Puncak Bogor',
      publisher:'Bogorku',
    };
  }

}
