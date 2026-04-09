# Actualización de Perfil de Usuario

## Descripción del Problema

Actualmente, la API de Full Stock no permite que el usuario autenticado actualice su información de perfil, específicamente el `email` y/o el `password`. Esto limita la experiencia del usuario y la seguridad, ya que no puede cambiar su correo ni renovar su contraseña.

## 🚀 Solución Propuesta

Se debe implementar la funcionalidad para que el usuario autenticado pueda actualizar su `email` y/o su `password`.

### Principios Fundamentales

1. **Autenticación Requerida**: Solo el usuario autenticado puede modificar su perfil.
2. **Validación**: El nuevo email debe ser válido y único. El nuevo password debe cumplir requisitos mínimos de seguridad.
3. **Seguridad**: El password debe ser hasheado antes de guardarse.
4. **Integridad**: No se deben permitir actualizaciones vacías.

### Diseño de Endpoint

- `PATCH /api/profile`
	- **Requiere sesión activa**: El usuario debe estar autenticado.
	- **Body**: Puede incluir uno o ambos campos:
		```json
		{
			"email": "nuevo@mail.com",
			"password": "nuevaPassword123"
		}
		```
	- **Validaciones**:
		- Si se envía `email`, debe ser válido y no estar en uso.
		- Si se envía `password`, debe cumplir requisitos mínimos (ej: longitud, complejidad).
	- **Respuesta Exitosa**: `200 OK` con el usuario actualizado (sin el campo password).
		```json
		{
			"data": {
				"id": 1,
				"email": "nuevo@mail.com",
				"createdAt": "2025-11-11T10:00:00Z",
				"updatedAt": "2025-11-11T10:05:00Z"
			}
		}
		```
	- **Errores**:
		- Si el email ya está en uso: `409 Conflict`
		- Si el password no cumple requisitos: `400 Bad Request`
		- Si no se envía ningún campo: `400 Bad Request`
		- Si el usuario no está autenticado: `401 Unauthorized`

### Tareas de Implementación

- [x] Crear schema de validación para el body (email y password).
- [x] Crear método en `users.repository.ts` para actualizar email y/o password.
- [x] Crear método en `users.service.ts` para la lógica de negocio y validaciones.
- [x] Crear handler en `users.controller.ts` para el endpoint.
- [x] Crear ruta en `users.routes.ts` y registrar en `routes.ts`.
- [x] Agregar el endpoint a `api.rest`.
- [x] Actualizar documentación en el README.

## Antes de enviar la PR

- [x] Probar el endpoint con distintos casos (solo email, solo password, ambos).
- [x] Validar respuestas de error y éxito.
- [x] Ejecutar `npm run lint` y corregir errores.
- [x] Ejecutar `npm run format` para formatear el código.
