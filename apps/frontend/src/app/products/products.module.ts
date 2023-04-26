import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { productsRoutes } from './products.routes';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductFormComponent,
    ProductTableComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(productsRoutes),
  ],
})
export class ProductsModule {}
