document.addEventListener('DOMContentLoaded', () => {
    const accordionItem = document.querySelectorAll('.accordion-item');
    accordionItem.forEach(item => {
        const header = item.querySelector('.accordion-item__header');
        const headerHeight = header.offsetHeight;
        item.style.maxHeight = `${headerHeight}px`;

        item.addEventListener('click', () => {
            if (item.classList.contains('accordion-item--open')) return closeAccordion(item, headerHeight);
            openAccordion(item)
        });
    })
});

function openAccordion(item) {
    const itemHeight = item.scrollHeight
    item.style.maxHeight = `${itemHeight}px`
    item.classList.toggle('accordion-item--open');
}

function closeAccordion(item, headerHeight) {
    item.style.maxHeight = `${headerHeight}px`
    item.classList.toggle('accordion-item--open');
}
