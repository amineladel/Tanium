function logo(x) {
    x.classList.toggle("change");
    const nav = document.getElementById("nav");
    if (nav.style.visibility === "visible") {
        nav.style.visibility = "collapse";
        nav.style.opacity = "0";
    } else {
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
    }
}