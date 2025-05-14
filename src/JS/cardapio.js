function filtrarCardapio(categoria) {
  const pratos = document.querySelectorAll('.cardPratos');

  pratos.forEach((prato) => {
    const cat = prato.getAttribute('data-categoria');

    if (cat === categoria) {
      prato.classList.remove('oculto');
    } else {
      prato.classList.add('oculto');
    }
  });
}

// Aplica filtro "menu" ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  filtrarCardapio('menu');
});
