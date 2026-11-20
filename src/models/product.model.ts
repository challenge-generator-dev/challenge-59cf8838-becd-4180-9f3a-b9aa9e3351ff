/**
 * Modelo que representa un producto en el catálogo.
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

/**
 * Tipo para la respuesta paginada de productos.
 */
export interface PaginatedProductsResponse {
  data: Product[];
  page: number;
  limit: number;
  total: number;
}