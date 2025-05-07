// Typing effect (only one block)
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

// Show content and optionally show hover tip
window.onload = function () {
    document.querySelector('body').style.display = 'block';

    // Optional tip only for larger screens
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;
    var screenSizeInches = Math.sqrt(
        Math.pow(screenWidth / window.devicePixelRatio, 2) +
        Math.pow(screenHeight / window.devicePixelRatio, 2)
    ) / 96;

    if (screenSizeInches >= 14) {
        alert("Try to move your cursor over the image for a beautiful effect");
    }
};
    window.onload = function() {
        alert("If you want to see the image clearly, click the image.");
      };