// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { PaginatedProductsResponse } from '../models/product.model';

export interface ProductRepository {
  getProducts(pagination: PaginationQuery): Promise<PaginatedProductsResponse>;
  getProductById(id: string): Promise<Product>;
}

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  constructor(initialData?: Product[]) {
    if (initialData && initialData.length > 0) {
      this.products = [...initialData];
    } else {
      this.products = this.generateDefaultProducts();
    }
  }

  private generateDefaultProducts(): Product[] {
    throw new Error('TODO(reto): generateDefaultProducts');
  }

  async getProducts(pagination: PaginationQuery): Promise<PaginatedProductsResponse> {
    throw new Error('TODO(reto): getProducts');
  }

  async getProductById(id: string): Promise<Product> {
    throw new Error('TODO(reto): getProductById');
  }

  clear(): void {
    throw new Error('TODO(reto): clear');
  }

  addProduct(product: Product): void {
    throw new Error('TODO(reto): addProduct');
  }
}