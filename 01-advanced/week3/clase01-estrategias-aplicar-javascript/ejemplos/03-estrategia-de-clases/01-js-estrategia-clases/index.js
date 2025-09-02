class ToggleMenu {
  constructor(containerId) {
    this.container = document.querySelector(containerId);
    this.menuState = false;
    this.init();
  }

  init() {
    this.button = document.createElement("button");
    this.button.textContent = "🍔";

    this.menu = document.createElement("nav");
    this.menu.classList.add("nav", "hidden");

    const links = ["Inicio", "Productos", "Contacto"];
    links.forEach((linkText) => {
      const link = document.createElement("a");
      link.href = "#";
      link.textContent = linkText;
      this.menu.append(link);
    });

    this.button.addEventListener("click", this.toggleMenu.bind(this));

    this.container.append(this.button);
    this.container.append(this.menu);
  }

  toggleMenu() {
    this.menuState = !this.menuState;
    this.menu.classList.toggle("hidden");
    this.button.textContent = this.menuState ? "❌" : "🍔";
  }
}

// Usamos la clase para crear una instancia del menú toggle
new ToggleMenu("#menu-container");
