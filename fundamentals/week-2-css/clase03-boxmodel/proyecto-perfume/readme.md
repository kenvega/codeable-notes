# 🧪 Proyecto guiado: Tarjeta de Producto (HTML + CSS)

Diseñaremos una **tarjeta de producto** basada en un reto clásico de [Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa), donde pondrás en práctica todo lo aprendido hasta ahora.

---

## 📚 ¿Qué vamos a practicar?

- ✅ HTML **semántico**
- ✅ **Selectores** (tipo, clase, ID, combinados, etc.)
- ✅ Reglas de **cascada** y **herencia**
- ✅ Componentes del **Box Model**
- ✅ Buenas prácticas de organización de estilos

---

## 🎯 Objetivo

Construir una tarjeta de producto que contenga:

- 🖼️ Imagen del producto
- 🧾 Nombre y descripción
- 💰 Precio actual y anterior
- 🛒 Botón de “Add to Cart” con ícono

---

## 🎨 Reglas CSS que deben aparecer

### ✅ Selectores

| Tipo de selector    | Ejemplos                                      |
| ------------------- | --------------------------------------------- |
| De tipo             | `button`, `h1`, `p`                           |
| De clase            | `.product-card`, `.price-box`, `.add-to-cart` |
| Combinados          | `.product-info > header`                      |
| De atributo (bonus) | `img[alt]` (para prácticas de accesibilidad)  |

---

### ✅ Cascada y herencia

- Define estilos globales en `html` o `body` (por ejemplo: `font-family`, `color`, `line-height`)
- Aprovecha la herencia para evitar repeticiones
- Evita sobreescrituras innecesarias (revisa la **cascada** antes de usar `!important`)

---

### ✅ Box Model

- Usa:  
  `padding`, `margin`, `border`, `border-radius`, `box-sizing`
- El contenedor `.product-card` debe tener una separación clara entre imagen e información
- Usa `box-sizing: border-box` para un mejor control del layout

---

## 💡 Tips de implementación

- Usa `box-sizing: border-box;` para que `padding` y `border` no inflen el tamaño de tus cajas
- Para el botón:  
  Usa `display: flex;` y `gap` para alinear ícono + texto
- Aplica `border-radius` para lograr esquinas suaves tanto en la tarjeta como en b

--

## ⌛ Tiempo sugerido: 50 minutos

| Tiempo | Actividad                                        |
| ------ | ------------------------------------------------ |
| 10 min | Crear el HTML base semántico                     |
| 20 min | Estructura visual y estilos principales          |
| 10 min | Estilización del botón y precios                 |
| 10 min | Revisión con el inspector, refinamientos finales |

---

---

## 🎓 Revisión – Lista de chequeo

- [ ] ¿La estructura HTML es **semántica**?
- [ ] ¿Usaste **selectores variados** (tipo, clase, combinados)?
- [ ] ¿Controlaste el layout usando correctamente el **Box Model**?
- [ ] ¿Aprovechaste **herencia** y evitaste estilos redundantes?
- [ ] ¿La tarjeta es visualmente fiel al diseño original?
- [ ] ¿El botón tiene **estados activos** (hover, focus)?

---

## Recursos (Drive)

Aquí pueden ver los recursos de nuestro Reto [Frontend Mentor](https://drive.google.com/drive/folders/1H6-dMw8eBBU5PvRVXOoosASDRivJkojT?usp=drive_link)

¡Listo para construir tu primera tarjeta de ecommerce! 🚀
