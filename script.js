document.addEventListener('DOMContentLoaded', function() {
    const imageWrappers = document.querySelectorAll('.image-wrapper');

    imageWrappers.forEach(imageWrapper => {
        imageWrapper.addEventListener('click', function() {
            imageWrappers.forEach(wrapper => {
                if (wrapper !== this) {
                    wrapper.classList.remove('expanded');
                }
            });
            this.classList.toggle('expanded');
        });
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));