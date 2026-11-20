# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/controllers/product.controller.ts` — La pieza p1 (Definición de controladores REST para listar y obtener productos, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/services/product.service.ts` — La pieza p2 (Implementación de la lógica de negocio para obtener productos, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/middlewares/validation.middleware.ts` — La pieza p3 (Validación de entradas con Zod en middleware reutilizable, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/middlewares/error.middleware.ts` — La pieza p4 (Manejo centralizado de errores y transformación a respuestas HTTP, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/repositories/in-memory-product.repository.ts` — La pieza p5 (Implementación de repositorio en memoria con interfaz clara, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/utils/validate-request.util.ts` — absorbida: fuga de la pieza p3
- `src/app.ts` — absorbida: fuga de la pieza p3

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
Construir endpoints REST con validacion y manejo de errores

### Misión / candidato
Exponer el catalogo de productos

### Reto
- Tema: Construccion de APIs REST con Express
- Seniority: advanced-l2
- Tipo: practical
- Título: Exposición del catálogo de productos a través de endpoints REST
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición y exposición de endpoints — objetivo: Definir y exponer los endpoints REST para el catálogo de productos. — entregable (NO resolver): Endpoints REST funcionales para listar y obtener productos por ID.
- Fase 2: Validación de entradas y manejo de errores — objetivo: Implementar la validación de entradas y el manejo centralizado de errores. — entregable (NO resolver): Validación de entradas y manejo centralizado de errores implementados.
- Fase 3: Refactorización y optimización — objetivo: Refactorizar el código para mejorar la legibilidad y performance. — entregable (NO resolver): Código refactorizado con mejor separación de responsabilidades y manejo de errores optimizado

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "express": "4.22.3",
    "ts-node": "10.9.2",
    "zod": "3.25.76"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3",
    "jest": "29.7.0",
    "ts-jest": "29.2.5",
    "@types/jest": "29.5.14"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node",
      "jest"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/middlewares/error.middleware.ts ===
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

// === ARCHIVO: src/models/product.model.ts ===
/**
 * Modelo que representa un producto en el catálogo.
 */
export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

/**
 * Tipo para la respuesta paginada de productos.
 */
export interface PaginatedProductsResponse {
  data: Product[];
  page: number;
  limit: number;
  total: number;
}

// === ARCHIVO: src/models/pagination-query.model.ts ===
/**
 * Modelo para consultas de paginación.
 * Valores por defecto: page = 1, limit = 10.
 */
export interface PaginationQuery {
  page?: number;
  limit?: number;
}

// === ARCHIVO: src/models/error-response.model.ts ===
/**
 * Modelo para respuestas de error estandarizadas.
 */
export interface ErrorResponse {
  message: string;
  details?: string[];
}

// === ARCHIVO: src/controllers/product.controller.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Request, Response, NextFunction } from 'express';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { ErrorResponse } from '../models/error-response.model';

export class ProductController {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  async getProducts(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error('TODO(reto): getProducts');
  }

  async getProductById(req: Request, res: Response, next: NextFunction): Promise<void> {
    throw new Error('TODO(reto): getProductById');
  }
}

// === ARCHIVO: src/services/product.service.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product, PaginatedProductsResponse } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { ProductRepository } from '../repositories/in-memory-product.repository';

export class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async getProducts(pagination: PaginationQuery): Promise<PaginatedProductsResponse> {
    throw new Error('TODO(reto): getProducts');
  }

  async getProductById(id: string): Promise<Product | null> {
    throw new Error('TODO(reto): getProductById');
  }
}

// === ARCHIVO: src/middlewares/validation.middleware.ts ===
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

// === ARCHIVO: src/repositories/in-memory-product.repository.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { Product } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { PaginatedProductsResponse } from '../models/product.model';

export interface ProductRepository {
  getProducts(pagination: PaginationQuery): Promise<PaginatedProductsResponse>;
  getProductById(id: string): Promise<Product>;
}

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  constructor(initialData?: Product[]) {
    if (initialData && initialData.length > 0) {
      this.products = [...initialData];
    } else {
      this.products = this.generateDefaultProducts();
    }
  }

  private generateDefaultProducts(): Product[] {
    throw new Error('TODO(reto): generateDefaultProducts');
  }

  async getProducts(pagination: PaginationQuery): Promise<PaginatedProductsResponse> {
    throw new Error('TODO(reto): getProducts');
  }

  async getProductById(id: string): Promise<Product> {
    throw new Error('TODO(reto): getProductById');
  }

  clear(): void {
    throw new Error('TODO(reto): clear');
  }

  addProduct(product: Product): void {
    throw new Error('TODO(reto): addProduct');
  }
}

// === ARCHIVO: src/acceptance/f1.test.ts ===
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { ProductRepository } from '../repositories/in-memory-product.repository';
import { Product } from '../models/product.model';
import { PaginationQuery } from '../models/pagination-query.model';
import { Request, Response, NextFunction } from 'express';

