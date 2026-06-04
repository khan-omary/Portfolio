const heroImage = document.getElementById("heroImage");

const images = [


    "image/hero_section/2.jpg",
    // "image/hero_section/3.jpg",
    "image/hero_section/5.jpg",
    "image/hero_section/1_1.jpg",
    "image/hero_section/8.jpg",
];

let currentImage = 0;

setInterval(() => {

    heroImage.style.opacity = "0";

    setTimeout(() => {
        currentImage = (currentImage + 1) % images.length;
        heroImage.src = images[currentImage];
        heroImage.style.opacity = "1";
    }, 500);

}, 3500);