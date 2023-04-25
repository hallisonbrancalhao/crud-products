import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { productsRoutes } from './products.routes';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(productsRoutes),
  ],
})
export class ProductsModule {}
