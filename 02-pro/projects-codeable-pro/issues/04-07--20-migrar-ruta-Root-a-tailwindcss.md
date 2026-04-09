# Feature: Migrar ruta `root` a Tailwind CSS

**Depende de:** #18 

## Descripción del Problema

La ruta `root` todavía usa `styles.module.css` como fuente principal de estilos. Esto incluye no solo el archivo `src/routes/root/index.tsx`, sino también varios subcomponentes del header:

- `src/routes/root/components/auth-nav`
- `src/routes/root/components/header-main`
- `src/routes/root/components/main-nav`
- `src/routes/root/components/header-actions`

Como esta ruta define la estructura general de la app, su header sticky y su footer, es importante migrarla con cuidado para no romper:

- el layout general de la aplicación
- la navegación principal
- la barra de autenticación
- el carrito
- el footer con links y newsletter

El objetivo de este issue es reemplazar el uso de `styles.module.css` en toda la ruta `root` por clases Tailwind directamente en `className`, manteniendo exactamente la misma apariencia visual.

## 🚀 Solución Propuesta

Migrar la ruta `root` y sus subcomponentes a Tailwind CSS usando los tokens y utilidades ya preparados en el issue anterior.

La idea es reemplazar patrones como:

```tsx
className={styles.root}
```

por clases Tailwind como:

```tsx
className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-background"
```

o reemplazar estados activos como:

```tsx
clsx(styles["main-nav__link"], isActive && styles["main-nav__link--active"])
```

por algo como:

```tsx
className={({ isActive }) =>
  clsx(
    "inline-flex items-center justify-center p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent-3",
    isActive && "text-accent-foreground"
  )
}
```

La migración debe dejar lista la ruta `root` sin depender de `styles.module.css`, de forma que los estilos queden visibles y mantenibles directamente desde los archivos TSX.

### Implementación

#### 1. Migrar `src/routes/root/index.tsx`

👉 Reemplazar todas las referencias a `styles` por clases Tailwind.

Esto incluye:

- contenedor principal de la app
- header sticky
- main
- footer
- columnas de links
- bloque de newsletter
- formulario de suscripción
- copyright

Ejemplos esperados de conversión:

```tsx
className={styles.root}
```

→

```tsx
className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-background"
```

```tsx
className={styles.root__header}
```

→

```tsx
className="sticky top-0 z-50 border-b border-border bg-background"
```

```tsx
className={styles["root__footer-section"]}
```

→

```tsx
className="flex flex-col gap-8 lg:flex-row"
```

```tsx
className={styles["root__footer-form"]}
```

→

```tsx
className="flex gap-2"
```

#### 2. Migrar `src/routes/root/components/auth-nav`

👉 Este componente contiene la barra superior de autenticación.

Hay que migrar:

- fondo negro y texto blanco
- altura del contenedor
- alineación a la derecha
- spacing entre links
- hover con underline
- botón de logout

Ejemplos esperados:

```tsx
className="bg-black text-sm font-medium text-white"
```

```tsx
className="flex h-10 items-center justify-end"
```

```tsx
className="flex items-center gap-4"
```

```tsx
className="no-underline hover:underline hover:decoration-white hover:underline-offset-2"
```

Si el `Button` ya trae estilos propios, la migración debe respetarlos y solo agregar clases extra cuando realmente haga falta.

#### 3. Migrar `src/routes/root/components/header-main`

👉 Este componente contiene:

- logo
- acciones del header
- separator responsive
- navegación principal

Hay que migrar:

- wrapper principal
- fila superior del header
- separator que solo aparece en mobile

Ejemplos esperados:

```tsx
className="relative"
```

```tsx
className="flex h-12 items-center justify-between"
```

```tsx
className="block sm:hidden"
```

#### 4. Migrar `src/routes/root/components/main-nav`

👉 Este componente es importante porque usa `NavLink` con estado activo.

La migración debe reemplazar tanto las clases base como la clase activa.

Ejemplo esperado:

```tsx
className="static sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
```

```tsx
className="flex h-12 justify-center"
```

```tsx
className={({ isActive }) =>
  clsx(
    "inline-flex items-center justify-center p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent-3",
    isActive && "text-accent-foreground"
  )
}
```

> 💡 **Tip**: este es un buen caso para usar `clsx` con strings Tailwind en lugar de variantes traídas desde CSS Modules.

#### 5. Migrar `src/routes/root/components/header-actions`

👉 Este componente maneja el botón del carrito y su badge.

Hay que migrar:

- wrapper flex
- gap entre acciones
- posición relativa del botón del carrito
- badge absoluto con fondo primario y texto contrastante

Ejemplo esperado:

```tsx
className="flex items-center gap-2"
```

```tsx
className="relative"
```

```tsx
className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
```

