document.querySelectorAll('.text').forEach(item => {
    item.addEventListener('click', event => {
        event.target.classList.toggle('clicked');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('formStatus').textContent = data;
        form.reset();
    })
    .catch(error => {
        document.getElementById('formStatus').textContent = 'There was an error sending your message.';
    });
});