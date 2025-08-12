# 📊 Ejercicio: Tabla — Mi semana ideal (versión PRO pero simple)

Este ejercicio está diseñado para ayudarte a practicar el uso de tablas en HTML de forma **semántica, accesible y estructurada**, sin necesidad de estilos visuales.

---

## 🎯 Objetivo

Construir una tabla que represente cómo se vería tu semana ideal, usando correctamente:

- Elementos semánticos como `<thead>`, `<tbody>`, `<tfoot>`
- Encabezados con `scope`
- Atributos como `colspan` y `rowspan`
- Un resumen final con `<caption>` y `<tfoot>`

---

## ✅ Requisitos del ejercicio

1. Crear un archivo llamado `mi-tabla.html`.

2. Agregar la estructura mínima de un documento HTML:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    ...
  </head>
  <body>
    ...
  </body>
</html>
```

3. Dentro del <body>, crear una tabla con:

Elemento Uso obligatorio

<table>	Sí
<caption>	Sí
<thead>	Sí
<tbody>	Sí
<tfoot>	Sí
<tr>, <th>, <td>	Sí
scope="col" y scope="row"	Sí
colspan y rowspan	Al menos una vez cada uno

4. 🧪 Estructura sugerida

- 7 columnas para los días de la semana
- 3 filas: Mañana, Tarde, Noche
- Pie de tabla (<tfoot>) con un resumen textual
