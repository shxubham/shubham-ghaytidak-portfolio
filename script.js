// Typing animation in the hero section.
const typed = new Typed("#element", {
    strings: ["Web Developer", "Java Developer", "Freelancer"],
    loop: true,
    typeSpeed: 50,
});

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const backToTopBtn = document.getElementById("backToTopBtn");
const githubBtn = document.getElementById("githubBtn");

// Mobile navigation.
mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Scroll and external actions.
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

githubBtn.addEventListener("click", () => {
    window.open("https://github.com/shxubham", "_blank");
});

// Theme and page animations.
themeToggleBtn.addEventListener("click", () => {
    const isLightTheme = document.body.classList.toggle("light-theme");

    themeToggleBtn.innerHTML = isLightTheme ? "&#9728;" : "&#127769;";
    themeToggleBtn.setAttribute("aria-label", isLightTheme ? "Switch to dark theme" : "Switch to light theme");
});

AOS.init({
    duration: 1200,
    once: true,
});
