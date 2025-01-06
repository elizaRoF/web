const secciones = document.querySelectorAll('.seccion');
const informacionOculta = document.querySelectorAll('.informacion-oculta');

secciones.forEach((seccion, index) => {
  seccion.addEventListener('click', () => {
    informacionOculta[index].classList.toggle('mostrar');
  });
});