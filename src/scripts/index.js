const inputSearch = document.getElementById("search");
const iconSearch = document.getElementById("iconSearch");

iconSearch.addEventListener("click", () => {
  inputSearch.style.opacity = "1";
  inputSearch.style.width = "100%";
});

inputSearch.addEventListener("blur", () => {
  inputSearch.style.opacity = "0";
  inputSearch.style.width = "0";
  inputSearch.value = "";
});
