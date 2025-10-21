const toggleButton = document.querySelector("#toggle-button");
const menu = document.querySelector("#menu");
const hambugerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#close-icon");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hambugerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// delegacion de eventos
document.addEventListener("click", (event) => {
  if (toggleButton.contains(event.target)) return;
  if (menu.contains(event.target)) return;

  menu.classList.add("hidden");
  hambugerIcon.classList.remove("hidden");
  closeIcon.classList.add("hidden");
});
