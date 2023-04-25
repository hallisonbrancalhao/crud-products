import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from '@crud-revisao/shared/data-access';
@Injectable()
export class ProductsService {
  #products: Product[] = [];

  create(createProductDto: CreateProductDto) {
    const id = this.#products.length + 1;
    const product = { ...createProductDto, id };
    this.#products.push(product);
    return product;
  }

  findAll() {
    return this.#products;
  }

  findOne(id: number) {
    return this.#products.find((product) => product.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const index = this.#findIndex(id);
    const product = this.#products[index];
    this.#products[index] = { ...product, ...updateProductDto };
    return this.#products[index];
  }

  remove(id: number) {
    const index = this.#findIndex(id);
    const product = this.#products[index];
    this.#products.splice(index, 1);
    return product;
  }

  #findIndex(id: number) {
    return this.#products.findIndex((product: Product) => product.id === id);
  }
}
