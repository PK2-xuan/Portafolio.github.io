// js para la animacion de las letras
window.addEventListener("DOMContentLoaded", function () {
  const loadingText = document.getElementById("loading-text");
  const letters = loadingText.textContent.split("");

  loadingText.textContent = ""; // Vaciamos el contenido original

  letters.forEach(function (letter, index) {
    const span = document.createElement("span");
    span.textContent = letter;
    span.classList.add("letters"); // Agregamos la clase "letters"
    span.style.animationDelay = index * 100 + "ms"; // Retraso de animación para cada letra
    span.style.animationDuration = "2s"; // Duración de la animación para cada letra
    loadingText.appendChild(span);
  });

  loadingText.style.opacity = 1; // Mostramos el texto animado
});


// js para la animacion de preloader 

window.addEventListener("load", function () {
  setTimeout(function () {
    var preloader = document.querySelector(".preloader");
    preloader.classList.add("hide");
    preloader.addEventListener("transitionend", function () {
      preloader.style.display = "none";


      var mainContent = document.querySelector(".main-content");
      mainContent.style.display = "block";

      setTimeout(function () {
        mainContent.classList.add("show");
      }, 10);
    });
  }, 2000);
});

// efectos de animado 
let animado = document.querySelectorAll(".animado");
let animado2 = document.querySelectorAll(".animado2");

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;

  for (var i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 500 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarArriba");
    }
  }

  for (var i = 0; i < animado2.length; i++) {
    let alturaAnimado = animado2[i].offsetTop;
    if (alturaAnimado - 500 < scrollTop) {
      animado2[i].style.opacity = 1;
      animado2[i].classList.add("mostrarArriba2");
    }
  }
}

window.addEventListener("scroll", mostrarScroll);
