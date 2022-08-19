import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[]=[]
  displayedColumns=['id','name','price','action']

  constructor(private produtoService: ProductService) { }

  ngOnInit(): void {
    this.produtoService
      .list()
      .subscribe(products => {
        this.products = products
      })
  }

}
