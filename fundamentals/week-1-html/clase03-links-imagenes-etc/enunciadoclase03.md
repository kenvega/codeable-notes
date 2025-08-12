# 🧪 Ejercicio: Mi perfil como dev

Este ejercicio integra varios conceptos fundamentales de HTML:

- Enlaces (`<a>`)
- Imágenes (`<img>`)
- Fragmentos de código (`<code>`, `<pre>`)
- Secciones expandibles (`<details>`, `<summary>`)
- Estructura semántica con `<figure>` y `<figcaption>`

---

## 🎯 Objetivo

Construir una página de perfil personal en HTML, incluyendo identidad visual, código real, contenido multimedia y secciones interactivas.

---

## ✅ Requisitos

1. **Título principal** (`<h1>`) con tu nombre o alias.

2. Una **imagen de perfil o avatar** (`<img>`) con:

   - Ruta relativa desde la carpeta `/assets/img/`
   - Atributo `alt` obligatorio
   - Atributo `title` opcional
   - Tamaño moderado (ideal: 300–500px de ancho)

3. Una sección con **enlaces** (`<a>`), que incluya:

   - Un link a tu perfil de GitHub
   - Un link a una web que te inspire (ej. MDN, CodePen)
   - Un link interno que navegue dentro del mismo documento (ej: `<a href="#bio">`)

4. Usá estos atributos clave en tus enlaces:

| Atributo                    | Uso recomendado                             |
| --------------------------- | ------------------------------------------- |
| `href`                      | Dirección del recurso o sección             |
| `target="_blank"`           | Abrir links externos en nueva pestaña       |
| `rel="noopener noreferrer"` | Seguridad al usar `target="_blank"`         |
| `title`                     | Texto accesible al pasar el mouse           |
| `aria-label`                | Opcional, para links con poco texto visible |

5. Una sección con `id="bio"` que incluya:

   - Un párrafo sobre vos
   - Un bloque de código (`<pre><code>`) con tu primera línea de código (real o inventada)

6. Un acordeón interactivo usando `<details>`:

   - `<summary>` claro y descriptivo
   - Lista con:
     - Hobbies o intereses
     - Tecnologías favoritas
     - Curiosidad o dato divertido sobre vos

7. Una **imagen pequeña del lugar donde naciste o viven**, usando:
   - Un contenedor `<figure>`
   - Una descripción en `<figcaption>` que indique dónde es y por qué es importante para vos
   - Una imagen accesible con `alt`

---

## 🐙 Personalizá tu avatar con estilo

Te recomendamos generar tu propio Octocat en esta herramienta oficial de GitHub:

🔗 https://myoctocat.com/build-your-octocat/

- Descargalo como `.png` o `.svg`
- Guardalo en la carpeta `assets/img/`
- Nombralo sin espacios (ej: `octocat-maria.png`)
- Su peso (~350 KB) es aceptable para este proyecto

💡 También es una forma divertida de representar tu personalidad tech sin usar fotos reales.

```html
<figure>
  <img
    src="assets/img/octocat-maria.png"
    alt="Octocat programando con auriculares"
    width="300"
  />
  <figcaption>Mi Octocat personalizado — representa mi mood dev ✨</figcaption>
</figure>
```
