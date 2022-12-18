const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
       breakpoints: {
        300: {
            slidesPerView: 'auto',
            spaceBetween: 16,
        },
        767: {
            enabled: false,
            onAny() {
                swiper.destroy(true, true);
            }
        },
    },
    observer: true,
});


let buttonShowMore = document.querySelector('.button__show-more');
let buttonHide = document.querySelector('.button__hide');
let brandsList = document.querySelector('.swiper');

buttonShowMore.addEventListener ('click', function () {
    buttonShowMore.classList.add('button__hidden');
    brandsList.classList.add ('swiper--full');
    buttonHide.classList.remove('button__hidden');
});

buttonHide.addEventListener ('click', function () {
    buttonHide.classList.add('button__hidden');
    brandsList.classList.remove ('swiper--full');
    buttonShowMore.classList.remove('button__hidden');
  });