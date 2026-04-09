# Feature: Preparación para migración a Tailwind

## Descripción del Problema

Actualmente el proyecto depende de dos estrategias de estilos:

- `styles.module.css` en componentes y rutas
- la carpeta global `src/styles`

El objetivo de la migración es dejar de usar ambas estrategias y pasar a Tailwind CSS v3 como solución principal de estilos.

Antes de empezar a migrar componentes y routes a clases Tailwind en los archivos TSX, primero hace falta preparar la base del proyecto para que:

- Tailwind quede correctamente instalado y configurado
- los tokens visuales actuales se trasladen a una estructura compatible con Tailwind
- la UI siga viéndose igual
- la carpeta `src/styles` quede lista para eliminarse por completo

Este issue no debe migrar todavía los componentes uno por uno, pero sí debe dejar listo todo lo necesario para que el siguiente issue pueda entrar a cualquier TSX y cambiar cosas como:

```tsx
className={styles.wrapper}
```

por:

```tsx
className="flex flex-col gap-8 md:flex-row md:items-start"
```

sin perder consistencia visual.

## 🚀 Solución Propuesta

Preparar el proyecto para usar **Tailwind CSS v3** como nueva base de estilos y sacar de `src/styles` los tokens y reglas necesarias para que Tailwind pueda reemplazar progresivamente el uso actual de `module.css`.

La idea no es conservar `src/styles` como base permanente, sino usarla solo como referencia para extraer:

- colores
- tipografías
- spacing
- radios
- anchos
- utilidades repetidas

y mover todo eso a donde tenga sentido en una arquitectura Tailwind.

### Documentación oficial recomendada

