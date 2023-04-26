import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValue, Product } from '@crud-revisao/shared/data-access';
import { Observable, of } from 'rxjs';

type TypeForm<T> = {
  [K in keyof T]: FormControl<T[K] | null>;
};

@Component({
  selector: 'crud-revisao-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<FormValue<Product>>();
  @Input() product: Observable<Product | null> = of(null);

  form = new FormGroup<TypeForm<Product>>({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    amount: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  ngOnInit() {
    this.product.subscribe((product) => {
      if (product) {
        this.form.patchValue(product);
      } else {
        this.form.reset();
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
      this.form.reset();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
