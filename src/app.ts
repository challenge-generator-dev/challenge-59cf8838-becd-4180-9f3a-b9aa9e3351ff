// TODO(reto): archivo stubbeado; implementa los cuerpos.
import express, { Application, NextFunction, Request, Response } from 'express';
import { errorHandler } from './middlewares/error.middleware';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { InMemoryProductRepository } from './repositories/in-memory-product.repository';
import { paginationQuerySchema, productIdParamSchema } from './schemas/product.schema';
import { validationMiddleware } from './middlewares/validation.middleware';
import { Product } from './models/product.model';
import { ErrorResponse } from './models/error-response.model';

// Composición de la aplicación: el controlador, el servicio y el repositorio viven en sus
// piezas dueñas; aquí solo se conectan y se registran las rutas HTTP.
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(express.raw());

app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

const initialProducts: Product[] = [
  { id: '1', name: 'Laptop Pro', price: 1299.99, stock: 15 },
  { id: '2', name: 'Wireless Mouse', price: 49.99, stock: 150 },
  { id: '3', name: 'Mechanical Keyboard', price: 129.99, stock: 75 },
  { id: '4', name: 'HD Monitor 27"', price: 349.99, stock: 30 },
  { id: '5', name: 'USB-C Hub', price: 79.99, stock: 100 },
  { id: '6', name: 'Webcam HD', price: 89.99, stock: 60 },
  { id: '7', name: 'Headphones Wireless', price: 199.99, stock: 45 },
  { id: '8', name: 'External SSD 1TB', price: 119.99, stock: 80 },
  { id: '9', name: 'Graphics Tablet', price: 249.99, stock: 25 },
  { id: '10', name: 'Smartphone Stand', price: 29.99, stock: 200 },
  { id: '11', name: 'Laptop Bag', price: 59.99, stock: 90 },
  { id: '12', name: 'Screen Protector', price: 19.99, stock: 300 },
];

const catalogController = new ProductController(
  new ProductService(new InMemoryProductRepository(initialProducts))
);

app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'product-api',
  });
});

app.get(
  '/products',
  validationMiddleware(paginationQuerySchema),
  async (req: Request, res: Response, next: NextFunction) => {
    throw new Error('TODO(reto): get');
  }
);

app.get(
  '/products/:id',
  validationMiddleware(productIdParamSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    throw new Error('TODO(reto): get');
  }
);

app.use((_req: Request, res: Response) => {
  const respuesta: ErrorResponse = {
    message: 'Ruta no encontrada',
    details: ['El endpoint solicitado no existe'],
  };
  res.status(404).json(respuesta);
});

app.use(errorHandler);

export { app };