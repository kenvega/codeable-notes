# Feature: Implementar Carrito de Compras

## Descripción del Problema

Actualmente, la API de Full Stock permite a los usuarios ver productos, pero carece de una funcionalidad esencial para cualquier e-commerce: un carrito de compras. Los usuarios no tienen forma de seleccionar productos para completar el flujo de compra.

Es necesario implementar un sistema de carrito de compras robusto y persistente que funcione tanto para usuarios invitados como para usuarios autenticados.

## 🚀 Solución Propuesta

Se implementará un sistema de carrito de compras en el lado del servidor que se integra con la infraestructura de sesiones existente (`express-session`). Este enfoque garantiza que el estado del carrito sea seguro y persistente.

### Principios Fundamentales

1.  **Identidad del Carrito**: El carrito se asociará a la sesión del usuario. Se almacenará un `cartId` dentro del objeto de la sesión (`req.session.cartId`).
2.  **Gestión de Sesiones**: Aprovechando la configuración `saveUninitialized: false`, la sesión de un visitante (y por lo tanto, su carrito) solo se creará en la base de datos cuando interactúe con el carrito por primera vez.
3.  **Persistencia**:
    - **Carritos de Invitado**: Serán temporales y estarán vinculados a un `sessionId`. Su `user_id` en la base de datos será `NULL`.
    - **Carritos de Usuario**: Serán permanentes y estarán vinculados a un `userId`.
4.  **Fuente de Verdad**: El servidor será la única fuente de verdad. Todos los precios y totales se calcularán en el backend en el momento de la solicitud para evitar inconsistencias.

---

### Requerimientos de Base de Datos

Se necesitan dos nuevas tablas para gestionar los carritos y sus contenidos. Deberás crear un nuevo archivo de migración SQL y escribir las sentencias `CREATE TABLE` basadas en las siguientes descripciones.

**Pista**: Puedes usar el comando `npm run migrate:new create_carts_tables`.

#### 1. Tabla `carts`

Esta tabla almacenará la información principal de cada carrito. Debe contener las siguientes columnas:

- **`id`**: Un identificador numérico único y autoincremental que servirá como clave primaria.
- **`user_id`**: Un número entero que funciona como clave foránea referenciando al `id` de la tabla `users`. Esta columna debe ser **opcional** (permitir valores `NULL`), ya que los carritos de invitado no estarán asociados a ningún usuario.
  - **Comportamiento en cascada**: Si un usuario es eliminado, su carrito no debe ser eliminado. En su lugar, el `user_id` de sus carritos asociados debe establecerse en `NULL`, convirtiéndolos efectivamente en carritos de invitado.
  - **¿Por qué este enfoque?**: Mantener los carritos "huérfanos" permite realizar análisis de datos sobre carritos abandonados (una información muy valiosa para el negocio) sin conservar datos personales, además de prevenir la pérdida accidental de datos.
- **`created_at`** y **`updated_at`**: Marcas de tiempo (`TIMESTAMPTZ`) que registran la creación y la última actualización del carrito.

#### 2. Tabla `cart_items`

Esta tabla asociará los productos y sus cantidades a un carrito específico. Debe estar correctamente normalizada y contener solo la información esencial:

- **`id`**: Un identificador numérico único y autoincremental (clave primaria).
- **`cart_id`**: Clave foránea (entero, obligatoria) que referencia al `id` de la tabla `carts`. Si un carrito es eliminado, todos sus items deben ser eliminados en cascada.
- **`product_id`**: Clave foránea (entero, obligatoria) que referencia al `id` de la tabla `products`. Si un producto es eliminado del catálogo, también debe ser eliminado de todos los carritos.
- **`quantity`**: La cantidad del producto en el carrito. Debe ser un número entero y su valor siempre debe ser mayor que cero.
- **`created_at`** y **`updated_at`**: Marcas de tiempo para el registro.

**Restricción importante**: Se debe asegurar que no se pueda añadir el mismo producto dos veces en filas diferentes para el mismo carrito. Una restricción `UNIQUE` compuesta por `cart_id` y `product_id` es ideal para esto.

---

### Modificación de la Sesión

Para poder asociar un carrito a una sesión, es necesario **extender** la interfaz `SessionData` en `session.ts` para incluir la propiedad `cartId`.

---

### Diseño de Endpoints

Se deben crear los siguientes endpoints bajo el prefijo `/api/cart`.

