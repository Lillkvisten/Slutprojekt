function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function() {
    var savedTheme = getCookie("theme");
    var elem = document.body;
    var button = document.querySelector(".e");

    if (savedTheme === "dark") {
        elem.classList.add("dark-mode");
        if (button) button.innerHTML = "Light Mode";
    }
};

function myFunction() {
    var elem = document.body;
    var button = document.querySelector(".e");
    
    elem.classList.toggle("dark-mode");
    var isDarkMode = elem.classList.contains("dark-mode");
    button.innerHTML = isDarkMode ? "Light Mode" : "Dark Mode";
    setCookie("theme", isDarkMode ? "dark" : "light", 30);
}

function changeFont(fontFamily) {
    document.body.style.fontFamily = fontFamily;
}