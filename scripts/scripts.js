function myFunction() {
    document.body.classList.toggle("dark-mode");

    var button = document.getElementById("mybutton");
    var logo = document.getElementById("logo");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Desactivar modo oscuro";
        logo.src = logo.dataset.dark;
    } else {
        button.textContent = "Activar modo oscuro";
        logo.src = logo.dataset.light;
    }
}
