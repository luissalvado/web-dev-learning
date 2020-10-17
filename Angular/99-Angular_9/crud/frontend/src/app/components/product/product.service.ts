import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Singleton 
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  // show a pop message when product created.
  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  // return a observable of Product.
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

}