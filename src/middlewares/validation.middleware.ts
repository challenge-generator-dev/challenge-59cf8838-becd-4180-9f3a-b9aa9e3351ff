// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { NextFunction, Request, Response } from 'express';
import { z, ZodSchema } from 'zod';

// Stub de practica: hoy deja pasar la peticion sin validar.
// El reto consiste en validar el body/query/params contra el ZodSchema recibido
// y responder con 400 y un ErrorResponse cuando la validacion falle.
export function validationMiddleware(schema: ZodSchema): any {
  throw new Error('TODO(reto): validationMiddleware');
}

export const ProductIdSchema = z.object({
  id: z.string().uuid({ message: 'Invalid product ID format' }),
});

export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().optional(),
  limit: z.coerce.number().int().positive().optional(),
});

export const ProductBodySchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  price: z.number().positive('Price must be positive'),
  stock: z.number().int().nonnegative('Stock must be non-negative'),
});