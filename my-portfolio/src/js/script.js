document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const navLinks = document.querySelectorAll('.nav-links a');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menuLinks = document.querySelector('.menu-links');

    // Function to toggle the navigation menu
    window.toggleMenu = () => {
        hamburgerMenu.classList.toggle('active');
        menuLinks.classList.toggle('active');
    };

    // Function to change the color theme
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedColor = button.getAttribute('data-color');
            document.body.style.backgroundColor = selectedColor;
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});