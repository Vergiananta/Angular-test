import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  // title adalah nama variabel sedangkan any adalah tipe data dalam typescript
  title:any;
  book:any={};
  books:any={};
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.title='Product';
    this.book= {
      title:'Metode Numerik',
      author:'Christian',
      publisher: 'Airlangga',
      year: 2020,
      price: 100000
    };
    this.getBooks();
  }

  getBooks() {
    this.books = [
      {
        title:'Navigasi',
        author:'Einstein',
        publisher: 'Airlangga',
        year: 2020,
        price: 400000
      },
      {
        title:'Cuaca',
        author:'Supri',
        publisher: 'Airlangga',
        year: 2020,
        price: 200000
      }
    ]
  }

  productDetail(data, idx){
    let dialog = this.dialog.open(ProductDetailComponent, {
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res => {
      if (res) {
        if (idx ==-1) {
          // jika idx = -1 maka datanya dipush/ditambahkan ke elemen terakhir
          this.books.push(res);
        } else {
          this.books[idx]=res;
        }
      }
    })
  }

  deleteProduct(idx){
    var conf = confirm('Delete item ? ');
    if (conf) {
      this.books.splice(idx, 1);
    }
  }
}
