import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Product } from '@crud-revisao/shared/data-access';

type ProductForm = {
  [K in keyof Product]: FormControl<Product[K] | null>;
};

@Component({
  selector: 'crud-revisao-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);

  form = this.fb.group<ProductForm>({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    amount: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  products$ = this.http.get<Product[]>('/api/products');

  onSubmit() {
    if (this.form.valid) {
      let request$;

      if (this.form.controls.id.value) {
        request$ = this.http.put(
          `/api/products/${this.form.controls.id.value}`,
          this.form.value
        );
      } else {
        request$ = this.http.post('/api/products', this.form.value);
      }

      request$.subscribe(() => {
        this.products$ = this.http.get<Product[]>('/api/products');
        this.form.reset();
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  remove(id: number) {
    const request$ = this.http.delete('/api/products/' + id);
    request$.subscribe(() => {
      this.products$ = this.http.get<Product[]>('/api/products');
      this.form.reset();
    });
  }
}
