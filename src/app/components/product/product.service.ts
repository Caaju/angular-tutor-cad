import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlBase = 'http://localhost:3000/product';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMsg(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.urlBase, product);
  }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlBase);
  }

  get(id: string | null): Observable<Product> {
    const url = `${this.urlBase}/${id}`
    return this.http.get<Product>(url);
  }

  edit(product: Product): Observable<Product> {
    const url = `${this.urlBase}/${product.id}`
    return this.http.put<Product>(url, product);
  }

  del(id: number): Observable<Product> {
    const url = `${this.urlBase}/${id}`
    return this.http.delete<Product>(url);
  }
}
