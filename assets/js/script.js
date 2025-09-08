//Script para que funcione el carrusel del main
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: false,
    indicators: true
  });
});