- `GET /api/cart`
  - **Propósito**: Obtiene el carrito actual asociado a la sesión.
  - **Lógica Clave**:
    1.  Busca el `cartId` en `req.session`.
    2.  Si no existe, crea un nuevo carrito de invitado y guarda su ID en la sesión.
    3.  Si existe, carga el carrito y sus productos desde la base de datos.
    4.  **Hidrata la respuesta**: No devuelvas solo los IDs. La respuesta debe incluir los detalles completos de cada producto (nombre, precio, imagen) y los totales calculados (total por línea, total de ítems, gran total).
  - **Respuesta Exitosa**: `200 OK` con el objeto del carrito.
  - **Ejemplo de Respuesta**:
    ```json
    {
      "data": {
        "id": 10,
        "items": [
          {
            "productId": 1,
            "name": "Polo React",
            "imageUrl": "/images/polos/polo-react.png",
            "quantity": 2,
            "unitPrice": 2000,
            "lineTotal": 4000
          }
        ],
        "totals": {
          "itemCount": 2,
          "grandTotal": 4000
        },
        "createddAt": "2025-09-24T12:34:56Z",
        "updatedAt": "2025-09-24T12:34:56Z"
      }
    }
    ```

- `PUT /api/cart/items/:productId`
  - **Propósito**: Añade un producto al carrito o actualiza su cantidad.
  - **Request Body**: `{ "quantity": number }`.
  - **Lógica Clave**:
    1.  Valida que `quantity` sea un entero positivo.
    2.  Obtiene o crea el carrito asociado a la sesión.
    3.  Si el producto ya existe en el carrito, actualiza su cantidad. Si no, lo inserta.
  - **Respuesta Exitosa**: `200 OK` con el objeto del carrito actualizado e "hidratado".

- `DELETE /api/cart/items/:productId`
  - **Propósito**: Elimina un producto del carrito.
  - **Respuesta Exitosa**: `200 OK` con el objeto del carrito actualizado e "hidratado".

---

### Lógica de Negocio Clave

#### Fusión de Carritos (Merge on Login)

Este es el requerimiento más complejo. Cuando un usuario con un carrito de invitado inicia sesión, su carrito temporal debe fusionarse con su carrito permanente.

1.  **Antes de regenerar la sesión** en el controlador de login, inspecciona `req.session` y guarda el `cartId` del invitado si existe.
2.  Carga (o crea) el carrito permanente del usuario autenticado.
3.  Si había un carrito de invitado, itera sobre sus productos y muévelos al carrito permanente.
    - **Pista**: Si un producto ya existe en ambos carritos, ¿qué deberías hacer? ¿Sumar las cantidades? ¿Priorizar la cantidad del carrito invitado o del carrito permanente? ¿Quedarse con la cantidad más grande? (Quedarse con la cantidad más grande es lo más común).
4.  Una vez movidos los productos, elimina el carrito de invitado de la base de datos.
5.  Al llamar a `commitSession`, asegúrate de incluir el `cartId` del carrito permanente en los datos de la nueva sesión.

#### Hidratación y Cálculo de Totales

El frontend no debe hacer cálculos de precios. El backend es responsable de:

1.  Al devolver un carrito, consultar la tabla `products` para obtener la información más reciente de cada item (`name`, `price`, `imageUrl`).
2.  Calcular `lineTotal` para cada item (`quantity * price`).
3.  Calcular los totales del carrito: `itemCount` (suma de todas las cantidades) y `grandTotal` (suma de todos los `lineTotal`).

---

### Tareas de Implementación

- [ ] Crear el archivo de migración para las tablas `carts` y `cart_items`.
- [ ] Ejecutar la migración para crear las tablas en la base de datos.
- [ ] Actualizar la interfaz `SessionData` en session.ts.
- [ ] Crear los schemas de Zod necesarios para la validación de los `request bodies` y `params`.
- [ ] Crear `carts.repository.ts` con la lógica de acceso a la base de datos.
- [ ] Crear `carts.service.ts` para orquestar la lógica de negocio (creación, hidratación, cálculos).
- [ ] Crear `carts.controller.ts` para manejar las peticiones HTTP.
- [ ] Crear `carts.routes.ts` y registrar las rutas en routes.ts.
- [ ] Actualizar el controlador de `login` para implementar la lógica de fusión de carritos.
- [ ] Agregar los nuevos endpoints al archivo `api.rest`
- [ ] Actualizar documentación del README

## Antes de enviar la PR

- [ ] Asegurarse de que no hay código duplicado o comentado
- [ ] Probar todos los endpoints y flujos (invitado, usuario, login, logout).
- [ ] Ejecutar `npm run lint` y corregir cualquier error
- [ ] Ejecutar `npm run format` para formatear el código

----


post api/cart/clear
  elimina todo los registros de cart_items relacionados al carrito de la sesion

pregunta
  que devolver del endpoint?

  deberia crear un cart si no existe?

  se asume que llega un cartId en la session siempre?
    que hacer si no llega cartId en session? busca el carro por userId en session? o devuelve null?

  si el cartId de session no existe en base de datos?


  