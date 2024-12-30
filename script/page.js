document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");

  card.addEventListener("click", () => {
    if (card.classList.contains("open")) {
      card.classList.remove("open");
      card.classList.add("close");
    } else {
      card.classList.remove("close");
      card.classList.add("open");
    }
  });
});
