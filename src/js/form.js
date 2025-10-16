document.addEventListener('DOMContentLoaded', () => {
    const fields = document.querySelectorAll('.gfield')

    fields.forEach(field => {
        const input = field.querySelector('input, textarea')
        if (!input) return;
        input?.addEventListener('input', (e) => {
            if (e.target.value !== "" && !field.classList.contains('not-empty')) {
                field.classList.toggle('not-empty')
            } else if (e.target.value === "" && field.classList.contains('not-empty')) {
                field.classList.toggle('not-empty')
            }
        })
    })
})