/*
  This file contains the interactivity for the landing page.
*/

// Wait for the entire HTML document to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Get the necessary elements from the DOM
    const header = document.getElementById('main-header');
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // This function adds a 'scrolled' class to the header when the user scrolls down more than 50 pxxxxxx.
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // This function adds an 'active' class to the navigation links when the hamburger menu is clicked, making it visible.
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    //
    // This makes the page scroll smoothlyy when a navv link is clicked.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // If the mobile menu is open, close it when a link is clicked
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                 targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});