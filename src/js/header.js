import { gsap } from "gsap";
import {smoother} from './smoothscroll'

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menuToggle = header?.querySelector('.mobile-menu-toggle');
    const menuNavLinks = document.querySelectorAll(".mobile-menu .wp-block-navigation-item__content");
    let lastScrollY = window.scrollY;
    let isMobileMenuToggled = false;

    //Hides header when the user scrolls down from the hero, but makes it reappear if user starts to scroll back up
    function onScroll() {
        const currentY = window.scrollY;

        // Add 'scrolled' class for styling if scrolled more than 100px
        if (currentY > 100) {
            header.classList.add('scrolled');
        } else if (currentY < 100) {
            header.classList.remove('scrolled');
        }

        // Hide header on scroll down, show on scroll up
        if (currentY > lastScrollY && currentY > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        lastScrollY = currentY;
    }

    window.addEventListener('scroll', () => onScroll());

    //On mobile menu toggle click
    menuToggle.addEventListener('click', () => {
        isMobileMenuToggled = !isMobileMenuToggled
        header.classList.toggle('mobile-menu-isOpen')

        if (isMobileMenuToggled) {
            smoother.paused(true)
            gsap.from(menuNavLinks, {
                opacity: 0,          
                y: 20,               
                duration: 0.6,       
                stagger: 0.2,        
                ease: "power2.out"
            });
        } else {
            smoother.paused(false)
        }
    })
});
