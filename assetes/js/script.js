var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


document.querySelector('.custom-next-button').addEventListener('click', () => {
  swiper.slideNext();
});

document.querySelector('.custom-prev-button').addEventListener('click', () => {
  swiper.slidePrev();
});



const menuList = document.querySelector(".nav-links")
function toggleMenu(){
    menuList.classList.toggle('show-navigation')
}