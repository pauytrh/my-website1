document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 1,
    });
  
    const elements = document.querySelectorAll('.head, .text, form');
    elements.forEach((element) => {
      observer.observe(element);
    });
  });