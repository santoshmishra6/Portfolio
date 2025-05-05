
document.addEventListener("DOMContentLoaded", function () {
    // Typed.js effect
    const typed = new Typed(".typing", {
      strings: ["Backend Developer" , "Problem Solver", "Tech Enthusiast"],
      typeSpeed: 150,
      backSpeed: 50,
      loop: true
    });
  
    // Fade in body when loaded (optional)
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s";
    requestAnimationFrame(() => {
      document.body.style.opacity = 1;
    });
  });
  
