import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.css"],
})
export class ProductCrudComponent implements OnInit {
  // inject router in constructor
  constructor(private router: Router) {}

  ngOnInit(): void {}

  //using the router
  navigateToProductCreate(): void {
    this.router.navigate(["/products/create"]);
  }
}
