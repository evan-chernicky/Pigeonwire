document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const menuToggle = header?.querySelector('.mobile-menu-toggle');
    const mobileMenu = header?.querySelector('.mobile-menu')
    let lastScrollY = window.scrollY;

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
    menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('mobile-menu__open'))
});

