// Typing animation in the hero section.
const typed = new Typed("#element", {
    strings: ["Java Full Stack Developer", "Spring Boot Developer", "React Developer"],
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
    const isDarkTheme = document.body.classList.toggle("dark-theme");

    themeToggleBtn.innerHTML = isDarkTheme ? "&#9728;" : "&#127769;";
    themeToggleBtn.setAttribute("aria-label", isDarkTheme ? "Switch to light theme" : "Switch to dark theme");
});

AOS.init({
    duration: 1200,
    once: true,
});
