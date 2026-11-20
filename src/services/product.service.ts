// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product, PaginatedProductsResponse } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { ProductRepository } from '../repositories/in-memory-product.repository';

export class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async getProducts(pagination: PaginationQuery): Promise<PaginatedProductsResponse> {
    throw new Error('TODO(reto): getProducts');
  }

  async getProductById(id: string): Promise<Product | null> {
    throw new Error('TODO(reto): getProductById');
  }
}