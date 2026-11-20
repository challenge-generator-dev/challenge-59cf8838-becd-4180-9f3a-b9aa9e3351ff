import { z } from 'zod';
import { Product } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { ErrorResponse } from '../models/error-response.model';

// Esquemas Zod que validan las entradas del catálogo antes de llegar a la lógica de negocio.
// Cada esquema documenta las reglas de negocio que aplica sobre los datos recibidos.

// Esquema base del producto: el id, nombre, precio y stock deben cumplir reglas de dominio.
export const productSchema = z.object({
  id: z.string().min(1, 'El ID del producto es requerido'),
  name: z.string().min(1, 'El nombre del producto es requerido'),
  price: z.number().positive('El precio debe ser un número positivo'),
  stock: z.number().int().min(0, 'El stock debe ser un número entero no negativo'),
}) satisfies z.ZodType<Product>;

// Para crear un producto no se recibe el id: lo asigna el sistema.
// Se construye explícitamente en lugar de usar omit() para mantener los tipos estables.
export const createProductSchema = z.object({
  name: z.string().min(1, 'El nombre del producto es requerido'),
  price: z.number().positive('El precio debe ser un número positivo'),
  stock: z.number().int().min(0, 'El stock debe ser un número entero no negativo'),
});

// Query de paginación: llega como texto desde la URL, por eso se usa coerce.
export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(10),
}) satisfies z.ZodType<PaginationQuery>;

// Parámetro de ruta para identificar un producto.
export const productIdParamSchema = z.object({
  id: z.string().min(1, 'El ID del producto es requerido'),
});

// Forma estándar de las respuestas de error de la API.
export const errorResponseSchema = z.object({
  message: z.string().min(1, 'El mensaje de error es requerido'),
  details: z.array(z.string()).optional(),
}) satisfies z.ZodType<ErrorResponse>;

export type ProductInput = z.infer<typeof productSchema>;
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type PaginationQueryInput = z.infer<typeof paginationQuerySchema>;
export type ProductIdParamInput = z.infer<typeof productIdParamSchema>;
export type ErrorResponseInput = z.infer<typeof errorResponseSchema>;