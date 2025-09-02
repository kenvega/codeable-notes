// Crear elementos
const toggleButton = document.createElement("button");
const hambugerIcon = document.createElement("span");
const closeIcon = document.createElement("span");
const menu = document.createElement("nav");
const links = ["Inicio", "Productos", "Contacto"];

hambugerIcon.textContent = "🍔";
closeIcon.textContent = "❌";

links.forEach((text) => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = text;
  menu.append(link);
});

toggleButton.append(hambugerIcon);
toggleButton.append(closeIcon);

// Estilos
menu.classList.add("nav", "hidden");
closeIcon.classList.add("hidden");

// Comportamiento
toggleButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hambugerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  if (toggleButton.contains(event.target)) return;
  if (menu.contains(event.target)) return;

  menu.classList.add("hidden");
  hambugerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
});

// Agregar elementos al documento
document.body.append(toggleButton);
document.body.append(menu);
