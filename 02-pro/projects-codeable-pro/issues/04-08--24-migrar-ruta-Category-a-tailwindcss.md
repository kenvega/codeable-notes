# Feature: Migrar ruta `category` a Tailwind CSS

**Depende de:** #18 

## Descripción del Problema

La ruta `category` todavía depende de `styles.module.css` para su layout y presentación. Esto incluye tanto la vista principal como sus subcomponentes:

- `src/routes/category/index.tsx`
- `src/routes/category/components/price-filter`
- `src/routes/category/components/product-card`

Esta ruta es importante porque combina varias piezas visuales y funcionales:

- encabezado de categoría
- descripción de la categoría
- layout responsive entre filtro y grilla de productos
- formulario para filtrar por precio
- cards de producto con imagen, descripción, precio y hover

El objetivo de este issue es reemplazar el uso de `styles.module.css` por clases Tailwind directamente en `className`, manteniendo exactamente la misma apariencia visual y dejando la ruta lista para seguir con la migración del resto de la app.

## 🚀 Solución Propuesta

Migrar toda la ruta `category` a Tailwind CSS usando los tokens y utilidades que ya quedaron preparados en el issue de setup.

La idea es reemplazar patrones como:

```tsx
className={styles.header}
```

por algo como:

```tsx
className="border-b border-border py-10"
```

o patrones como:

```tsx
className={clsx(styles["price-filter"], className)}
```

por algo como:

```tsx
className={clsx("flex flex-col gap-6", className)}
```

El resultado final debe ser que toda la ruta `category` quede estilada desde los archivos TSX, sin depender de CSS Modules.

### Implementación

#### 1. Migrar `src/routes/category/index.tsx`

👉 Reemplazar todas las referencias a `styles` por clases Tailwind.

Esto incluye:

- sección del header
- contenedor del contenido del header
- título
- descripción
- sección de productos
- layout general entre filtro y grid
- ancho responsive del filtro
- grilla de productos

Ejemplos esperados de conversión:

```tsx
className={styles.header}
```

→

```tsx
className="border-b border-border py-10"
```

```tsx
className={styles.header__content}
```

→

```tsx
className="max-w-3xl"
```

```tsx
className={styles.header__title}
```

→

```tsx
className="mb-4 text-4xl font-bold"
```

```tsx
className={styles.header__description}
```

→

```tsx
className="text-sm text-muted-foreground"
```

```tsx
className={styles.products__layout}
```

→

```tsx
className="flex flex-col gap-8 lg:flex-row"
```

```tsx
className={styles["products__price-filter"]}
```

→

```tsx
className="w-full max-w-sm lg:max-w-xs"
```

Para la grilla de productos, se espera una solución Tailwind equivalente a:

```tsx
className="grid flex-1 gap-8 [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]"
```

> 💡 **Tip**: aquí está bien usar un valor arbitrario de Tailwind si ayuda a mantener exactamente el comportamiento actual del `grid-template-columns`.

#### 2. Migrar `src/routes/category/components/price-filter`

👉 Este componente contiene el formulario de filtro por precio.

Hay que migrar:

- wrapper principal
- legend
- contenedor de inputs
- field wrappers
- labels
- ancho completo del botón

Ejemplos esperados:

```tsx
className={clsx("flex flex-col gap-6", className)}
```

```tsx
className="mb-4 text-base font-medium leading-6"
```

```tsx
className="flex gap-6"
```

```tsx
className="flex flex-col gap-2"
```

```tsx
className="text-sm font-medium leading-5"
```

```tsx
className="w-full"
```

Si `Input` y `Button` ya tienen estilos propios, la migración debe sumar solo las clases necesarias para el layout, no sobrescribir sin motivo sus variantes actuales.

#### 3. Migrar `src/routes/category/components/product-card`

👉 Este componente es importante porque concentra el layout visual de cada producto.

Hay que migrar:

- link wrapper
- contenedor de la card
- borde, radio y overflow
- imagen con ratio 3/4
- fondo del bloque de imagen
- `object-fit`
- hover con escala suave
- contenido interno
- tipografía del título
- descripción atenuada
- precio alineado abajo

Ejemplos esperados:

```tsx
className="block"
```

```tsx
className="relative flex h-full flex-col overflow-hidden rounded-xl border border-separator"
```

```tsx
className="aspect-[3/4] bg-muted"
```

```tsx
className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
```

```tsx
className="flex flex-1 flex-col gap-2 p-4"
```

```tsx
className="text-sm font-medium leading-5"
```

```tsx
className="text-sm leading-5 text-muted-foreground"
```

```tsx
className="mt-auto text-base font-medium leading-6"
```

> 💡 **Tip**: para el hover de la imagen, probablemente convenga usar `group` en el `<Link>` y `group-hover:scale-105` en la imagen.

