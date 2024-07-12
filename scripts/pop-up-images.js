const images = [];
for (let i = 1; i <= 28; i++) {
  images.push(
    `https://github.com/Sthepen-EA/Media-files/blob/main/aecode-1-landing-page/Collaborators/Artboard%202%20copy%20${i}.png?raw=true`
  );
}

const imageElements = document.querySelectorAll(".collaborator-item");
let currentIndexes = Array.from(
  { length: imageElements.length },
  (_, i) => i % images.length
);
let animatingIndexes = new Set();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function showRandomImages() {
  const numImagesToChange = getRandomInt(3, 6); // Cambiar entre 3 a 5 imágenes
  const indicesToChange = [];

  // Obtener índices únicos aleatorios que no estén ya animándose
  while (indicesToChange.length < numImagesToChange) {
    const randomIndex = getRandomInt(0, imageElements.length);
    if (
      !indicesToChange.includes(randomIndex) &&
      !animatingIndexes.has(randomIndex)
    ) {
      indicesToChange.push(randomIndex);
    }
  }

  indicesToChange.forEach((index) => {
    animatingIndexes.add(index);
    const imageElement = imageElements[index];
    const currentIndex = currentIndexes[index];

    imageElement.classList.remove("show");
    imageElement.classList.add("hide");

    setTimeout(() => {
      // Actualizar el índice sin repetir imágenes
      let newIndex;
      do {
        newIndex = getRandomInt(0, images.length);
      } while (currentIndexes.includes(newIndex));

      imageElement.src = images[newIndex];
      currentIndexes[index] = newIndex;

      imageElement.classList.remove("hide");
      imageElement.classList.add("show");

      setTimeout(() => {
        animatingIndexes.delete(index);
      }, 500); // Duración de la animación
    }, 800);
  });

  setTimeout(showRandomImages, getRandomInt(3000, 6000));
}

document.addEventListener("DOMContentLoaded", () => {
  imageElements.forEach((element, index) => {
    element.src = images[index % images.length];
  });

  setTimeout(showRandomImages, 3000);
});
