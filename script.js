// ======================
// HERO IMAGE SLIDER
// ======================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function nextSlide() {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(nextSlide, 1000); // Change to 2000, 3000 etc. if desired


// ======================
// GALLERY IMAGES
// ======================

const images = [

    "images/gallery1.jpeg",
    "images/gallery2.jpeg",
    "images/gallery3.jpeg",
    "images/gallery4.jpeg",
    "images/gallery5.jpeg",
    "images/gallery6.jpeg",
    "images/gallery7.jpeg",
    "images/gallery8.jpeg",
    "images/gallery9.jpeg",
    "images/gallery10.jpeg"

];

let currentImage = 0;


// ======================
// OPEN IMAGE
// ======================

function openImage(index) {

    currentImage = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src =
        images[currentImage];
}


// ======================
// CLOSE IMAGE
// ======================

function closeImage() {

    document.getElementById("lightbox").style.display = "none";
}


// ======================
// NEXT IMAGE
// ======================

function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("lightbox-img").src =
        images[currentImage];
}


// ======================
// PREVIOUS IMAGE
// ======================

function prevImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightbox-img").src =
        images[currentImage];
}


// ======================
// KEYBOARD CONTROLS
// ======================

document.addEventListener("keydown", function (e) {

    const lightbox = document.getElementById("lightbox");

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {
            nextImage();
        }

        if (e.key === "ArrowLeft") {
            prevImage();
        }

        if (e.key === "Escape") {
            closeImage();
        }
    }
});


// ======================
// MOBILE SWIPE SUPPORT
// ======================

const lightbox = document.getElementById("lightbox");

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart", function (e) {

    touchStartX = e.changedTouches[0].screenX;

});

lightbox.addEventListener("touchend", function (e) {

    touchEndX = e.changedTouches[0].screenX;

    handleSwipe();

});

function handleSwipe() {

    if (touchEndX < touchStartX - 50) {
        nextImage();
    }

    if (touchEndX > touchStartX + 50) {
        prevImage();
    }
}


// ======================
// CLOSE LIGHTBOX WHEN
// CLICKING OUTSIDE IMAGE
// ======================

lightbox.addEventListener("click", function (e) {

    if (e.target === lightbox) {
        closeImage();
    }

});