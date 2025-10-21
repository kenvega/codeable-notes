// Seleccionar elemento contenedor
const counterContainer = document.querySelector("#counter-container");

// Crear elementos
const counterValue = document.createElement("p");
const incrementButton = document.createElement("button");
const decrementButton = document.createElement("button");
const resetButton = document.createElement("button");

counterValue.textContent = "0";
incrementButton.textContent = "Incrementar";
decrementButton.textContent = "Decrementar";
resetButton.textContent = "Resetear";

counterContainer.append(counterValue);
counterContainer.append(incrementButton);
counterContainer.append(decrementButton);
counterContainer.append(resetButton);

// Estilos
counterContainer.classList.add("counter-container");

// Comportamiento
incrementButton.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
});

decrementButton.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

resetButton.addEventListener("click", () => {
  counterValue.textContent = "0";
});