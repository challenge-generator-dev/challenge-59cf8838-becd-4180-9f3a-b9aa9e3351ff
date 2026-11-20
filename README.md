# Exposición del catálogo de productos a través de endpoints REST

El sistema debe exponer un catálogo de productos a través de endpoints REST. Los productos tienen un nombre, precio y stock. Se deben validar las entradas y manejar los errores de manera centralizada. Los datos se almacenan en memoria detrás de un repositorio. El body de las requests debe ser validado con Zod 3. Las pruebas de aceptación con Jest deben cubrir los casos de error 400 y 404.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Construccion de APIs REST con Express |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** Express 4.21
- **Version:** Node 22

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Definición y exposición de endpoints

**Objetivo:** Definir y exponer los endpoints REST para el catálogo de productos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crear los endpoints REST para listar y obtener un producto por ID.
- Asegurar que los endpoints respondan con los códigos de estado HTTP apropiados.

**Entregable:** Endpoints REST funcionales para listar y obtener productos por ID.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que los datos se almacenan en memoria.
- Utiliza Zod 3 para validar el body de las requests.

</details>

### Fase 2: Validación de entradas y manejo de errores

**Objetivo:** Implementar la validación de entradas y el manejo centralizado de errores.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Validar el body de las requests utilizando Zod 3.
- Implementar el manejo centralizado de errores para los casos 400 y 404.
- Asegurar que las pruebas de aceptación con Jest cubran los casos de error 400 y 404.

**Entregable:** Validación de entradas y manejo centralizado de errores implementados.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que no debes usar Mongoose ni MongoDB.
- Utiliza Jest para escribir las pruebas de aceptación.

</details>

### Fase 3: Refactorización y optimización

**Objetivo:** Refactorizar el código para mejorar la legibilidad y performance.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Extraer la lógica de validación de Zod a un middleware reutilizable para todos los endpoints
- Crear un adaptador de errores que transforme excepciones internas en respuestas HTTP consistentes
- Asegurar que el repositorio en memoria implemente una interfaz clara para facilitar futuros cambios de almacenamiento
- Verificar que todas las piezas mantengan sus responsabilidades exclusivas y que los casos de aceptación sigan pasando

**Entregable:** Código refactorizado con mejor separación de responsabilidades y manejo de errores optimizado

<details>
<summary>Pistas de conocimiento</summary>

- Busca oportunidades para simplificar y mejorar el código.
- Considera el uso de funciones auxiliares para la validación y el manejo de errores.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los endpoints REST y cómo se utilizan en este reto?
- **paraQueSirve**: ¿Para qué sirve la validación de entradas y el manejo de errores en este reto?
- **comoSeUsa**: ¿Cómo se utiliza Zod 3 para validar el body de las requests?
- **erroresComunes**: ¿Cuáles son los errores comunes que se deben manejar en este reto y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica la refactorización y optimización del código en este reto?

## Criterios de Evaluacion

- Definición y exposición de endpoints REST funcionales.
- Validación de entradas utilizando Zod 3.
- Manejo centralizado de errores para los casos 400 y 404.
- Pruebas de aceptación con Jest que cubren los casos de error 400 y 404.
- Código refactorizado y optimizado.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Definición y exposición de endpoints | Definición de controladores REST para listar y obtener productos | `src/controllers/product.controller.ts:productController` | Los endpoints GET /products y GET /products/:id están expuestos y responden con datos de productos; El endpoint GET /products devuelve una lista de productos con paginación; El endpoint GET /products/:id devuelve un producto específico o 404 si no existe; El servidor Express está configurado y escucha en un puerto definido | `src/acceptance/f1.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f1.test.ts` |
| f1 — Definición y exposición de endpoints | Implementación de la lógica de negocio para obtener productos | `src/services/product.service.ts:ProductService` | Los endpoints GET /products y GET /products/:id están expuestos y responden con datos de productos; El endpoint GET /products devuelve una lista de productos con paginación; El endpoint GET /products/:id devuelve un producto específico o 404 si no existe; El servidor Express está configurado y escucha en un puerto definido | `src/acceptance/f1.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f1.test.ts` |
| f2 — Validación de entradas y manejo de errores | Validación de entradas con Zod en middleware reutilizable | `src/middlewares/validation.middleware.ts:validationMiddleware` | Las entradas de los endpoints son validadas con Zod y retornan 400 si son inválidas; Los errores son manejados centralizadamente y retornan respuestas consistentes; El endpoint GET /products soporta parámetros de paginación validados; El endpoint GET /products/:id valida que el ID sea un UUID válido | `src/acceptance/f2.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f2 — Validación de entradas y manejo de errores | Manejo centralizado de errores y transformación a respuestas HTTP | — | Las entradas de los endpoints son validadas con Zod y retornan 400 si son inválidas; Los errores son manejados centralizadamente y retornan respuestas consistentes; El endpoint GET /products soporta parámetros de paginación validados; El endpoint GET /products/:id valida que el ID sea un UUID válido | `src/acceptance/f2.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f2.test.ts` |
| f3 — Refactorización y optimización | Implementación de repositorio en memoria con interfaz clara | `src/repositories/in-memory-product.repository.ts:InMemoryProductRepository` | La validación de entradas está centralizada en un middleware reutilizable; El manejo de errores está separado en un adaptador dedicado; El repositorio en memoria implementa una interfaz clara y está desacoplado de los controladores; Todos los casos de aceptación de las fases anteriores siguen pasando | `src/acceptance/f3.test.ts` | `npx jest --preset ts-jest --runInBand --forceExit src/acceptance/f3.test.ts` |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Validar el body de las requests con Zod 3 (dependencia zod en package.json) | chequeo estatico (manifest): exige `zod` | Verificada |
| No usar Mongoose ni MongoDB; los datos viven en memoria detras de un repositorio | chequeo estatico (code): prohibe `mongoose`, `mongodb` | Verificada |
| Las pruebas de aceptacion con Jest cubren los casos de error 400 y 404 | sin ubicar | Verificada |
| Las pruebas de aceptacion con Jest cubren los casos de error 400 y 404 | sin ubicar | Verificada |

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
