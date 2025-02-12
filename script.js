document.addEventListener("DOMContentLoaded", function () {
    // Fade-in animation
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
});

// Mobile menu toggle
function toggleMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

// Search filter
document.querySelector(".srch").addEventListener("keyup", function () {
    let query = this.value.toLowerCase();
    document.querySelectorAll("ul li a").forEach((link) => {
        link.style.display = link.textContent.toLowerCase().includes(query) ? "block" : "none";
    });
});

// Form validation
function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!email || !password) {
        alert("Please fill in both fields.");
    } else {
        alert("Login Successful!");
    }
}

// Back to top button
window.onscroll = function () {
    document.getElementById("topBtn").style.display = window.scrollY > 200 ? "block" : "none";
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
