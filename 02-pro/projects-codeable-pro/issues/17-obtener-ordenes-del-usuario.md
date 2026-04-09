# Obtener Órdenes del Usuario

## Descripción del Problema

Actualmente, la API de Full Stock permite crear órdenes, pero no existe un endpoint para que el usuario autenticado consulte el historial de sus órdenes. Esto impide que los clientes revisen sus compras previas y el estado de sus pedidos.

Es necesario implementar la funcionalidad para listar todas las órdenes asociadas al usuario autenticado.

## 🚀 Solución Propuesta

Se implementará un endpoint `GET /api/orders` que retorne todas las órdenes del usuario autenticado (usando la cookie de sesión). La respuesta debe ser un arreglo de órdenes, cada una con sus datos principales.

### Principios Fundamentales

1. **Autenticación Requerida**: Solo usuarios autenticados pueden acceder a su historial de órdenes.
2. **Privacidad**: Un usuario solo puede ver sus propias órdenes.
3. **Eficiencia**: La consulta debe ser eficiente y retornar solo los datos necesarios.

### Diseño de Endpoint

- `GET /api/orders`
  - **Requiere sesión activa**: El usuario debe estar autenticado (cookie de sesión).

  - **Respuesta Exitosa**: `200 OK` con el arreglo de órdenes.

    **Ejemplo de Respuesta:**
    ```json
    {
      "data": [
        {
          "id": 6,
          "userId": 1,
          "email": "testino@mail.com",
          "shippingInfo": {
            "city": "Lima",
            "phone": "987654321",
            "state": "Lima",
            "address": "Calle Falsa 123",
            "country": "PE",
            "lastName": "Diprueba",
            "firstName": "Testino",
            "postalCode": "12345"
          },
          "status": "pending",
          "total": 2000,
          "createdAt": "2025-11-06T20:23:44.704Z",
          "updatedAt": "2025-11-06T20:23:44.704Z"
        }
      ]
    }
    ```

  - **Respuesta si el usuario no está autenticado**:  
    `401 Unauthorized`
    ```json
    {
      "error": "Usuario no autenticado"
    }
    ```

### Tareas de Implementación

- [ ] Crear método en `orders.repository.ts` para obtener órdenes por `user_id`.
- [ ] Crear método en `orders.service.ts` para la lógica de negocio.
- [ ] Crear handler en `orders.controller.ts` para el endpoint.
- [ ] Crear ruta en `orders.routes.ts` y registrar en `routes.ts`.
- [ ] Agregar el endpoint a api.rest.
- [ ] Actualizar documentación en el README.

## Antes de enviar la PR

- [ ] Probar el endpoint con usuarios autenticados.
- [ ] Validar que solo se retornen órdenes del usuario logueado.
- [ ] Ejecutar `npm run lint` y corregir errores.
- [ ] Ejecutar `npm run format` para formatear el código.
