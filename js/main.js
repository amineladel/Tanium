function logo(x) {
    x.classList.toggle("change");
    const nav = document.getElementById("nav");
    if (nav.style.visibility === "visible") {
        nav.style.visibility = "collapse";
        nav.style.display = "none";
        nav.style.opacity = "0";
    } else {
        nav.style.visibility = "visible";
        nav.style.display = "block";
        nav.style.opacity = "1";
    }
}