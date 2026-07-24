const menu = document.getElementById('jorttMenu');
const navLinks = document.getElementById('jorttNavLinks');

if (menu && navLinks) {
  menu.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    menu.textContent = open ? '✕' : '☰';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Menu openen');
      menu.textContent = '☰';
    });
  });
}

document.querySelectorAll('.jortt-faq__item button').forEach((button) => {
  button.addEventListener('click', () => {
    const answer = document.getElementById(button.getAttribute('aria-controls'));
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    answer.hidden = expanded;
  });
});
