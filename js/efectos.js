// js que permite cambiar de color al navbar cuando hacemos scroll a la pantalla 
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
  
    if (scroll > 100) {
      $('.navbar').addClass('navbar-scrolled');
    } else {
      $('.navbar').removeClass('navbar-scrolled');
    }
  });

// js para la animacion de las letras , salen al estilo de tipografia 
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const span3 = document.getElementById('span3');
const span4 = document.getElementById('span4');

function showSecondSpan() {
  span2.style.display = 'block';
}

function showThirdSpan() {
  span3.style.display = 'block';
}

function showFourSpan() {
  span4.style.display = 'block';
}

function animateFirstSpan() {
  span1.addEventListener('animationend', function() {
    span1.style.borderRightColor = 'transparent';
    showSecondSpan();
  }, { once: true });
}

function animateThirdSpan() {
  span2.addEventListener('animationend', function() {
    span2.style.borderRightColor = 'transparent';
    showThirdSpan();
  }, { once: true });
}

function animateFourthSpan() {
  span3.addEventListener('animationend', function() {
    span3.style.borderRightColor = 'transparent';
    showFourSpan();
  }, { once: true });
}

function applyAnimations() {
  setTimeout(animateFirstSpan, 1500);
  setTimeout(animateThirdSpan, 2000);
  setTimeout(animateFourthSpan, 3000);
}

if (window.innerWidth > 480) {
  span2.style.display = 'none';
  span3.style.display = 'none';
  span4.style.display = 'none';
  applyAnimations();
}
