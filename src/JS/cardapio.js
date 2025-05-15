function filtrarCardapio(categoria, animar = true) {
  const pratos = document.querySelectorAll('.cardPratos');

  pratos.forEach((prato) => {
    const cat = prato.getAttribute('data-categoria');
    prato.classList.remove('enter', 'show');

    if (cat !== categoria && animar) {
      prato.classList.add('exit');
    }
  });

  setTimeout(() => {
    pratos.forEach((prato) => {
      const cat = prato.getAttribute('data-categoria');

      if (cat !== categoria) {
        prato.classList.add('hidden');
        prato.classList.remove('exit');
      } else {
        prato.classList.remove('hidden');
        prato.classList.add('enter');
        void prato.offsetWidth;
        prato.classList.add('show');
      }
    });
  }, animar ? 200 : 0); 
}

window.addEventListener('DOMContentLoaded', () => {
  filtrarCardapio('menu', false);
});
