// Expande/recolhe texto dos cards de serviços de forma profissional
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.btn-leia-mais').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const card = btn.closest('.servicos-box');
      const texto = card.querySelector('.texto-leia-mais');
      texto.classList.toggle('expandido');
      btn.textContent = texto.classList.contains('expandido') ? 'Ler menos' : 'Leia mais';
    });
  });
});
