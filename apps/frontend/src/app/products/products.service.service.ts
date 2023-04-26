import { FormValue, Product } from '@crud-revisao/shared/data-access';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #products = new BehaviorSubject<Product[]>([]);
  products$ = this.#products.asObservable();

  #product = new BehaviorSubject<Product | null>(null);
  product$ = this.#product.asObservable();

  constructor(private readonly http: HttpClient) {}

  setProduct<T extends Product>(product: T | null) {
    this.#product.next(product);
  }

  get() {
    this.http
      .get<Product[]>('/api/products')
      .pipe(take(1))
      .subscribe((products) => {
        this.#products.next(products);
      });
  }

  put<T extends FormValue<Product>>(id: number, value: T) {
    this.http.put(`/api/products/${id}`, value).subscribe(() => {
      this.get();
    });
  }

  post<T extends FormValue<Product>>(value: T) {
    this.http.post(`/api/products`, value).subscribe(() => {
      this.get();
    });
  }

  delete(id: number) {
    this.http.delete(`/api/products/${id}`).subscribe(() => {
      this.get();
    });
  }
}
