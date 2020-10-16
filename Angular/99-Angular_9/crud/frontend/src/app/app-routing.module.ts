import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { HomeComponent } from "./views/home/home.component";
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductCrudComponent,
  },
  {
    path: "products/create",
    component: ProductsCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
