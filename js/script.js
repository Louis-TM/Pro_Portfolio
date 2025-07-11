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

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggleSwitch");
    const body = document.body;

    const isDark = localStorage.getItem("theme") === "dark";
    body.classList.toggle("dark-mode", isDark);
    toggle.checked = isDark;

    toggle.addEventListener("change", () => {
        const enabled = toggle.checked;
        body.classList.toggle("dark-mode", enabled);
        localStorage.setItem("theme", enabled ? "dark" : "light");
    });
});


window.addEventListener("scroll", function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero-section");
    hero.style.backgroundPositionY = -(scrolled * 0.5) + "px";
});

