/**
 * Modelo para respuestas de error estandarizadas.
 */
export interface ErrorResponse {
  message: string;
  details?: string[];
}