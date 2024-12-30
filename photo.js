let currentIndex = 0;
const items = document.querySelectorAll('[data-fancybox="gallery"]');

function showImage(index) {
  const imgSrc = items[index].getAttribute("href");
  const img = document.createElement("img");
  img.src = imgSrc;
  img.style.maxWidth = "100%";
  img.style.maxHeight = "100%";
  img.style.objectFit = "contain";
  const modal = document.createElement("div");
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0, 0, 0, .9)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.appendChild(img);

  const prevButton = document.createElement("button");
  prevButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>';
  prevButton.style.position = "absolute";
  prevButton.style.left = "10px";
  prevButton.style.top = "50%";
  prevButton.style.transform = "translateY(-50%)";
  prevButton.style.background = "#EEE6D8";
  prevButton.style.borderRadius = "20px";
  prevButton.style.color = "white";
  prevButton.style.width = "3rem";
  prevButton.style.height = "3rem";
  prevButton.style.cursor = "pointer";
  prevButton.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    document.body.removeChild(modal);
    showImage(currentIndex);
  });

  const nextButton = document.createElement("button");
  nextButton.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>';
  nextButton.style.position = "absolute";
  nextButton.style.right = "10px";
  nextButton.style.top = "50%";
  nextButton.style.transform = "translateY(-50%)";
  nextButton.style.background = "#EEE6D8";
  nextButton.style.borderRadius = "20px";
  nextButton.style.color = "white";
  nextButton.style.width = "3rem";
  nextButton.style.height = "3rem";
  nextButton.style.cursor = "pointer";
  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % items.length;
    document.body.removeChild(modal);
    showImage(currentIndex);
  });

  modal.appendChild(prevButton);
  modal.appendChild(nextButton);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      document.body.removeChild(modal);
      showImage(currentIndex);
    } else if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % items.length;
      document.body.removeChild(modal);
      showImage(currentIndex);
    }
  });

  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  document.body.appendChild(modal);
}

items.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    currentIndex = index;
    showImage(currentIndex);
  });
});