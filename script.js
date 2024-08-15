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