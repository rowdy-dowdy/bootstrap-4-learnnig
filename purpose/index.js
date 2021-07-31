$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });


  return false;
});

$('#navbar-main-collapse').on('show.bs.collapse', function () {
  $(this).parents('header').addClass('navbar-collapsed')
});

$('#navbar-main-collapse').on('hidden.bs.collapse', function () {
  $(this).removeClass('collapsing-out')
});


$('#navbar-main-collapse').on('hide.bs.collapse', function () {
  $(this).parents('header').removeClass('navbar-collapsed')
  $(this).addClass('collapsing-out');
});


// SWIPER
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 3
    },
  }
});
