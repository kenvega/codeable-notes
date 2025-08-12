# ✅ Buenas Prácticas: Flexbox, Grid y Media Queries

Este documento reúne recomendaciones clave para trabajar con **Flexbox**, **CSS Grid** y **Media Queries** de forma eficiente y mantenible. Úsalo como referencia rápida mientras maquetas o revisas código.

---

## 📦 Flexbox

> 🔁 Sistema unidimensional (eje principal + eje cruzado)

### 🟢 Buenas prácticas

- ✅ Usa `gap` en lugar de márgenes entre hijos para mantener una separación consistente y evitar conflictos de colapso.

- ✅ Evita sobreusar `margin-left: auto` como hack para alinear elementos a la derecha. Prefiere `justify-content: space-between` o usar `flex-grow` cuando aplique.

- ✅ Combina `flex-grow`, `flex-shrink` y `flex-basis` con lógica clara para definir cómo se distribuye el espacio disponible.

- ✅ Ten cuidado con el colapso del contenido cuando uses `flex-shrink`. Usa `min-width` o `overflow` para evitar que se deformen los elementos.

- ⚠️ No abuses de `align-items: stretch` si el contenido tiene altura fija, ya que puede generar distorsiones inesperadas.

---

## 🧱 CSS Grid

> 🧭 Sistema bidimensional: organiza filas y columnas

### 🟢 Buenas prácticas

- ✅ Empieza por definir las columnas con `grid-template-columns` para estructurar el layout desde el inicio.

- ✅ Usa unidades fraccionales (`fr`) en lugar de píxeles cuando necesites un layout fluido y adaptable.

- ✅ Declara `gap` entre filas y columnas para mantener una separación consistente sin necesidad de márgenes.

- ✅ Cuando uses `grid-area`, asegúrate de tener también definido `grid-template-areas` para evitar errores y mejorar la legibilidad del layout.

- ✅ Usa `minmax()` para controlar el tamaño flexible de las columnas o filas con un rango definido.

- ⚠️ Evita anidar `grids` sin necesidad. Prioriza layouts planos para mantener la claridad y reducir complejidad innecesaria.

---

## 📱 Media Queries

> 🎯 Cambios en el diseño basados en ancho, alto o características del dispositivo

### 🟢 Buenas prácticas

- ✅ Usa `em` o `rem` en lugar de `px` para los puntos de quiebre. Esto permite que las media queries respeten la configuración de accesibilidad del usuario.

- ✅ Define los puntos de quiebre basándote en el contenido, no en el dispositivo. Pregúntate: “¿cuándo se rompe el diseño?”, no “¿qué dispositivo lo usa?”.

- ✅ Agrupa los estilos que cambian juntos dentro de la misma media query para mantener el código organizado y legible.

- ✅ Adopta un enfoque **mobile-first**, escribiendo los estilos base primero y aplicando los cambios progresivamente con `min-width`.

- ⚠️ Evita escribir media queries para cada componente por separado. Prioriza una estrategia de diseño más global para escalar tu CSS sin duplicar esfuerzos.

---

## ✨ Tip Extra

📁 Organiza tus estilos responsivos por capas:  
**Base → Layout (Grid/Flex) → Componente → Media Queries**
