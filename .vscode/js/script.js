const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const icon = toggle.querySelector('i');

toggle.addEventListener('click', () => {
  nav.classList.toggle('active');

  // Alterna o ícone entre bx-menu e bx-x
  icon.classList.toggle('bx-menu');
  icon.classList.toggle('bx-x');
});

document.addEventListener("DOMContentLoaded", () => {
  const botoesLeiaMais = document.querySelectorAll(".btn-leia-mais");

  botoesLeiaMais.forEach((botao) => {
    botao.addEventListener("click", () => {
      const texto = botao.previousElementSibling;
      texto.classList.toggle("expandido");

      botao.textContent = texto.classList.contains("expandido") ? "Ler menos" : "Leia mais";
    });
  });
});