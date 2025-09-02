function createToggleMenu(containerId) {
  const container = document.querySelector(containerId);
  // Esta será una variable "privada"
  let menuState = false;

  const button = document.createElement("button");
  button.textContent = "🍔";

  const menu = document.createElement("nav");
  menu.classList.add("nav", "hidden");

  const links = ["Inicio", "Productos", "Contacto"];
  links.forEach((linkText) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = linkText;
    menu.append(link);
  });

  button.addEventListener("click", function toggleMenu() {
    // La función toggleMenu continuará teniendo acceso a 'menuState'
    menuState = !menuState;
    menu.classList.toggle("hidden", !menuState);
    button.textContent = menuState ? "❌" : "🍔";
  });

  container.append(button);
  container.append(menu);

  // Puedes regresar un objeto que permita interactuar con la variable privada
  return {
    toggle: function () {
      button.click();
    },
  };
}

const toggleMenu = createToggleMenu("#menu-container");

// si en devtools intentas
// toggleMenu.toggle()
//  asi interactuarias con la variable menuState
// pero si intentas
// toggleMenu.menuState = false
//  eso no funcionara

// el objeto que se retorna puede retornar mas de una propiedad/metodo para llamar
// no solo tienes que devolver un metodo como toggle sino podrian ser mas cosas