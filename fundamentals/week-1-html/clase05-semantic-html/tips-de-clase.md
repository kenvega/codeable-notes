# ☠️ Reglas de la Semántica en HTML

Unos tips para escribir HTML semántico que tenga sentido, sea accesible, y te gane el respeto de las tecnologías de asistencia (y de tus compañerxs de equipo).

---

## 1. Un solo `<main>` por documento

- ✅ Es el contenido central único.
- ❌ No pongas varios `<main>`.
- 🔒 No debe anidarse dentro de `section` ni de otros `main`.

---

## 2. Cada `section` debe tener un heading (`<h1>`–`<h6>`)

- ✅ `section` sin título = div disfrazado.
- ❌ Si no hay heading, no sirve semánticamente.

---

## 3. Usá `article` solo si tiene sentido fuera del contexto

- ✅ Post, reseña, comentario.
- ❌ No es para agrupar cosas sin relación clara.

---

## 4. Nada de `main` dentro de `section`

- ✅ `main` es único y vive al nivel raíz del body.
- ❌ No se anida dentro de otras secciones.

---

## 5. Si existe una etiqueta semántica, usala

- ✅ `<header>` en vez de `<div class="header">`
- ✅ `<nav>`, `<aside>`, `<footer>`...
- ❌ Evitá usar `<div>` como muleta universal.

---

## 6. `header` y `footer` pueden repetirse

- ✅ Se pueden usar dentro de `article`, `section`, etc.
- 🔄 Para encapsular encabezado y pie de ese fragmento.

---

## 7. Los encabezados deben seguir jerarquía

- ✅ `<h1>` → `<h2>` → `<h3>`
- ❌ No saltes de `<h1>` a `<h4>` sin estructura lógica.

---

## 8. HTML es significado, no solo apariencia

- ✅ `<strong>` para énfasis, no `<b>`
- ✅ `<em>` para importancia, no `<i>`
- ❌ CSS se encarga de los estilos, no el HTML.

---

## 9. No abuses de `role="presentation"`

- ✅ Solo si sabés que necesitás ignorar el contenido semántico.
- ❌ Si lo usás en todo, rompés la accesibilidad.

---

## 10. Todo bloque de contenido con propósito debe tener su contenedor semántico

- ✅ `<article>`, `<nav>`, `<aside>`, `<section>`
- ❌ No metas todo en `<div>` como si fuera 1999.

---

### 💀 BONUS: Errores frecuentes que "funcionan" pero matan la semántica

- Usar `<br>` para espacios → usá CSS.
- Escribir directamente dentro de `<ul>` o `<table>` sin `<li>` o `<td>`.
- Tener múltiples `<h1>` mal ubicados.

---

## 🧠 Recordá:

> “Si usás `div` para todo, te perdés la poesía del HTML.” – Una instructora cansada pero feliz.
