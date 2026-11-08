let typed;
let ytPlayer;

function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player("ytPlayer", {
        events: {
            onReady: (e) => e.target.setVolume(25)
        }
    });
}

const ytScript = document.createElement("script");
ytScript.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(ytScript);


const typedStrings = {
    en: ["Full-Stack Developer", "React Enthusiast", "UI/UX Designer"],
    fr: ["Développeur Full Stack", "Passionné de React", "Designer UI/UX"]
};

function startTyped(lang) {
    if (typed) typed.destroy();
    typed = new Typed("#typed-text", {
        strings: typedStrings[lang] || typedStrings.en,
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        showCursor: true,
        cursorChar: "|"
    });

}


document.addEventListener("DOMContentLoaded", () => startTyped("en"));
document.addEventListener("languagechange", (e) => startTyped(e.detail.lang));

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