- Instalación con Vite: [Install Tailwind CSS with Vite - v3](https://v3.tailwindcss.com/docs/guides/vite)
- Configuración del contenido (`content`): [Content Configuration - v3](https://v3.tailwindcss.com/docs/content-configuration)
- Configuración del tema: [Theme Configuration - v3](https://v3.tailwindcss.com/docs/theme)
- Preflight / base reset de Tailwind: [Preflight - v3](https://v3.tailwindcss.com/docs/preflight)
- Reutilizar clases con `@apply`: [Functions and Directives - v3](https://v3.tailwindcss.com/docs/functions-and-directives)

> 💡 **Importante**: como este issue exige que la app se siga viendo igual, hay que tener cuidado con **Preflight** porque puede alterar estilos base. Si se decide usar `@tailwind base`, hay que validar que no cambie el resultado visual. Si lo cambia, habrá que ajustar la estrategia.

### Implementación

#### 1. Instalar Tailwind v3 y generar configuración base

👉 Instalar Tailwind v3 explícitamente, junto con PostCSS y Autoprefixer.

Referencia oficial:
- [https://v3.tailwindcss.com/docs/guides/vite](https://v3.tailwindcss.com/docs/guides/vite)

La instalación debe fijar explícitamente la versión 3:

```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

Esto debería generar archivos similares a:

- `tailwind.config.js` o `tailwind.config.ts`
- `postcss.config.js`

#### 2. Configurar `tailwind.config.ts`

👉 En Tailwind v3 este archivo es clave.

Debe incluir:

- `content` con las rutas correctas del proyecto
- `theme.extend` para mapear los tokens visuales actuales
- `plugins` si luego se necesitan, pero en esta etapa no deberían ser obligatorios

Ejemplo de estructura esperada:

```ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        border: "var(--border)",
        accent: {
          1: "var(--accent-1)",
          2: "var(--accent-2)",
          3: "var(--accent-3)",
          4: "var(--accent-4)",
          5: "var(--accent-5)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
```

Con una configuración así, Tailwind generará clases como:

- `bg-background`
- `text-foreground`
- `bg-muted`
- `text-muted-foreground`
- `bg-accent-1`
- `bg-accent-3`
- `border-border`
- `font-sans`
- `rounded-md`

> 💡 **Tip**: `content` es obligatorio en v3. Si faltan rutas o extensiones, Tailwind no generará las clases que luego se intenten usar en los TSX.

#### 3. Configurar `postcss.config.js`

👉 Tailwind v3 se procesa con PostCSS, así que este archivo debe quedar correctamente configurado.

Ejemplo:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### 4. Crear una nueva base global mínima compatible con Tailwind

👉 Como la carpeta `src/styles` se va a eliminar, este issue no debe seguir dependiendo de sus imports.

En su lugar, hay que dejar un archivo global mínimo, por ejemplo `src/index.css`, que sirva solo para:

- cargar Tailwind
- declarar variables base si todavía son necesarias
- definir reglas globales mínimas realmente necesarias

Ejemplo:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: hsl(0 0% 100%);
    --foreground: hsl(240 10% 14%);
    --muted: hsl(240 8% 98%);
    --muted-foreground: hsl(240 7% 41%);
    --primary: hsl(240 62% 57%);
    --primary-foreground: hsl(0 0% 100%);
    --secondary: hsl(240 7% 95%);
    --secondary-foreground: hsl(240 7% 41%);
    --border: hsl(240 8% 83%);

    --accent-1: hsl(240 33% 99%);
    --accent-2: hsl(240 33% 98%);
    --accent-3: hsl(240 33% 97%);
    --accent-4: hsl(240 33% 94%);
    --accent-5: hsl(240 33% 90%);

    --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    --font-mono: "Source Code Pro", "Menlo", "Consolas", "Monaco",
      "Courier New", monospace;
    --font-display: "Protest Guerrilla", "Protest Strike", "Stencil", "Impact",
      sans-serif;

    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
  }

  body {
    @apply bg-background text-foreground font-sans;
  }
}
```

La relación entre ambos archivos sería así:

- en `index.css` vive el valor real: `--muted-foreground: hsl(...)`
- en `tailwind.config.ts` se expone ese valor: `muted.foreground: "var(--muted-foreground)"`
- en el TSX se usa como utility: `className="text-muted-foreground"`

Otro ejemplo:

- en `index.css`: `--accent-3: hsl(...)`
- en `tailwind.config.ts`: `accent.3: "var(--accent-3)"`
- en el TSX: `className="bg-accent-3"`

Ejemplo de uso final en un componente:

```tsx
<div className="rounded-md border border-border bg-accent-1 p-6 text-muted-foreground">
  Contenido
</div>
```

> 💡 **Importante**: este archivo no debería convertirse en una nueva versión de `src/styles`. La idea es dejar solo una base mínima y mover el resto de la estilización hacia utilities y theme config de Tailwind.

#### 5. Migrar tokens desde `src/styles` a la nueva base

👉 Este issue sí debe incluir el trabajo de revisar `src/styles` y mover lo necesario a donde más sentido tenga para Tailwind.

Eso implica:

- tomar colores y exponerlos como colores de Tailwind
- tomar tipografías y exponerlas como `fontFamily`
- tomar radios y exponerlos como `borderRadius`
- tomar spacing y decidir si se usa la escala nativa de Tailwind o si hay que extenderla
- tomar utilidades globales realmente necesarias y decidir si se reemplazan con utilities nativas o con clases compuestas mínimas

Ejemplos de mapeo:

- tokens visuales → `tailwind.config.ts`
- variables globales mínimas → `@layer base`
- utilidades repetidas → clases Tailwind directas o utilidades pequeñas con `@apply`

El objetivo es que, al terminar este issue, el sistema visual ya esté disponible para ser usado directamente desde `className`.

#### 6. Dejar lista la eliminación de `src/styles`

👉 Como la carpeta `src/styles` se va a eliminar, este issue debe preparar ese terreno.

Eso puede incluir:

- mover tokens útiles fuera de `src/styles`
- dejar de depender de imports globales antiguos
- identificar qué reglas globales realmente siguen haciendo falta
- reducir al mínimo lo que quede como CSS manual

No hace falta borrar toda la carpeta en este mismo issue si todavía bloquearía el siguiente paso, pero sí debe quedar claro que ya no será la base principal del sistema.

#### 7. Mantener convivencia temporal con `CSS Modules`

👉 Durante este issue, `styles.module.css` todavía puede seguir existiendo.

La diferencia es que ahora Tailwind ya debe quedar listo para reemplazarlo gradualmente.

El objetivo al cerrar este issue es que el siguiente trabajo no consista en “preparar Tailwind”, sino directamente en migrar JSX/TSX para pasar de:

```tsx
className={styles.card}
```

a algo como:

```tsx
className="flex flex-col gap-4 rounded-lg border border-border bg-background p-6"
```

#### 8. Validar visualmente que no cambió nada

👉 Este issue no está completo si la app cambia de apariencia.

Hay que revisar:

- layout general
- tipografías
- colores
- spacing
- bordes
- botones
- inputs
- cards
- navegación

Si algo cambia visualmente, hay que corregir la configuración antes de pasar al siguiente issue.

### Archivos que se modifican

| Archivo | Cambio |
| ------- | ------ |
| `package.json` | Agregar dependencias de Tailwind v3 |
| `tailwind.config.ts` | **Nuevo** — Configurar `content` y extender el tema |
| `postcss.config.js` | **Nuevo** — Procesar Tailwind con PostCSS |
| `src/index.css` o archivo global equivalente | **Nuevo o actualizado** — Cargar Tailwind y definir base mínima |
| `src/main.tsx` | Ajustar el import del CSS global si cambia |
| `src/styles/*` | Usarlo como referencia para extraer tokens y dejar la carpeta lista para eliminarse |

### Consideraciones Importantes

1. **Sin cambios visuales**: al correr la app, debe verse igual que antes.
2. **Tailwind debe quedar listo para usarse en TSX**: el siguiente issue debe poder escribir clases utilitarias directamente en `className`.
3. **No conservar `src/styles` como dependencia principal**: si se usa en este issue, debe ser solo como referencia para extraer tokens o reglas necesarias.
4. **Cuidado con Preflight**: puede alterar estilos base y romper la apariencia actual.
5. **No migrar todavía todos los componentes**: este issue prepara la base; el siguiente migrará routes y componentes.
6. **Reducir CSS manual**: todo lo que pueda representarse con configuración y utilities de Tailwind debería moverse hacia ahí.
7. **Dejar los tokens donde Tailwind los pueda usar bien**: no solo copiarlos, sino ubicarlos en la capa correcta.

### Tareas de Implementación

- [ ] Instalar `tailwindcss@3`, `postcss` y `autoprefixer`.
- [ ] Crear la configuración inicial con `npx tailwindcss init -p`.
- [ ] Configurar `content` correctamente en `tailwind.config.ts`.
- [ ] Extender el tema en `tailwind.config.ts` con los tokens visuales del proyecto.
- [ ] Crear o ajustar un archivo global mínimo para Tailwind, sin seguir dependiendo de la carpeta `src/styles`.
- [ ] Migrar colores, tipografías, radios y demás tokens desde `src/styles` a donde tenga sentido para Tailwind.
- [ ] Evaluar qué reglas globales realmente deben sobrevivir fuera de Tailwind y reducirlas al mínimo.
- [ ] Verificar que Tailwind compile correctamente.
- [ ] Confirmar que la app mantiene el mismo aspecto visual.
- [ ] Dejar lista la base para que el siguiente issue pueda reemplazar `styles.module.css` por `className="..."` directamente en routes y componentes.

## Antes de enviar la PR

- [ ] Correr la app y verificar que no hubo cambios visuales inesperados.
- [ ] Confirmar que Tailwind compila correctamente.
- [ ] Verificar que `tailwind.config.ts` incluye correctamente las rutas de `content`.
- [ ] Confirmar que los tokens visuales ya están disponibles desde la configuración/base de Tailwind.
- [ ] Verificar que el siguiente issue ya podría migrar cualquier TSX a clases utilitarias sin depender de `src/styles`.
- [ ] Confirmar que no se migraron todavía masivamente todos los componentes.
- [ ] Ejecutar `npm run lint` y corregir errores.

## Nota para el siguiente issue

Una vez terminado este issue, el siguiente paso será migrar componentes y routes de forma incremental para reemplazar `styles.module.css` por clases Tailwind directamente en `className`, usando la base, tokens y utilidades ya preparados aquí.