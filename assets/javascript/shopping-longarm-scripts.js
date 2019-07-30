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

  function hideMachines() {
    $('#machine-one').hide();
    $('#machine-two').hide();
    $('#machine-three').hide();
  }

  function hideFrames(machine) {
    if (machine === 'sitdown') {
      $('#frame-one').hide();
    } else {
      $('#frame-two').hide();
      $('#frame-three').hide();
      $('#frame-four').hide();
    }
  }

  function showFrames(machine) {
    if (machine === 'sitdown') {
      $('#frame-one').css('display', 'flex');
    } else {
      $('#frame-two').css('display', 'flex');
      $('#frame-three').css('display', 'flex');
      $('#frame-four').css('display', 'flex');
    }
  }

  function showAutomation(machine) {
    if (machine === 'sitdown') {
      $('#automation-not-available').css('display', 'flex');
    } else {
      $('#automation-one').css('display', 'flex');
      $('#automation-two').css('display', 'flex');
      $('#automation-skip').css('display', 'flex');
    }
  }

  function hideAutomation(machine) {
    if (machine === 'sitdown') {
      $('#automation-not-available').hide();
    } else {
      $('#automation-one').hide();
      $('#automation-two').hide();
      $('#automation-skip').hide();
    }
  }

  function showAccessories(machine) {
    if (machine === 'sitdown') {
      $('#accessories-one').css('display', 'flex');
      $('#accessories-two').css('display', 'flex');
    } else {
      $('#accessories-three').css('display', 'flex');
      $('#accessories-four').css('display', 'flex');
      $('#accessories-five').css('display', 'flex');
      $('#accessories-skip').css('display', 'flex');
    }
  }

  function hideAccessories(machine) {
    if (machine === 'sitdown') {
      $('#accessories-one').hide();
      $('#accessories-two').hide();
    } else {
      $('#accessories-three').hide();
      $('#accessories-four').hide();
      $('#accessories-five').hide();
      $('#accessories-skip').hide();
    }
  }

  function showWarranty() {
    $('#warranty-one').css('display', 'flex');
    $('#warranty-two').css('display', 'flex');
  }

  function hideWarranty() {
    $('#warranty-one').hide();
    $('#warranty-two').hide();
  }

  // Sitdown
  $('#machine-one-button').click(function() {
    $('.cart-item-names').append('DYNA SITDOWN ');
    hideMachines()
    showFrames('sitdown')
    changeCircle('one', 'two')
  })
  $('#frame-one-button').click(function() {
    $('.cart-item-names').append('+ DYNA SITDOWN TABLE ');
    hideFrames('sitdown')
    showAutomation('sitdown')
    changeCircle('two', 'three')
  })
  $('#automation-not-available-button').click(function() {
    hideAutomation('sitdown')
    showAccessories('sitdown')
    changeCircle('three', 'four')
  })
  $('#accessories-one-button').click(function() {
    $('.cart-item-names').append('+ DYNA SITDOWN ESSENTIAL PACKAGE ');
    hideAccessories('sitdown')
    showWarranty()
    changeCircle('four', 'five')
  })
  $('#accessories-two-button').click(function() {
    $('.cart-item-names').append('+ DYNA SITDOWN CREATIVE PACKAGE ');
    hideAccessories('sitdown')
    showWarranty()
    changeCircle('four', 'five')
  })
  // Warranty GOTO:  Common All Machines


  // Dynasty A4
  $('#machine-two-button').click(function() {
    $('.cart-item-names').append('DYNASTY A4 ');
    hideMachines();
    showFrames();
    changeCircle('one', 'two')
  })
  // Dynasty A4 With Adjustable Handlebar and Light Package
  $('#machine-three-button').click(function() {
    $('.cart-item-names').append('DYNASTY A4 WITH ADJ HANDLEBAR & LIGHT PKG ');
    hideMachines();
    showFrames();
    changeCircle('one', 'two')
  })
  // Frames GOTO:  Common Dynasty A4 & Dynasty A4 With Adjustable Handlebar and Light Package
  // Automation GOTO:  Common Dynasty A4 & Dynasty A4 With Adjustable Handlebar and Light Package
  // Accessories GOTO:  Common Dynasty A4 & Dynasty A4 With Adjustable Handlebar and Light Package
  // Warranty GOTO:  Common All Machines


  // Common All Machines
  $('#warranty-one-button').click(function() {
    $('.cart-item-names').append('+ FREE MONEY BACK GUARANTEE & WARRANTY');
    hideWarranty()
    changeLastCircle('five')
  })
  $('#warranty-two-button').click(function() {
    $('.cart-item-names').append('+ WARRANTY UPGRADE');
    hideWarranty()
    changeLastCircle('five')
  })

  // Common Dynasty A4 & Dynasty A4 With Adjustable Handlebar and Light Package
  $('#frame-two-button').click(function() {
    $('.cart-item-names').append("+ GRACE Q-ZONE HOOP QUILTING FRAME ");
    hideFrames()
    showAutomation()
    changeCircle('two', 'three')
  })
  $('#frame-three-button').click(function() {
    $('.cart-item-names').append("+ PHOENIX FRAME 10' ");
    hideFrames()
    showAutomation()
    changeCircle('two', 'three')
  })
  $('#frame-four-button').click(function() {
    $('.cart-item-names').append("+ PHOENIX FRAME 12' ");
    hideFrames()
    showAutomation()
    changeCircle('two', 'three')
  })
  $('#automation-one-button').click(function() {
    $('.cart-item-names').append("+ QCT5 BEGINNINGS ");
    hideAutomation()
    showAccessories()
    changeCircle('three', 'four')
  })
  $('#automation-two-button').click(function() {
    $('.cart-item-names').append("+ QCT5 PRO ");
    hideAutomation()
    showAccessories()
    changeCircle('three', 'four')
  })
  $('#automation-skip-button').click(function() {
    hideAutomation()
    showAccessories()
    changeCircle('three', 'four')
  })
  $('#accessories-three-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY ESSENTIAL PACKAGE ');
    hideAccessories()
    showWarranty()
    changeCircle('four', 'five')
  })
  $('#accessories-four-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY CREATIVE PACKAGE ');
    hideAccessories()
    showWarranty()
    changeCircle('four', 'five')
  })
  $('#accessories-five-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY ULTIMATE PACKAGE ');
    hideAccessories()
    showWarranty()
    changeCircle('four', 'five')
  })
})