const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});

// outra forma de fazer o dark mode ou qualquer outra lofica de true or false
// const toggle = document.getElementById("toggle");
// toggle.addEventListener("change", () => {
//   document.body.classList.toggle("dark-mode");
// });
