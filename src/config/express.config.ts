import express, { Application } from 'express';
import { errorHandler } from '../middlewares/error.middleware';

// Crea la aplicación Express con el parseo de cuerpos, el healthcheck y el manejo de errores.
export function createApp(): Application {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get('/health', (_req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.use(errorHandler);

  return app;
}

// Registra parseadores de cuerpo adicionales y un logger de peticiones con su duración.
export function configureMiddleware(app: Application): void {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.text());
  app.use(express.raw());

  app.use((req, res, next) => {
    const inicio = Date.now();
    res.on('finish', () => {
      const duracion = Date.now() - inicio;
      console.log(`${req.method} ${req.path} ${res.statusCode} - ${duracion}ms`);
    });
    next();
  });
}

// Configura las cabeceras CORS y responde a las peticiones preflight OPTIONS.
export function configureCors(app: Application): void {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });
}

// Registra el manejador de errores centralizado, el 404 y el 500 por defecto.
export function configureErrorHandling(app: Application): void {
  app.use(errorHandler);

  app.use((_req, res) => {
    res.status(404).json({
      message: 'Recurso no encontrado',
      details: ['La ruta solicitada no existe en el servidor'],
    });
  });

  app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Error no manejado:', err);
    res.status(500).json({
      message: 'Error interno del servidor',
      details: [err.message],
    });
  });
}

// Punto de entrada de configuración: crea la app y aplica cada bloque en orden.
export function initializeExpress(): Application {
  const app = createApp();
  configureMiddleware(app);
  configureCors(app);
  configureErrorHandling(app);
  return app;
}