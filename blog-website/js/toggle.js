const body = document.querySelector('body');
const input = document.getElementById('darkmode-toggle');

function toggleDark() {
    if (body.classList.contains('dm')) {
        body.classList.remove('dm');
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add('dm');
        localStorage.setItem("theme", "dm");
    };
}

// keep dark mode on if page reloaded on dark mode
window.addEventListener("load", (event) => {
    const color = localStorage.getItem("theme");
    // console.log("theme:", color);
    if (color === "dm") {
        body.classList.add('dm');
        input.checked = true;
    }
});
