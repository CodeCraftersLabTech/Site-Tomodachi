function filtrarCardapio(categoria, animar = true) {
  const pratos = document.querySelectorAll('.cardPratos');

  pratos.forEach((prato) => {
    const cat = prato.getAttribute('data-categoria');
    prato.classList.remove('enter', 'show');

    if (cat !== categoria && animar) {
      prato.classList.add('exit');
    }
  });

  const botoes = document.querySelectorAll('.navcardapio button');
  botoes.forEach(btn => {
    if (btn.getAttribute('data-categoria') === categoria) {
      btn.classList.add('ativo');
    } else {
      btn.classList.remove('ativo');
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
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navcardapio');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function() {
      nav.classList.toggle('open');
    });
  }
});