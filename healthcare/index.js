document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".button-link");
    buttons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const url = this.getAttribute("href");
            window.location.href = url;
        });
    });
});

document.getElementById('menu-toggle').addEventListener('click', function () {
    var nav = document.getElementById('primary_nav');
    nav.classList.toggle('active');
});