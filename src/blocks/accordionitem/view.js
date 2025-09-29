document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    function setAccordionHeights() {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-item__header');
            const headerHeight = header.offsetHeight;

            // If the item is open, set full scrollHeight; otherwise, header height
            item.style.maxHeight = item.classList.contains('accordion-item--open') ? `${item.scrollHeight}px` : `${headerHeight}px`;
        });
    }

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-item__header');

        item.addEventListener('click', () => {
            if (item.classList.contains('accordion-item--open')) {
                const headerHeight = header.offsetHeight;
                item.style.maxHeight = `${headerHeight}px`;
                item.classList.remove('accordion-item--open');
            } else {
                item.style.maxHeight = `${item.scrollHeight}px`;
                item.classList.add('accordion-item--open');
            }
        });
    });

    // Initial setup
    setAccordionHeights();

    // Update heights on window resize
    window.addEventListener('resize', setAccordionHeights);
});