#### 4. Revisar el badge de oferta

👉 En `product-card/styles.module.css` existe una clase `product-card__sale-badge`, aunque hoy no aparece usada en el JSX.

Este issue debe revisar ese caso y tomar una decisión explícita:

- si ya no se usa, se elimina junto con el archivo de estilos
- si debería existir en el diseño, se migra a Tailwind también

No debería quedar CSS muerto.

#### 5. Eliminar imports de `styles.module.css`

👉 Cuando los componentes ya estén migrados, se deben eliminar los imports de CSS Modules.

Esto aplica a:

- `src/routes/category/index.tsx`
- `src/routes/category/components/price-filter/index.tsx`
- `src/routes/category/components/product-card/index.tsx`

#### 6. Eliminar todos los archivos `styles.module.css` de la ruta `category`

👉 Una vez que la ruta y sus subcomponentes queden completamente migrados, se deben eliminar todos sus archivos `styles.module.css`.

Al finalizar este issue, no debe quedar ningún `styles.module.css` dentro de `src/routes/category` ni dentro de sus subcomponentes.

Archivos esperados para eliminar:

- `src/routes/category/styles.module.css`
- `src/routes/category/components/price-filter/styles.module.css`
- `src/routes/category/components/product-card/styles.module.css`

#### 7. Validar que no haya cambios visuales ni regresiones funcionales

👉 Esta ruta no está terminada solo porque compile.

Hay que revisar:

- título y descripción de la categoría
- layout entre filtro y productos
- responsive en mobile y desktop
- funcionamiento del filtro por precio
- spacing entre cards
- tamaño y ajuste de imágenes
- hover de la imagen
- alineación del precio dentro de la card

También hay que confirmar que el filtrado sigue funcionando igual y que la migración no rompió el uso de `searchParams`.

### Archivos que se modifican

| Archivo | Cambio |
| ------- | ------ |
| `src/routes/category/index.tsx` | Reemplazar `styles` por clases Tailwind |
| `src/routes/category/components/price-filter/index.tsx` | Reemplazar `styles` por clases Tailwind |
| `src/routes/category/components/product-card/index.tsx` | Reemplazar `styles` por clases Tailwind |
| `src/routes/category/styles.module.css` | Eliminar |
| `src/routes/category/components/price-filter/styles.module.css` | Eliminar |
| `src/routes/category/components/product-card/styles.module.css` | Eliminar |

### Consideraciones Importantes

1. **Sin cambios visuales**: la ruta `category` debe verse igual antes y después de la migración.
2. **Usar Tailwind directamente en TSX**: el resultado debe quedar visible en `className`, no escondido en nuevas clases CSS manuales.
3. **No introducir CSS extra sin necesidad**: priorizar utilities y valores arbitrarios de Tailwind cuando ayuden a replicar el layout actual.
4. **Mantener comportamiento responsive**: el filtro y la grilla deben seguir acomodándose igual en desktop y mobile.
5. **Conservar comportamiento funcional**: este issue no debe cambiar cómo funciona el filtrado ni la carga de productos.
6. **Eliminar CSS muerto**: especialmente el caso del sale badge si finalmente no se usa.

### Tareas de Implementación

- [ ] Migrar `src/routes/category/index.tsx` a clases Tailwind.
- [ ] Migrar `src/routes/category/components/price-filter/index.tsx` a clases Tailwind.
- [ ] Migrar `src/routes/category/components/product-card/index.tsx` a clases Tailwind.
- [ ] Revisar si `product-card__sale-badge` debe migrarse o eliminarse.
- [ ] Eliminar imports de `styles.module.css` en los componentes migrados.
- [ ] Eliminar todos los archivos `styles.module.css` de `src/routes/category` y sus subcomponentes.
- [ ] Verificar que la UI se mantenga igual en desktop y mobile.
- [ ] Verificar que el filtro por precio siga funcionando correctamente.

## Antes de enviar la PR

- [ ] Correr la app y revisar visualmente la ruta `category`.
- [ ] Verificar que el layout del header de categoría siga igual.
- [ ] Verificar que el filtro conserve su spacing y alineación.
- [ ] Verificar que la grilla de productos mantenga su comportamiento responsive.
- [ ] Verificar que las cards mantengan borde, radio, hover e imagen correctamente.
- [ ] Confirmar que el filtro por precio sigue actualizando los `searchParams`.
- [ ] Confirmar que ya no quedan imports de `styles.module.css` dentro de la ruta `category`.
- [ ] Confirmar que ya no existe ningún archivo `styles.module.css` dentro de `src/routes/category`.
- [ ] Ejecutar `npm run lint` y corregir errores.
- [ ] Ejecutar un chequeo de tipos si el proyecto ya tiene ese script disponible.