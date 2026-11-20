import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { ProductRepository } from '../repositories/in-memory-product.repository';
import { Product } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { Request, Response, NextFunction } from 'express';

describe('Fase 1: Endpoints de productos', () => {
  let productController: ProductController;
  let productService: ProductService;
  let mockRepository: jest.Mocked<ProductRepository>;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn()
    } as unknown as jest.Mocked<ProductRepository>;

    productService = new ProductService(mockRepository);
    productController = new ProductController(productService);

    mockReq = {};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    mockNext = jest.fn();
  });

  describe('ProductController.getProducts', () => {
    it('should return list of products with pagination', async () => {
      const mockProducts: Product[] = Array.from({ length: 10 }, (_, i) => ({
        id: `prod-${i + 1}`,
        name: `Product ${i + 1}`,
        price: 10.99 + i,
        stock: 100
      }));

      mockRepository.findAll.mockResolvedValue(mockProducts);
      mockReq.query = { page: '1', limit: '10' };

      await productController.getProducts(mockReq as Request, mockRes as Response, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          data: mockProducts,
          page: 1,
          limit: 10,
          total: 10
        })
      );
    });

    it('should return 404 when product is not found', async () => {
      mockRepository.findById.mockResolvedValue(null);
      mockReq.params = { id: 'non-existent-id' };

      await productController.getProductById(mockReq as Request, mockRes as Response, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Product not found'
        })
      );
    });
  });

  describe('ProductService.getProducts', () => {
    it('should return paginated list of products', async () => {
      const allProducts: Product[] = Array.from({ length: 15 }, (_, i) => ({
        id: `prod-${i + 1}`,
        name: `Product ${i + 1}`,
        price: 10.99 + i,
        stock: 100
      }));

      mockRepository.findAll.mockResolvedValue(allProducts);

      const pagination: PaginationQuery = { page: 1, limit: 10 };
      const result = await productService.getProducts(pagination);

      expect(result.data).toHaveLength(10);
      expect(result.page).toBe(1);
      expect(result.limit).toBe(10);
      expect(result.total).toBe(15);
    });

    it('should throw error when product not found', async () => {
      mockRepository.findById.mockResolvedValue(null);

      await expect(productService.getProductById('non-existent-id'))
        .rejects.toThrow('Product not found');
    });
  });
});