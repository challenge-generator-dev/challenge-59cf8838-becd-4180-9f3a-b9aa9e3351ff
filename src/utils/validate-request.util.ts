// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { ZodError, ZodSchema } from 'zod';

export interface ValidationResult<T> {
  success: boolean;
  data?: T;
  error?: ZodError;
}

// Valida un dato contra un esquema Zod y devuelve un resultado tipado sin lanzar
// para errores de validación. Cualquier otro error se propaga.
export function validateRequest<T>(schema: ZodSchema<T>, data: unknown): ValidationResult<T> {
  throw new Error('TODO(reto): validateRequest');
}

// Alias con el nombre pedido por el módulo de validación: misma firma y comportamiento.
export const validateRequestUtil = validateRequest;

// Valida y devuelve el dato parseado; lanza ZodError si el dato no cumple el esquema.
export function parseAndValidate<T>(schema: ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}

// Convierte las incidencias de un ZodError en cadenas legibles "campo: mensaje".
export function formatZodIssues(error: ZodError): string[] {
  return error.errors.map((issue) => {
    const ruta = issue.path.length > 0 ? issue.path.join('.') : 'cuerpo';
    return `${ruta}: ${issue.message}`;
  });
}

// Indica si el resultado de una validación fue exitoso y trae un dato utilizable.
export function isValidationSuccess<T>(result: ValidationResult<T>): boolean {
  return result.success && result.data !== undefined;
}