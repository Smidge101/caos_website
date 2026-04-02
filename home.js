let dynamicBackground = document.getElementById('dynamic-background');
let imageURLs = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
];
let currentIndex = 0;

function changeBackground() {
    currentIndex = (currentIndex + 1) % imageURLs.length;
    dynamicBackground.style.backgroundImage = `url('${imageURLs[currentIndex]}')`;
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

// Set initial background image
changeBackground();