// Get the slider container/dots container and slides/dots
const sliderContainer = document.querySelector('.hero-banner-slider-container');
const dotsContainer = document.querySelector('.hero-slider-dots');
const slides = Array.from(sliderContainer.querySelectorAll('.hero-banner-slider'));
const dots = Array.from(dotsContainer.querySelectorAll('.dot'));

// Set the current slide/dot index to 0
let currentSlideIndex = 0;

// Add the "active" class to the first slide/dot
slides[currentSlideIndex].classList.add('hero-banner-slider--active');
dots[currentSlideIndex].classList.add('hero-slider-dots__active');

function showSlide(n) {
  // Remove the active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('hero-banner-slider--active'));
  dots.forEach(dot => dot.classList.remove('hero-slider-dots__active'));
  currentSlideIndex = n;
  // Add the active class to the specified slide and dot
  slides[n].classList.add('hero-banner-slider--active');
  dots[n].classList.add('hero-slider-dots__active');
  clearInterval(interval);
  interval = setInterval(changeSlide, 5000);
}
// Set the interval for the automatic slideshow/dots
let interval = setInterval(changeSlide, 5000);
function changeSlide(){
  // Remove the "active" class from the current slide/dot
  slides[currentSlideIndex].classList.remove('hero-banner-slider--active');
  dots[currentSlideIndex].classList.remove('hero-slider-dots__active');

  // Increment the current slide/dot index, or reset to 0 if we've reached the end
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Add the "active" class to the next slide
  slides[currentSlideIndex].classList.add('hero-banner-slider--active');
  dots[currentSlideIndex].classList.add('hero-slider-dots__active');
}

const smallImgs = document.querySelectorAll('.our-attorneys__img');
const fullSizeImg = document.getElementById('full-size-img');
let currentSmallImg = 0;


smallImgs.forEach(img => {
img.addEventListener('click', event => {
// change the src of the full-size img to the src of the clicked small img
imageStr = event.target.src;
for(let i = 0; i < 4; i++){
  smallImgs[i].classList.remove("our-attorneys__img--active");
  if(event.target.parentElement == smallImgs[i]){
    currentSmallImg = i;
  }
}
event.target.parentElement.classList.add("our-attorneys__img--active");
fullSizeImg.src = imageStr.substring(0, imageStr.length-4) + "_full.png";
clearInterval(interval2);
interval2 = setInterval(changeSlide2, 5000);
});
});

let interval2 = setInterval(changeSlide2, 5000);
function changeSlide2(){
  for(let i = 0; i < 4; i++){
    smallImgs[i].classList.remove("our-attorneys__img--active");
  }

  currentSmallImg = (currentSmallImg + 1) % smallImgs.length;
  smallImgs[currentSmallImg].classList.add("our-attorneys__img--active");

  smallImgs[currentSmallImg].parentElement.classList.add('our-attorneys__img--active');
  srcOfImg = smallImgs[currentSmallImg].firstChild.src;
  fullSizeImg.src = (srcOfImg.substring(0, srcOfImg.length-4)) + "_full.png";
}

// Testimonials slider

const tSliderContainer = document.querySelector('.tst-main-container');
const tSlides = Array.from(tSliderContainer.querySelectorAll('.tst-main'));

let tCurrentSlideIndex = 0;

tSlides[tCurrentSlideIndex].classList.add('tst-main--active');

let tInterval = setInterval(changeTSlide, 5000);

function changeTSlide(){
  tSlides[tCurrentSlideIndex].classList.remove('tst-main--active');

  tCurrentSlideIndex = (tCurrentSlideIndex + 1) % tSlides.length;
  
  tSlides[tCurrentSlideIndex].classList.add('tst-main--active');
}

document.getElementById("tst-move-forward").addEventListener("click",tMoveForward);
document.getElementById("tst-move-backwards").addEventListener("click",tMoveBackwards);

function tMoveForward(){
  tSlides[tCurrentSlideIndex].classList.remove('tst-main--active');
  tCurrentSlideIndex = (tCurrentSlideIndex + 1) % tSlides.length; 
  tSlides[tCurrentSlideIndex].classList.add('tst-main--active');
  clearInterval(tInterval);
  tInterval = setInterval(changeTSlide, 5000);
}

function tMoveBackwards(){
  tSlides[tCurrentSlideIndex].classList.remove('tst-main--active');
  if(tCurrentSlideIndex==0){
    tCurrentSlideIndex=tSlides.length-1;
  }
  else{
    tCurrentSlideIndex = (tCurrentSlideIndex - 1) % tSlides.length;
  }
  tSlides[tCurrentSlideIndex].classList.add('tst-main--active');
  clearInterval(tInterval);
  tInterval = setInterval(changeTSlide, 5000);
}

var phoneInput = document.querySelector('input[name="tel-no"]');
var form = document.querySelector(".consultation-form");

form.addEventListener('submit', function validatePhoneNumber(e) {
  
  // Regular expression to match a phone number
  var phoneRegex = /^[0-9]{3} [0-9]{2} [0-9]{3} [0-9]{3}/;

  // Check the value of the input against the regular expression
  if (phoneRegex.test(phoneInput.value)) {
    // The value is a valid phone number
  } else {
    // The value is not a valid phone number
    e.preventDefault();
    alert("Error! Phone number format is incorrect \nIt should be in this format: 383 44 000 000");
  }
});