import { z } from 'zod';

export const zod = z;

export const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(255),
  price: z.number().positive(),
  stock: z.number().int().min(0),
});

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional().default(1),
  limit: z.coerce.number().int().positive().max(100).optional().default(10),
});

export const errorResponseSchema = z.object({
  message: z.string(),
  details: z.array(z.string()).optional(),
});

export type Product = z.infer<typeof productSchema>;
export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;