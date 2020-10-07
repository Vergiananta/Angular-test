import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // title adalah nama variabel sedangkan any adalah tipe data dalam typescript
  title:any;
  book:any={};
  constructor() { }

  ngOnInit(): void {
    this.title='Product';
    this.book= {
      title:'Metode Numerik',
      author:'Christian',
      publisher: 'Airlangga',
      year: 2020,
      price: 100000
    };
  }

}
