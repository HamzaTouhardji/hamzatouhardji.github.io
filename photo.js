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
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  modal.style.display = "flex";
  modal.style.alignItems = "center";
  modal.style.justifyContent = "center";
  modal.appendChild(img);

  const prevButton = document.createElement("button");
  prevButton.innerText = "Previous";
  prevButton.style.position = "absolute";
  prevButton.style.left = "10px";
  prevButton.style.top = "50%";
  prevButton.style.transform = "translateY(-50%)";
  prevButton.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    document.body.removeChild(modal);
    showImage(currentIndex);
  });

  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.style.position = "absolute";
  nextButton.style.right = "10px";
  nextButton.style.top = "50%";
  nextButton.style.transform = "translateY(-50%)";
  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    currentIndex = (currentIndex + 1) % items.length;
    document.body.removeChild(modal);
    showImage(currentIndex);
  });

  modal.appendChild(prevButton);
  modal.appendChild(nextButton);

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