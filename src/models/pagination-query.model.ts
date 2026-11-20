/**
 * Modelo para consultas de paginación.
 * Valores por defecto: page = 1, limit = 10.
 */
export interface PaginationQuery {
  page?: number;
  limit?: number;
}