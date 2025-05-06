// alert("please try to take your cursur in images");

var typing = new Typed(".typing", {

    strings: ["BackEnd Developer",
        "Java Lover",
        "PHP Developer",
        "API Builder",
        "Database Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

function checkScreenSize() {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;// Typing effect
var typing = new Typed(".typing", {
    strings: ["FrontEnd Developer", "Web Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Function to show body content on any screen size
function showContent() {
    document.querySelector('body').style.display = 'block';

    // Optional: cursor hint for image hover effect
    alert("Try to move your cursor over the image for a beautiful effect");
}

// Call on page load
window.onload = showContent;

    var count = 0;

    // Calculate the screen size in inches
    var screenSizeInches = Math.sqrt(Math.pow(screenWidth / window.devicePixelRatio, 2) + Math.pow(screenHeight / window.devicePixelRatio, 2)) / 96;

    // Check if screen size is smaller than 14 inches
    if (screenSizeInches < 14) {
        alert("Please open this website on above 14-inch screen (laptop/computer) to view content. Thanks for Visiting :) ©Rohit ");
    } else {
        // If the screen size is appropriate, display the content
        document.querySelector('body').style.display = 'block';
    }

    // Check for the second condition
    if (screenSizeInches >= 14) {
        if (count == 0) {
            alert("Try to move your cursor in the images for a beautiful effect");
            count++;
        }


    }
}

// Call the function when the page loads
window.onload = checkScreenSize;
