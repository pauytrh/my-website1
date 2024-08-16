document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.head, .text, form');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Add click event to text elements
    const textElements = document.querySelectorAll('.text');
    textElements.forEach(text => {
        text.addEventListener('click', function() {
            text.classList.toggle('clicked');
        });
    });
});