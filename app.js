'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    this.textContent = className === "light-theme" ? "Dark" : "Light";

    console.log(`Current class name: ${className}`);
});

function openTab(evt, id) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    Array.from(tabcontent).forEach(el => el.style.display = "none");

    const tablinks = document.getElementsByClassName("tablinks");
    Array.from(tablinks).forEach(el => {
        el.className = el.className.replace(" active", "");
    });

    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  Array.from(slides).forEach(el => el.style.display = "none");
  Array.from(dots).forEach(el => {
    el.className = el.className.replace(" active", "");
  });

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

