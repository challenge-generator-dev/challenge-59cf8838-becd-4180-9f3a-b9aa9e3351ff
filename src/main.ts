import type { Server } from 'http';
import { app } from './app';

const PORT = Number(process.env.PORT) || 3000;

// Punto de entrada: la aplicación se construye en app.ts y aquí solo se arranca el servidor HTTP.
const server: Server = app.listen(PORT, () => {
  console.log(`Servidor Express arrancado en el puerto ${PORT}`);
  console.log('Endpoints disponibles:');
  console.log('  GET /products');
  console.log('  GET /products/:id');
  console.log('  GET /health');
});

function cerrarServidor(signal: string): void {
  console.log(`Recibida señal ${signal}, cerrando servidor de forma ordenada...`);
  server.close(() => {
    console.log('Servidor cerrado correctamente');
    process.exit(0);
  });
}

process.on('SIGTERM', () => cerrarServidor('SIGTERM'));
process.on('SIGINT', () => cerrarServidor('SIGINT'));

export { app };