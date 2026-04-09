https://github.com/orgs/codeableorg/projects/264/views/1?pane=issue&itemId=169228485&issue=codeableorg%7Cfullstock-pro-0226%7C8

# Migrar Servicio de Carrito

## Contexto
El servicio de carrito fue desarrollado para simular la gestión de productos en el carrito sin una API real. Ahora debe conectarse con los endpoints del backend para persistir y consultar el estado del carrito.

## Objetivo
Migrar todas las funciones de `cart.service.ts` para que interactúen con la API, eliminando la lógica temporal y asegurando la persistencia y sincronización del carrito entre frontend y backend.

## Consideraciones
- Investiga los endpoints disponibles para gestión de carrito (agregar, eliminar, actualizar, consultar).
- Adapta los flujos del frontend a los datos y respuestas reales de la API.
- Elimina funciones temporales que ya no sean necesarias tras la migración.
- Puedes proponer cambios en el backend para mejorar la integración.

## Tareas sugeridas
- [ ] Revisar y documentar las funciones actuales de `cart.service.ts`.
- [ ] Explorar los endpoints de carrito en la API y la documentación sobre sus inputs/outputs.
- [ ] Migrar cada función para que utilice la API real.
- [ ] Eliminar o refactorizar funciones temporales que ya no sean necesarias.
- [ ] Probar los flujos de carrito en el frontend.
- [ ] Actualizar la documentación y ejemplos de uso.
