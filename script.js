//Functions to send user to another page
function goHome() {
    window.location.href = "index.html";
}
function goContact() {
    window.location.href = "contact.html";
}
function goAboutUs() {
    window.location.href = "about_us.html";
}







//Functions for slideshow
const images = {
    bathroom: ["images/bathroom1.JPEG", "images/bathroom2.JPEG"],
    kitchen: ["images/outside.JPEG"],
    livingroom: ["images/attefallare.JPEG", "images/door.JPEG", "images/house.JPEG"]
};


let currentCategory = "bathroom";
let currentIndex = 0;

function showImages(category) {
    currentCategory = category;
    currentIndex = 0;
    updateSlideshow();
}

function updateSlideshow() {
    document.getElementById("slideshow-img").src = images[currentCategory][currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images[currentCategory].length) % images[currentCategory].length;
    updateSlideshow();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images[currentCategory].length;
    updateSlideshow();
}