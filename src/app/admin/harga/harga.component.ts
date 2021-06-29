import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harga',
  templateUrl: './harga.component.html',
  styleUrls: ['./harga.component.scss']
})
export class HargaComponent implements OnInit {
  title:any;
  constructor() { }

  ngOnInit(): void {
    this.title='Harga';
  }

}
