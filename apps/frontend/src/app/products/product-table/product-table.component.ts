import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@crud-revisao/shared/data-access';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'crud-revisao-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss'],
})
export class ProductTableComponent {
  @Input() products: Observable<Product[]> = of([]);
  @Output() removed = new EventEmitter<number>();
  @Output() updated = new EventEmitter<Product>();
}
