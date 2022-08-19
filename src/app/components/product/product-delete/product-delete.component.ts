import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = { name: '', price: 0 }

  constructor(private service: ProductService
    , private activeRouter: ActivatedRoute
    , private router: Router) { }

  ngOnInit(): void {
    const id = this.activeRouter
      .snapshot
      .paramMap
      .get('id');

    this.service
      .get(id)
      .subscribe(p => { this.product = p });
  }
  del(): void {
    const id = this.product.id ? this.product.id : 0;
    this.service
      .del(id)
      .subscribe(() => {
        this.service.showMsg('Produto removido com sucesso!')
        this.router.navigate(['/product'])
      })
  }
  cancel(): void {
    this.router.navigate(['/product'])
  }

}