#### 6. Eliminar imports de `styles.module.css`

👉 Cuando cada componente ya tenga sus clases Tailwind, se deben eliminar los imports de CSS Modules.

Esto aplica a:

- `src/routes/root/index.tsx`
- `src/routes/root/components/auth-nav/index.tsx`
- `src/routes/root/components/header-main/index.tsx`
- `src/routes/root/components/main-nav/index.tsx`
- `src/routes/root/components/header-actions/index.tsx`

#### 7. Eliminar todos los archivos `styles.module.css` de la ruta `root`

👉 Una vez que la ruta y sus subcomponentes queden completamente migrados, se deben eliminar todos sus archivos `styles.module.css`.

Al finalizar este issue, no debe quedar ningún `styles.module.css` dentro de `src/routes/root` ni dentro de sus subcomponentes.

Archivos esperados para eliminar:

- `src/routes/root/styles.module.css`
- `src/routes/root/components/auth-nav/styles.module.css`
- `src/routes/root/components/header-main/styles.module.css`
- `src/routes/root/components/main-nav/styles.module.css`
- `src/routes/root/components/header-actions/styles.module.css`

#### 8. Validar que no haya cambios visuales

👉 Este issue no termina al compilar; termina cuando la ruta se ve igual.

Hay que revisar:

- comportamiento sticky del header
- espaciado y alineación del header
- estado activo de la navegación
- badge del carrito
- layout responsive del footer
- spacing y tipografía del newsletter
- borde superior e inferior donde corresponda

### Archivos que se modifican

| Archivo | Cambio |
| ------- | ------ |
| `src/routes/root/index.tsx` | Reemplazar `styles` por clases Tailwind |
| `src/routes/root/components/auth-nav/index.tsx` | Reemplazar `styles` por clases Tailwind |
| `src/routes/root/components/header-main/index.tsx` | Reemplazar `styles` por clases Tailwind |
| `src/routes/root/components/main-nav/index.tsx` | Reemplazar `styles` por clases Tailwind |
| `src/routes/root/components/header-actions/index.tsx` | Reemplazar `styles` por clases Tailwind |
| `src/routes/root/styles.module.css` | Eliminar |
| `src/routes/root/components/auth-nav/styles.module.css` | Eliminar |
| `src/routes/root/components/header-main/styles.module.css` | Eliminar |
| `src/routes/root/components/main-nav/styles.module.css` | Eliminar |
| `src/routes/root/components/header-actions/styles.module.css` | Eliminar |

### Consideraciones Importantes

1. **Sin cambios visuales**: la ruta `root` debe verse igual antes y después de la migración.
2. **Usar Tailwind directamente en TSX**: la idea de este issue es que los estilos queden visibles en `className`.
3. **No introducir clases CSS nuevas sin necesidad**: priorizar utilities Tailwind por encima de recrear clases manuales.
4. **Mantener comportamiento responsive**: especialmente en `main-nav`, `header-main` y footer.
5. **Revisar componentes UI compartidos**: `Button`, `Container`, `Input`, `Section` y `Separator` ya pueden tener estilos propios; la migración debe complementarlos, no romperlos.
6. **Conservar la lógica actual**: este issue es visual/estructural; no debe cambiar el comportamiento funcional del newsletter, auth o cart.

### Tareas de Implementación

- [ ] Migrar `src/routes/root/index.tsx` a clases Tailwind.
- [ ] Migrar `src/routes/root/components/auth-nav/index.tsx` a clases Tailwind.
- [ ] Migrar `src/routes/root/components/header-main/index.tsx` a clases Tailwind.
- [ ] Migrar `src/routes/root/components/main-nav/index.tsx` a clases Tailwind.
- [ ] Migrar `src/routes/root/components/header-actions/index.tsx` a clases Tailwind.
- [ ] Eliminar imports de `styles.module.css` en los componentes migrados.
- [ ] Eliminar todos los archivos `styles.module.css` de `src/routes/root` y sus subcomponentes.
- [ ] Verificar que la UI se mantenga igual en desktop y mobile.

## Antes de enviar la PR

- [ ] Correr la app y revisar visualmente la ruta `root`.
- [ ] Verificar que el header siga siendo sticky.
- [ ] Verificar que la navegación principal mantenga su estado activo.
- [ ] Verificar que el badge del carrito siga posicionado correctamente.
- [ ] Verificar que el footer mantenga su layout responsive.
- [ ] Confirmar que ya no quedan imports de `styles.module.css` dentro de la ruta `root`.
- [ ] Confirmar que ya no existe ningún archivo `styles.module.css` dentro de `src/routes/root`.
- [ ] Ejecutar `npm run lint` y corregir errores.
- [ ] Ejecutar un chequeo de tipos si el proyecto ya tiene ese script disponible.