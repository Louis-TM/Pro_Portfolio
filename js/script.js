document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typed-text", {
        strings: ["Frontend Developer", "React Enthusiast", "UI Designer"],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        showCursor: true,
        cursorChar: "|"
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        if (isDark) {
            themeIcon.classList.replace("bi-moon-fill", "bi-sun-fill");
        } else {
            themeIcon.classList.replace("bi-sun-fill", "bi-moon-fill");
        }
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});

window.addEventListener("scroll", function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero-section");
    hero.style.backgroundPositionY = -(scrolled * 0.5) + "px";
});

