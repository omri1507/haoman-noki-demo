const vid = document.getElementById('vid');
const btn = document.querySelector('.play-btn');
const player = document.querySelector('.custom-player');

function showPlayOverlay() {
    btn.style.opacity = 1;
    btn.style.pointerEvents = 'auto';
}

function hidePlayOverlay() {
    btn.style.opacity = 0;
    btn.style.pointerEvents = 'none';
}

function startVideo() {
    if (!vid.paused) return; // already playing
    hidePlayOverlay();
    vid.play(); // just play – controls will be added on "play" event
}

// click on the button
btn.addEventListener('click', (e) => {
    e.stopPropagation(); // don't double-trigger via player
    startVideo();
});

// click anywhere on the player BEFORE controls are shown
player.addEventListener('click', () => {
    if (!vid.hasAttribute('controls')) {
        startVideo();
    }
});

// when video starts playing → now show controls
vid.addEventListener('play', () => {
    vid.setAttribute('controls', 'controls');
});

// when user pauses → hide controls + show play overlay
vid.addEventListener('pause', () => {
    vid.removeAttribute('controls');
    showPlayOverlay();
});

// when video ends → same as pause
vid.addEventListener('ended', () => {
    vid.removeAttribute('controls');
    showPlayOverlay();
});
const swiper = new Swiper('.projects-swiper', {
  loop: true,
  speed: 600,
  centeredSlides: true,
  grabCursor: true,

  slidesPerView: 3.4,
  spaceBetween: 60,

  // help loop behave nicely with many clones
  loopedSlides: 5,        // number of real slides
  loopAdditionalSlides: 5,

  initialSlide: 1,         // so we have left + right neighbors from the start

  navigation: {
    nextEl: '.projects-swiper .swiper-button-next',
    prevEl: '.projects-swiper .swiper-button-prev'
  },

  breakpoints: {
    0: {
      slidesPerView: 2.2,
      spaceBetween: 16
    },
    800: {
      slidesPerView: 3.4,
      spaceBetween: 60
    }
  }
});

$(function () {
  const $lightbox = $('#lightbox');
  const $lightboxImg = $('#lightbox img');

  $('.projects-swiper').on('click', '.swiper-slide img', function () {
    const src = $(this).attr('src');
    $lightboxImg.attr('src', src);
    $lightbox.addClass('is-active');
  });

  $('.lightbox-close').on('click', function () {
    $lightbox.removeClass('is-active');
    $lightboxImg.attr('src', '');
  });

  $lightbox.on('click', function (e) {
    if (e.target === this) {
      $lightbox.removeClass('is-active');
      $lightboxImg.attr('src', '');
    }
  });

  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      if ($lightbox.hasClass('is-active')) {
        $lightbox.removeClass('is-active');
        $lightboxImg.attr('src', '');
      }
    }
  });
    
});
jQuery(function ($) {
  $(".cta").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $(".contact-section").offset().top - 40,
      },
      700 // duration in ms
    );
  });
});




// optional: light refresh after everything loads
window.addEventListener('load', () => {
  swiper.update();
});

