document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling function
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for navbar height
                behavior: "smooth"
            });
        }
    }

    // Event listeners for navbar links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Get section ID
            
            // Handle scrolling to home or other sections
            targetId === "home" ? 
                window.scrollTo({ top: 0, behavior: "smooth" }) : 
                smoothScroll(targetId);
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute("href").substring(1));
            document.getElementById("nav-links").classList.remove("show");
        });
    });
});

const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});