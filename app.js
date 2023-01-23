const colors = document.getElementById("colors");
const btn = document.getElementById("btn");
const searchColor = document.getElementById("searchColor");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  colors.innerHTML = searchColor.value;
  colors.style.background = `${searchColor.value}`;
  btn.style.background = `${searchColor.value}`;
  searchColor.value = "";
});
