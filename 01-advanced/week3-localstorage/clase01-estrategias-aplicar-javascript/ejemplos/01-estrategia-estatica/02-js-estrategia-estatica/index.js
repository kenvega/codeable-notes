const counterValue = document.querySelector("#counter-value");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const resetButton = document.querySelector("#reset");

incrementButton.addEventListener("click", () => {
  counterValue.innerText = parseInt(counterValue.innerText) + 1;
});

decrementButton.addEventListener("click", () => {
  counterValue.innerText = parseInt(counterValue.innerText) - 1;
});

resetButton.addEventListener("click", () => {
  counterValue.innerText = "0";
});
