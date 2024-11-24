const imgs = document.querySelectorAll("img");
const modalContainer = document.querySelector(".modalContainer");
const modal = document.querySelector(".modal");

function selectImagem(e) {
  const src = e.target.src;
  showImageFullscreen(src);
}

function showImageFullscreen(imgSrc) {
  modal.innerHTML = "";

  modal.appendChild(renderImg(imgSrc));
  modalContainer.classList.add("active");
}

function renderImg(imgSrc) {
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = "Imagem em tela cheia";

  return img;
}

modalContainer.addEventListener("click", (e) => {;
  
  if (e.target === modalContainer) {
    modalContainer.classList.remove("active");
  }
});

imgs.forEach((img) => {
  img.addEventListener("click", selectImagem);
});
