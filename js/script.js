const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  contactForm.reset();
  alert('Thanks for your message. This demo form does not send email yet — connect it to a service like Formspree or a backend to receive real messages.');
});

const MAX_PILL_FONT_SIZE = 14;
const MIN_PILL_FONT_SIZE = 8;

function fitPillText(pill) {
  const span = pill.querySelector('span');
  if (!span) return;

  const styles = getComputedStyle(pill);
  const paddingX = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
  const gap = parseFloat(styles.columnGap) || 0;
  const icon = pill.querySelector('svg');
  const iconWidth = icon ? icon.getBoundingClientRect().width : 0;
  const available = pill.clientWidth - paddingX - gap - iconWidth - 4;

  let fontSize = MAX_PILL_FONT_SIZE;
  pill.style.fontSize = `${fontSize}px`;

  while (span.scrollWidth > available && fontSize > MIN_PILL_FONT_SIZE) {
    fontSize -= 0.5;
    pill.style.fontSize = `${fontSize}px`;
  }
}

function fitAllPillText() {
  document.querySelectorAll('.social-pill').forEach(fitPillText);
}

const pillRows = document.querySelectorAll('.contact-info, .social-row');
if (pillRows.length) {
  fitAllPillText();
  window.addEventListener('load', fitAllPillText);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitAllPillText);
  }

  if ('ResizeObserver' in window) {
    const pillResizeObserver = new ResizeObserver(() => fitAllPillText());
    pillRows.forEach((row) => pillResizeObserver.observe(row));
  } else {
    window.addEventListener('resize', fitAllPillText);
  }
}
