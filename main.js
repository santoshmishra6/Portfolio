// Typing effect
var typing = new Typed(".typing", {
    strings: [
        "BackEnd Developer",
        "Java Lover",
        "PHP Developer",
        "API Builder",
        "Database Designer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Show content and conditionally display hover tip
window.onload = function () {
    document.querySelector('body').style.display = 'block';

    // Check screen size in inches
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var screenSizeInches = Math.sqrt(
        Math.pow(screenWidth / window.devicePixelRatio, 2) +
        Math.pow(screenHeight / window.devicePixelRatio, 2)
    ) / 96;

    // Show cursor tip only on screens 14 inches or larger
    if (screenSizeInches >= 14) {
        alert("Try to move your cursor over the image for a beautiful effect");
    }
};
