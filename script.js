const imgs = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelector(".ctr-prev");
const next = document.querySelector(".ctr-next");

var n = 0;

function change_slide() {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

change_slide();

prev.addEventListener("click", function(e) {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  change_slide();
});

next.addEventListener("click", function(e) {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  change_slide();
});

// Product Carousel
const productScroll = document.querySelector(".product-scroll");
const btnLeft = document.querySelector(".carousel-btn-left");
const btnRight = document.querySelector(".carousel-btn-right");

btnLeft.addEventListener("click", function() {
  productScroll.scrollBy({
    left: -280,
    behavior: "smooth"
  });
});

btnRight.addEventListener("click", function() {
  productScroll.scrollBy({
    left: 280,
    behavior: "smooth"
  });
});

// Multiple Carousels Handler
const carouselButtons = document.querySelectorAll('[data-carousel]');

carouselButtons.forEach(button => {
  button.addEventListener('click', function() {
    const carouselId = this.getAttribute('data-carousel');
    const scrollContainer = document.querySelector(`[data-scroll="${carouselId}"]`);
    const direction = this.classList.contains('carousel-btn-left') ? -280 : 280;
    
    scrollContainer.scrollBy({
      left: direction,
      behavior: 'smooth'
    });
  });
});

// Smooth scroll to top
document.querySelector('.footer-top a').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});