# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Exposición del catálogo de productos a través de endpoints REST**.

| | |
|---|---|
| Tema | Construccion de APIs REST con Express |
| Nivel | advanced-l2 |
| Chapter | Backend |
| Especialidad | Node |
| Stack | TypeScript / Express 4.21 |
| Patron arquitectonico | capas estándar (controladores, servicios, repositorios) |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json y tsconfig.json en la raiz`
- `src/main.ts como bootstrap`
- `src/domain con entidades y puertos`
- `src/application con casos de uso`
- `src/infrastructure con repositorios y controller`
- `Express como framework (vinculante: no mezcles otro framework del mismo ecosistema)`

Trampas conocidas:

- No inventes versiones de npm. Usa rango con caret (`^5.7.2`) sobre una version que exista, o deja que el paquete la resuelva. Una version inexistente (ej. `@types/react-router-dom@6.19.0`) hace fallar `npm install` con ETARGET y el proyecto no instala.
- Los paquetes `@types/*` solo hacen falta para librerias que no traen sus propios tipos. React Router, NestJS y Prisma ya los traen: agregar `@types/` de esos rompe o sobra.
- El `tsconfig.json` es obligatorio: sin el, `tsc` no sabe que compilar.

Dependencias:

- express 4.22.3
- ts-node 10.9.2
- zod 3.25.76
- @types/express 4.17.25
- @types/node 22.20.5
- typescript 5.7.3
- jest 29.7.0
- ts-jest 29.2.5
- @types/jest 29.5.14

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición y exposición de endpoints**: Endpoints REST funcionales para listar y obtener productos por ID.
- **Fase 2 — Validación de entradas y manejo de errores**: Validación de entradas y manejo centralizado de errores implementados.
- **Fase 3 — Refactorización y optimización**: Código refactorizado con mejor separación de responsabilidades y manejo de errores optimizado

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/controllers/product.controller.ts` — La pieza p1 (Definición de controladores REST para listar y obtener productos, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/services/product.service.ts` — La pieza p2 (Implementación de la lógica de negocio para obtener productos, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/middlewares/validation.middleware.ts` — La pieza p3 (Validación de entradas con Zod en middleware reutilizable, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/middlewares/error.middleware.ts` — La pieza p4 (Manejo centralizado de errores y transformación a respuestas HTTP, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/repositories/in-memory-product.repository.ts` — La pieza p5 (Implementación de repositorio en memoria con interfaz clara, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/utils/validate-request.util.ts` — absorbida: fuga de la pieza p3
- [ ] `src/app.ts` — absorbida: fuga de la pieza p3

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición y exposición de endpoints | Definición de controladores REST para listar y obtener productos | `src/controllers/product.controller.ts:productController` | Los endpoints GET /products y GET /products/:id están expuestos y responden con datos de productos; El endpoint GET /products devuelve una lista de productos con paginación; El endpoint GET /products/:id devuelve un producto específico o 404 si no existe; El servidor Express está configurado y escucha en un puerto definido | `src/acceptance/f1.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f1.test.ts` |
| f1 — Definición y exposición de endpoints | Implementación de la lógica de negocio para obtener productos | `src/services/product.service.ts:ProductService` | Los endpoints GET /products y GET /products/:id están expuestos y responden con datos de productos; El endpoint GET /products devuelve una lista de productos con paginación; El endpoint GET /products/:id devuelve un producto específico o 404 si no existe; El servidor Express está configurado y escucha en un puerto definido | `src/acceptance/f1.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f1.test.ts` |
| f2 — Validación de entradas y manejo de errores | Validación de entradas con Zod en middleware reutilizable | `src/middlewares/validation.middleware.ts:validationMiddleware` | Las entradas de los endpoints son validadas con Zod y retornan 400 si son inválidas; Los errores son manejados centralizadamente y retornan respuestas consistentes; El endpoint GET /products soporta parámetros de paginación validados; El endpoint GET /products/:id valida que el ID sea un UUID válido | `src/acceptance/f2.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f2 — Validación de entradas y manejo de errores | Manejo centralizado de errores y transformación a respuestas HTTP | — | Las entradas de los endpoints son validadas con Zod y retornan 400 si son inválidas; Los errores son manejados centralizadamente y retornan respuestas consistentes; El endpoint GET /products soporta parámetros de paginación validados; El endpoint GET /products/:id valida que el ID sea un UUID válido | `src/acceptance/f2.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f3 — Refactorización y optimización | Implementación de repositorio en memoria con interfaz clara | `src/repositories/in-memory-product.repository.ts:InMemoryProductRepository` | La validación de entradas está centralizada en un middleware reutilizable; El manejo de errores está separado en un adaptador dedicado; El repositorio en memoria implementa una interfaz clara y está desacoplado de los controladores; Todos los casos de aceptación de las fases anteriores siguen pasando | `src/acceptance/f3.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Validar el body de las requests con Zod 3 (dependencia zod en package.json) | chequeo estatico (manifest): exige `zod` | Verificada |
| No usar Mongoose ni MongoDB; los datos viven en memoria detras de un repositorio | chequeo estatico (code): prohibe `mongoose`, `mongodb` | Verificada |
| Las pruebas de aceptacion con Jest cubren los casos de error 400 y 404 | sin ubicar | Verificada |
| Las pruebas de aceptacion con Jest cubren los casos de error 400 y 404 | sin ubicar | Verificada |

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (19)

- `package.json`
- `tsconfig.json`
- `src/middlewares/error.middleware.ts`
- `src/models/product.model.ts`
- `src/models/pagination-query.model.ts`
- `src/models/error-response.model.ts`
- `src/controllers/product.controller.ts`
- `src/services/product.service.ts`
- `src/middlewares/validation.middleware.ts`
- `src/repositories/in-memory-product.repository.ts`
- `src/acceptance/f1.test.ts`
- `src/acceptance/f2.test.ts`
- `src/acceptance/f3.test.ts`
- `src/schemas/product.schema.ts`
- `src/utils/validate-request.util.ts`
- `src/config/zod.config.ts`
- `src/config/express.config.ts`
- `src/main.ts`
- `src/app.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/controllers` (presente)
- `src/services` (presente)
- `src/repositories` (presente)
- `src/models` (presente)
- `src/middlewares` (presente)
- `src/schemas` (presente)
- `src/utils` (presente)
- `src/__tests__` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar (controladores, servicios, repositorios)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2
- Brecha que el reto ataca: Construir endpoints REST con validacion y manejo de errores
- Mision: Exponer el catalogo de productos

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
