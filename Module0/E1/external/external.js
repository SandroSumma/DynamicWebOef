document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("greetingButton");
    button.addEventListener("click", function() {
        button.innerHTML = button.innerHTML === "Hallo!" ? "Tot ziens!" : "Hallo!";
    });
});