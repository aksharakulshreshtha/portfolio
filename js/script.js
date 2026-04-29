// NAV ACTIVE STATE
const navItems = document.querySelectorAll("nav ul li");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});


// SMOOTH SCROLL (optional future use)
document.querySelectorAll("nav ul li").forEach(item => {
    item.addEventListener("click", () => {
        console.log(item.innerText + " clicked");
    });
});


// BUTTON CLICK
document.querySelector("button").addEventListener("click", () => {
    alert("Download started (dummy)");
});
