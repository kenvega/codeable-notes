class Counter {
  constructor(containerId) {
    this.container = document.querySelector(containerId);
    this.container.classList.add("counter-container");
    this.value = 0;
    this.init();
  }

  init() {
    this.display = document.createElement("p");
    this.display.textContent = this.value;

    this.incrementButton = document.createElement("button");
    this.incrementButton.textContent = "Incrementar";
    this.incrementButton.addEventListener("click", () => this.increment());

    this.decrementButton = document.createElement("button");
    this.decrementButton.textContent = "Decrementar";
    this.decrementButton.addEventListener("click", () => this.decrement());

    this.resetButton = document.createElement("button");
    this.resetButton.textContent = "Resetear";
    this.resetButton.addEventListener("click", () => this.reset());

    this.container.append(this.display);
    this.container.append(this.incrementButton);
    this.container.append(this.decrementButton);
    this.container.append(this.resetButton);
  }

  increment() {
    this.value++;
    this.updateDisplay();
  }

  decrement() {
    this.value--;
    this.updateDisplay();
  }

  reset() {
    this.value = 0;
    this.updateDisplay();
  }

  updateDisplay() {
    this.display.textContent = this.value;
  }
}

// Usamos la clase para crear una instancia del contador
new Counter("#counter-container");

// const counter = new Counter("#counter-container"); // con esta linea se puede tener acceso a counter dentro de chrome dev tools
