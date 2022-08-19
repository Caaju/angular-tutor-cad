import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product = {
    name: 'Xicara',
    price: 13.98
  }
  constructor(private produtoService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  cancel(): void {
    this.router.navigate(["product"])
  }
  create(): void {
    this.produtoService
    .create(this.product)
    .subscribe(()=>{
      this.produtoService.showMsg('Produto criado com sucesso!');
      this.router.navigate(["product"])
    })
  }
}
