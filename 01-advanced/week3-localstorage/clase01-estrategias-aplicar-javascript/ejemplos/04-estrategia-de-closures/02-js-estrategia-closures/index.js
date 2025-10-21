function createCounter(containerId) {
  const container = document.querySelector(containerId);
  container.classList.add("counter-container");
  // Variable que será privada
  let value = 0;

  const display = document.createElement("p");
  display.textContent = value;

  const incrementButton = document.createElement("button");
  incrementButton.textContent = "Incrementar";
  incrementButton.addEventListener("click", function () {
    value++;
    updateDisplay();
  });

  const decrementButton = document.createElement("button");
  decrementButton.textContent = "Decrementar";
  decrementButton.addEventListener("click", function () {
    value--;
    updateDisplay();
  });

  const resetButton = document.createElement("button");
  resetButton.textContent = "Resetear";
  resetButton.addEventListener("click", function () {
    value = 0;
    updateDisplay();
  });

  function updateDisplay() {
    display.textContent = value;
  }

  container.append(display);
  container.append(incrementButton);
  container.append(decrementButton);
  container.append(resetButton);

  // Opcionalmente retornar objeto que manipula variable privada
  return {
    increment: function () {
      incrementButton.click();
    },
    decrement: function () {
      decrementButton.click();
    },
    reset: function () {
      resetButton.click();
    },
  };
}

const counter = createCounter("#counter-container");

// podrias poner otro counter con igual funcionalidad solo con pocos cambios
// seria agregar esta linea
//   const counter2 = createCounter("#counter-container2")
// luego seria agregar al html un segundo elemento html
//   <div id="counter-container2"></div>
