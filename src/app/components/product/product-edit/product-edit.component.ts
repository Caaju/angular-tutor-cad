import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = { name: '', price: 0 }

  constructor(
    private produtoService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id  = this.activeRoute
      .snapshot
      .paramMap
      .get('id');

    this.produtoService
      .get(id)
      .subscribe(
        product => {
          this.product = product
        })
  }
  edit(): void {
    this.produtoService
    .edit(this.product)
    .subscribe(()=>{
      this.produtoService.showMsg('Produto atualizado com sucesso!')
      this.router.navigate(['/product'])  
    })
   }
  cancel(): void {
    this.router.navigate(['/product'])
  }

}
