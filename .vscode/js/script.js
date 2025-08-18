const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Alterna o ícone entre bx-menu e bx-x
  icon.classList.toggle('bx-menu');
  icon.classList.toggle('bx-x');
});
