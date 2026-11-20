// TODO(reto): archivo stubbeado; implementa los cuerpos.
// Middleware para manejar errores de manera centralizada
// TODO(reto): Implementar el manejo de errores para responder con el formato ErrorResponse
// Debe capturar errores de validación (Zod), errores de negocio y errores inesperados
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  throw new Error('TODO(reto): errorHandler');
};

// Alias con el nombre que usa la configuración de Express. Misma firma que errorHandler.
export const errorMiddleware = errorHandler;