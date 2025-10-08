document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    function onScroll(e) {
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

    window.addEventListener('scroll', (e) => onScroll(e));
});