// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { ErrorResponse } from '../models/error-response.model';

export class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  async getProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error('TODO(reto): getProducts');
  }

  async getProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error('TODO(reto): getProductById');
  }
}