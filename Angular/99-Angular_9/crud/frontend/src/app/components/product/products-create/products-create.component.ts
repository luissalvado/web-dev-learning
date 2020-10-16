import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from '../product.model';

@Component({
  selector: "app-products-create",
  templateUrl: "./products-create.component.html",
  styleUrls: ["./products-create.component.css"],
})
export class ProductsCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(()=> {
      this.productService.showMessage("Product Created !");
      this.router.navigate(["/products"]);
    });
  }

  cancelProduct(): void {
    this.router.navigate(["/products"]);
  }
}
