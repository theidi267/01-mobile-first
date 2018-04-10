'use strict';
$(document).ready(() => {

  $('.icon-menu').on('mouseenter', () => {
    $('.main-nav ul').addClass('hamburger');
    $('.main-nav ul li').css('display', 'block');
  })

  $('.icon-menu').on('mouseleave', () => {
    $('.main-nav ul').removeClass('hamburger');
    $('.main-nav ul li').css('display', 'inline-block');

  })

});