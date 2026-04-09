# Migrar Servicio de Órdenes

## Contexto
El servicio de órdenes fue desarrollado para simular la creación y consulta de órdenes sin una API real. Ahora debe conectarse con los endpoints del backend para registrar y consultar pedidos reales.

## Objetivo
Migrar todas las funciones de `order.service.ts` para que interactúen con la API, eliminando la lógica temporal y asegurando la persistencia y consulta de órdenes reales.

## Consideraciones
- Investiga los endpoints disponibles para creación y consulta de órdenes.
- Adapta los flujos del frontend a los datos y respuestas reales de la API.
- Elimina funciones temporales que ya no sean necesarias tras la migración.
- Puedes proponer cambios en el backend para mejorar la integración.

## Tareas sugeridas
- [ ] Revisar y documentar las funciones actuales de `order.service.ts`.
- [ ] Explorar los endpoints de órdenes en la API y la documentación sobre sus inputs/outputs.
- [ ] Migrar cada función para que utilice la API real.
- [ ] Eliminar o refactorizar funciones temporales que ya no sean necesarias.
- [ ] Probar los flujos de órdenes en el frontend.
- [ ] Actualizar la documentación y ejemplos de uso.
