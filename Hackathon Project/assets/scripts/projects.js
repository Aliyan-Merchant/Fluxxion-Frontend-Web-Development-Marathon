document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;
    const logo = document.getElementById("logo");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        logo.src = "../assets/images/logo-dark.jpg";
        toggleButton.textContent = "☀️ Light Mode";
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        const isDark = body.classList.contains("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        logo.src = isDark ? "../assets/images/logo-dark.jpg" : "../assets/images/logo-light.jpg";
        toggleButton.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
});