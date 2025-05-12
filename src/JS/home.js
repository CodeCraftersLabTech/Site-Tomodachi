let indexAtual = 0;
const slides = document.querySelectorAll('.slide');
const legendas = document.querySelectorAll('.legenda');
const totalSlides = slides.length;

function mostrarSlide(index) {
  // Atualiza slides
  slides.forEach(slide => slide.classList.remove('ativo'));
  slides[index].classList.add('ativo');

  // Atualiza legendas
  legendas.forEach(legenda => legenda.classList.remove('ativo'));
  setTimeout(() => {
    legendas[index].classList.add('ativo');
  }, 1000); 
}

function proximoSlide() {
  indexAtual = (indexAtual + 1) % totalSlides;
  mostrarSlide(indexAtual);
}

mostrarSlide(indexAtual); 
setInterval(proximoSlide, 4000); 
