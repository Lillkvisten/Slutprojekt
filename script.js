function myFunction() {
    var elem = document.body;
    elem.classList.toggle("dark-mode");
    var button = document.querySelector(".e");
    button.innerHTML = elem.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
}