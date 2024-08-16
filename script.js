document.querySelectorAll('.text').forEach(item => {
    item.addEventListener('click', event => {
        event.target.classList.toggle('clicked');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('formStatus').textContent = 'Thank you! Your message has been sent.';
        document.getElementById('formStatus').style.color = 'lightgreen';
        form.reset();
    })
    .catch(error => {
        document.getElementById('formStatus').textContent = 'Sorry, your message could not be sent.';
        document.getElementById('formStatus').style.color = 'red';
    });
});

const observerOptions = {
    root: null, // Use viewport as root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe each element that should have scroll animations
document.querySelectorAll('.head, .text, form').forEach(el => {
    observer.observe(el);
});