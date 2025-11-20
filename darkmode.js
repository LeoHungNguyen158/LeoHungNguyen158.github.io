// Restore saved preference
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark");
}

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("dark-toggle");

    if (toggleBtn) {
        toggleBtn.onclick = function () {
            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        };
    }

    // Back-to-top button
    const topBtn = document.createElement("div");
    topBtn.id = "backToTop";
    topBtn.innerHTML = "↑";
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});
