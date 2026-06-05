document.addEventListener("DOMContentLoaded", () => {
    const flyElements = document.querySelectorAll(".fly-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    flyElements.forEach((element) => {
        observer.observe(element);
    });
});