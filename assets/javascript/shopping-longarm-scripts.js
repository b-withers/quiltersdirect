$(document).ready(function() {
  $(".circle-one").css("background-color", "var(--pinkOne)");
  $(".number-one").css("color", "var(--purpleThree)");
  $(".circle-text-one").css("color", "var(--pinkOne)");

  function changeCircle(x, y) {
    $(`.number-${x}`).hide();
    $(`.check-${x}`).show();
    $(`.circle-text-${x}`).css("color", "var(--purpleThree)");
    $(`.circle-${x}`).css("background-color", "var(--purpleTwo)");
    $(`.number-${y}`).css("color", "var(--purpleThree)");
    $(`.circle-${y}`).css("background-color", "var(--pinkOne)");
    $(`.circle-text-${y}`).css("color", "var(--pinkOne)");
  }

  function changeLastCircle(x) {
    $(`.number-${x}`).hide();
    $(`.check-${x}`).show();
    $(`.circle-text-${x}`).css("color", "var(--purpleThree)");
    $(`.circle-${x}`).css("background-color", "var(--purpleTwo)");
  }

  // Sitdown
  $('#machine-one-button').click(function() {
    $('.cart-item-names').append('DYNA SITDOWN ');
    $('#machine-one').hide();
    $('#machine-two').hide();
    $('#machine-three').hide();
    $('#frame-one').css('display', 'flex');
    changeCircle('one', 'two')
  })
  $('#frame-one-button').click(function() {
    $('.cart-item-names').append('+ DYNA SITDOWN TABLE ');
    $('#frame-one').hide();
    $('#automation-not-available').css('display', 'flex');
    changeCircle('two', 'three')
  })
  $('#automation-not-available-button').click(function() {
    $('#automation-not-available').hide();
    $('#accessories-one').css('display', 'flex');
    $('#accessories-two').css('display', 'flex');
    changeCircle('three', 'four')
  })
  $('#accessories-one-button').click(function() {
    $('.cart-item-names').append('+ DYNA SITDOWN ESSENTIAL PACKAGE ');
    $('#accessories-one').hide();
    $('#accessories-two').hide();
    $('#warranty-one').css('display', 'flex');
    $('#warranty-two').css('display', 'flex');
    changeCircle('four', 'five')
  })
  $('#accessories-two-button').click(function() {
    $('.cart-item-names').append('+ DYNA SITDOWN CREATIVE PACKAGE ');
    $('#accessories-two').hide();
    $('#accessories-one').hide();
    $('#warranty-one').css('display', 'flex');
    $('#warranty-two').css('display', 'flex');
    changeCircle('four', 'five')
  })
  $('#warranty-one-button').click(function() {
    $('.cart-item-names').append('+ FREE MONEY BACK GUARANTEE & WARRANTY ');
    $('#warranty-one').hide();
    $('#warranty-two').hide();
    changeLastCircle('five')
  })
  $('#warranty-two-button').click(function() {
    $('.cart-item-names').append('+ WARRANTY UPGRADE ');
    $('#warranty-two').hide();
    $('#warranty-one').hide();
    changeLastCircle('five')
  })
})