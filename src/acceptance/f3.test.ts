import { InMemoryProductRepository } from '../repositories/in-memory-product.repository';
import { Product } from '../models/product.model';

describe('InMemoryProductRepository - Phase f3', () => {
  let repository: InMemoryProductRepository;

  beforeEach(() => {
    const initialProducts: Product[] = Array.from({ length: 15 }, (_, i) => ({
      id: `prod-${(i + 1).toString().padStart(3, '0')}`,
      name: `Product ${i + 1}`,
      price: 10 + i * 5,
      stock: Math.floor(Math.random() * 100),
    }));
    repository = new InMemoryProductRepository(initialProducts);
  });

  describe('should return paginated list of products', () => {
    it('given an in-memory repository with 15 products loaded, when getProducts is called with page=1 and limit=10, then it returns an array with 10 products and pagination metadata', async () => {
      const result = await repository.getProducts({ page: 1, limit: 10 });

      expect(result.data).toHaveLength(10);
      expect(result.page).toBe(1);
      expect(result.limit).toBe(10);
      expect(result.total).toBe(15);
    });
  });

  describe('should return product by ID', () => {
    it('given an in-memory repository with products loaded and an existing ID, when getProductById is called with an existing ID, then it returns the corresponding product', async () => {
      const product = await repository.getProductById('prod-001');

      expect(product).toBeDefined();
      expect(product.id).toBe('prod-001');
      expect(product.name).toBe('Product 1');
    });
  });

  describe('should throw error when product not found', () => {
    it('given an in-memory repository with products loaded and a non-existent ID, when getProductById is called with a non-existent ID, then it throws an exception with message "Product not found"', async () => {
      await expect(repository.getProductById('non-existent-id')).rejects.toThrow(
        'Product not found'
      );
    });
  });
});