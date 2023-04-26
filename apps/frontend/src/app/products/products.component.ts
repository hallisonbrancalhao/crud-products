import { ProductsService } from './products.service.service';
import { Component } from '@angular/core';
import { FormValue, Product } from '@crud-revisao/shared/data-access';

@Component({
  selector: 'crud-revisao-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(readonly productsService: ProductsService) {
    this.productsService.get();
  }

  onSubmit(product: FormValue<Product>) {
    if (product.id) {
      this.productsService.put(product.id, product);
    } else {
      this.productsService.post(product);
    }
    this.productsService.setProduct(null);
  }
}
