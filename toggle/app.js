const body = document.querySelector('body');
const input = document.getElementById('darkmode-toggle');

function toggleDark() {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        localStorage.setItem("theme", "light");
    } else {
        body.classList.add('dark');
        localStorage.setItem("theme", "dark");
    };
}

// keep dark mode on if page reloaded on dark mode
window.addEventListener("load", (event) => {
    const color = localStorage.getItem("theme");
    console.log("theme:", color);
    if (color === "dark") {
        body.classList.add('dark');
        input.checked = true;
    }
});
