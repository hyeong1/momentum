const images = [
    "img/0.jpg",
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg",
]

const chosenImage = Math.floor(Math.random() * images.length);

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`; // make bgImage (random background image)

// document.body.appendChild(bgImage); // add bgImage in body(HTML)

document.body.style.backgroundImage = `url(${images[chosenImage]})`;
