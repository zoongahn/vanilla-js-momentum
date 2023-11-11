const images = [];
const NUMBER_OF_IMAGES = 12;

for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
    images.push(`${i}.jpg`);
}

const chosenImage = `momentum-image-${Math.floor(Math.random() * images.length)}.jpg`;

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background-image");

document.body.appendChild(bgImage);
