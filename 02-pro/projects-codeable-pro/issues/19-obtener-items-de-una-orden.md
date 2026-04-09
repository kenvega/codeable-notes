# Obtener Items de una Orden

## Descripción del Problema

Actualmente no existe un endpoint para que el usuario autenticado consulte los productos comprados (items) de una orden específica. Esto impide que los clientes revisen el detalle de sus compras previas.

Es necesario implementar la funcionalidad para listar todos los items de una orden, asegurando que la orden pertenezca al usuario autenticado.

## 🚀 Solución Propuesta

Se implementará un endpoint `GET /api/orders/:orderId/items` que retorne todos los items de la orden indicada, siempre que la orden pertenezca al usuario autenticado (usando la cookie de sesión). La respuesta debe ser un arreglo de items, cada uno con sus datos principales.

### Principios Fundamentales

1. **Autenticación Requerida**: Solo usuarios autenticados pueden acceder al detalle de sus órdenes.
2. **Privacidad**: Un usuario solo puede ver los items de sus propias órdenes.
3. **Integridad**: El `orderId` debe existir y pertenecer al usuario logueado.
4. **Eficiencia**: La consulta debe ser eficiente y retornar solo los datos necesarios.

### Diseño de Endpoint

- `GET /api/orders/:orderId/items`
	- **Requiere sesión activa**: El usuario debe estar autenticado (cookie de sesión).
	- **El `orderId` debe existir y pertenecer al usuario logueado.**

	- **Respuesta Exitosa**: `200 OK` con el arreglo de items de la orden.

		**Ejemplo de Respuesta:**
		```json
		{
			"data": [
				{
					"id": 8,
					"orderId": 6,
					"productId": 1,
					"title": "Polo React",
					"imgSrc": "/images/polos/polo-react.png",
					"quantity": 1,
					"price": 2000,
					"lineTotal": 2000,
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

	- **Respuesta si la orden no existe o no pertenece al usuario**:  
		`404 Not Found`
		```json
		{
			"error": "Orden no encontrada"
		}
		```

### Tareas de Implementación

- [ ] Crear método en `orders.repository.ts` para obtener items por `orderId` y validar pertenencia.
- [ ] Crear método en `orders.service.ts` para la lógica de negocio.
- [ ] Crear handler en `orders.controller.ts` para el endpoint.
- [ ] Crear ruta en `orders.routes.ts` y registrar en `routes.ts`.
- [ ] Agregar el endpoint a `api.rest`.
- [ ] Actualizar documentación en el README.

## Antes de enviar la PR

- [ ] Probar el endpoint con usuarios autenticados y órdenes válidas.
- [ ] Validar que solo se retornen items de órdenes del usuario logueado.
- [ ] Validar respuesta para órdenes inexistentes o ajenas.
- [ ] Ejecutar `npm run lint` y corregir errores.
- [ ] Ejecutar `npm run format` para formatear el código.
