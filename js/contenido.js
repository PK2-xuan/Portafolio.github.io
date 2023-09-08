window.addEventListener('scroll', function() {
    var contenidoAnterior = document.getElementById('contenidoPortafolio');
    var containerLeft = document.querySelector('.container-left');
  
    var contenidoAnteriorOffset = contenidoAnterior.offsetTop + contenidoAnterior.offsetHeight;
    var scrollPosition = window.scrollY + window.innerHeight;
  
    if (scrollPosition >= contenidoAnteriorOffset && scrollPosition >= 1400) {
      containerLeft.classList.add('active');
    } else {
      containerLeft.classList.remove('active');
    }
  });
  
//  pagination  
function goToComponent(componentId) {
    const component = document.getElementById(componentId);
    if (component) {
      window.scrollTo({
        top: component.offsetTop,
        behavior: 'smooth'
      });
    }
  }

//   animacion para las barras del contenedor del lado izquierdo , ademas de los efectos en automatico 

// Obtener referencias a los elementos relevantes
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

// Función para agregar la clase activa al elemento específico
function activateBar(element) {
  element.classList.add('active');
}

// Función para quitar la clase activa del elemento específico
function deactivateBar(element) {
  element.classList.remove('active');
}

// Función para manejar el evento de scroll
function handleScroll() {
  const scrollPosition = window.scrollY;
  const windowWidth = window.innerWidth;

  // Verificar si la posición de scroll alcanza el umbral deseado para cada caso
  switch (true) {
    case scrollPosition >= 700 && scrollPosition <= 1500 && windowWidth >= 700:
      activateBar(bar1);
      deactivateBar(bar2);
      deactivateBar(bar3);
      break;
    case scrollPosition > 1500 && scrollPosition <= 2000 && windowWidth >= 700:
      deactivateBar(bar1);
      activateBar(bar2);
      deactivateBar(bar3);
      break;
    case scrollPosition > 2000 && scrollPosition <= 2500 && windowWidth >= 700:
      deactivateBar(bar1);
      deactivateBar(bar2);
      activateBar(bar3);
      break;
    default:
      deactivateBar(bar1);
      deactivateBar(bar2);
      deactivateBar(bar3);
      break;
  }
}

// Agregar un listener al evento de scroll
window.addEventListener('scroll', handleScroll);

// js para ahcer que las imagenes cambien cuando hay una opacidad 
const images = document.querySelectorAll('.image');
let currentIndex = 0;

setInterval(() => {
  const currentImage = images[currentIndex];
  const nextIndex = (currentIndex + 1) % images.length;
  const nextImage = images[nextIndex];

  currentImage.classList.remove('active');
  nextImage.classList.add('active');

  currentIndex = nextIndex;
}, 3000);

// js para ahcer que las imagenes cambien cuando hay una opacidad 
const images2 = document.querySelectorAll('.image2');
let currentIndex2 = 0;

setInterval(() => {
  const currentImage2 = images2[currentIndex2];
  const nextIndex2 = (currentIndex2 + 1) % images2.length;
  const nextImage2 = images2[nextIndex2];

  currentImage2.classList.remove('active2');
  nextImage2.classList.add('active2');

  currentIndex2 = nextIndex2;
}, 3000);