describe('Fase 1: Endpoints de productos', () => {
  let productController: ProductController;
  let productService: ProductService;
  let mockRepository: jest.Mocked<ProductRepository>;
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn()
    } as unknown as jest.Mocked<ProductRepository>;

    productService = new ProductService(mockRepository);
    productController = new ProductController(productService);

    mockReq = {};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
    mockNext = jest.fn();
  });

  describe('ProductController.getProducts', () => {
    it('should return list of products with pagination', async () => {
      const mockProducts: Product[] = Array.from({ length: 10 }, (_, i) => ({
        id: `prod-${i + 1}`,
        name: `Product ${i + 1}`,
        price: 10.99 + i,
        stock: 100
      }));

      mockRepository.findAll.mockResolvedValue(mockProducts);
      mockReq.query = { page: '1', limit: '10' };

      await productController.getProducts(mockReq as Request, mockRes as Response, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          data: mockProducts,
          page: 1,
          limit: 10,
          total: 10
        })
      );
    });

    it('should return 404 when product is not found', async () => {
      mockRepository.findById.mockResolvedValue(null);
      mockReq.params = { id: 'non-existent-id' };

      await productController.getProductById(mockReq as Request, mockRes as Response, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(404);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Product not found'
        })
      );
    });
  });

  describe('ProductService.getProducts', () => {
    it('should return paginated list of products', async () => {
      const allProducts: Product[] = Array.from({ length: 15 }, (_, i) => ({
        id: `prod-${i + 1}`,
        name: `Product ${i + 1}`,
        price: 10.99 + i,
        stock: 100
      }));

      mockRepository.findAll.mockResolvedValue(allProducts);

      const pagination: PaginationQuery = { page: 1, limit: 10 };
      const result = await productService.getProducts(pagination);

      expect(result.data).toHaveLength(10);
      expect(result.page).toBe(1);
      expect(result.limit).toBe(10);
      expect(result.total).toBe(15);
    });

    it('should throw error when product not found', async () => {
      mockRepository.findById.mockResolvedValue(null);

      await expect(productService.getProductById('non-existent-id'))
        .rejects.toThrow('Product not found');
    });
  });
});

// === ARCHIVO: src/acceptance/f2.test.ts ===
import { Request, Response, NextFunction } from 'express';
import { validationMiddleware, ProductIdSchema, PaginationQuerySchema } from '../middlewares/validation.middleware';

describe('ValidationMiddleware - Phase f2', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockReq = {
      body: {},
      params: {},
      query: {},
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  describe('should return 400 when product ID is invalid', () => {
    it('given a Zod schema that validates UUIDs and an invalid ID in params, when the middleware is called with an invalid ID, then it returns 400 with validation details', () => {
      mockReq.params = { id: 'not-a-valid-uuid' };
      
      const middleware = validationMiddleware(ProductIdSchema);
      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Validation failed',
          details: expect.arrayContaining([
            expect.stringContaining('id'),
          ]),
        })
      );
      expect(mockNext).not.toHaveBeenCalled();
    });
  });

  describe('should call next when product ID is valid', () => {
    it('given a Zod schema that validates UUIDs and a valid ID in params, when the middleware is called with a valid ID, then it calls next() without errors', () => {
      mockReq.params = { id: '123e4567-e89b-12d3-a456-426614174000' };
      
      const middleware = validationMiddleware(ProductIdSchema);
      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockNext).toHaveBeenCalled();
      expect(mockRes.status).not.toHaveBeenCalled();
    });
  });

  describe('should return 400 when pagination params are invalid', () => {
    it('given a Zod schema that validates pagination params and invalid values, when the middleware is called with page=-1 or limit=0, then it returns 400 with validation details', () => {
      mockReq.query = { page: '-1', limit: '0' };
      
      const middleware = validationMiddleware(PaginationQuerySchema);
      middleware(mockReq as Request, mockRes as Response, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          message: 'Validation failed',
        })
      );
      expect(mockNext).not.toHaveBeenCalled();
    });
  });
});

// === ARCHIVO: src/acceptance/f3.test.ts ===
import { InMemoryProductRepository } from '../repositories/in-memory-product.repository';
import { Product } from '../models/product.model';

describe('InMemoryProductRepository - Phase f3', () => {
  let repository: InMemoryProductRepository;

  beforeEach(() => {
    const initialProducts: Product[] = Array.from({ length: 15 }, (_, i) => ({
      id: `prod-${(i + 1).toString().padStart(3, '0')}`,
      name: `Product ${i + 1}`,
      price: 10 + i * 5,
      stock: Math.floor(Math.random() * 100),
    }));
    repository = new InMemoryProductRepository(initialProducts);
  });

  describe('should return paginated list of products', () => {
    it('given an in-memory repository with 15 products loaded, when getProducts is called with page=1 and limit=10, then it returns an array with 10 products and pagination metadata', async () => {
      const result = await repository.getProducts({ page: 1, limit: 10 });

      expect(result.data).toHaveLength(10);
      expect(result.page).toBe(1);
      expect(result.limit).toBe(10);
      expect(result.total).toBe(15);
    });
  });

  describe('should return product by ID', () => {
    it('given an in-memory repository with products loaded and an existing ID, when getProductById is called with an existing ID, then it returns the corresponding product', async () => {
      const product = await repository.getProductById('prod-001');

      expect(product).toBeDefined();
      expect(product.id).toBe('prod-001');
      expect(product.name).toBe('Product 1');
    });
  });

  describe('should throw error when product not found', () => {
    it('given an in-memory repository with products loaded and a non-existent ID, when getProductById is called with a non-existent ID, then it throws an exception with message "Product not found"', async () => {
      await expect(repository.getProductById('non-existent-id')).rejects.toThrow(
        'Product not found'
      );
    });
  });
});

// === ARCHIVO: src/schemas/product.schema.ts ===
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

// === ARCHIVO: src/utils/validate-request.util.ts ===
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

// === ARCHIVO: src/config/zod.config.ts ===
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

// === ARCHIVO: src/config/express.config.ts ===
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

// === ARCHIVO: src/main.ts ===
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

// === ARCHIVO: src/app.ts ===
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
```
