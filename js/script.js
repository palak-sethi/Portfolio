const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();
  alert('Thanks for your message. This demo form does not send email yet — connect it to a service like Formspree or a backend to receive real messages.');
});
