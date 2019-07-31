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

  function hideFrames() {
    $('#frame-one').hide();
    $('#frame-two').hide();
    $('#frame-three').hide();
  }

  function showMachines() {
    $('#machine-one').css('display', 'flex');
    $('#machine-two').css('display', 'flex');
    $('#machine-skip').css('display', 'flex');
  }

  function hideMachines() {
    $('#machine-one').hide();
    $('#machine-two').hide();
    $('#machine-skip').hide();
  }

  function showAutomation() {
    $('#automation-one').css('display', 'flex');
    $('#automation-two').css('display', 'flex');
    $('#automation-skip').css('display', 'flex');
  }

  function hideAutomation() {
    $('#automation-one').hide();
    $('#automation-two').hide();
    $('#automation-skip').hide();
  }

  function showAccessories() {
    $('#accessories-one').css('display', 'flex');
    $('#accessories-two').css('display', 'flex');
    $('#accessories-three').css('display', 'flex');
    $('#accessories-skip').css('display', 'flex');
  }

  function hideAccessories() {
    $('#accessories-one').hide();
    $('#accessories-two').hide();
    $('#accessories-three').hide();
    $('#accessories-skip').hide();
  }

  function showWarranty() {
    $('#warranty-one').css('display', 'flex');
    $('#warranty-two').css('display', 'flex');
  }

  function hideWarranty() {
    $('#warranty-one').hide();
    $('#warranty-two').hide();
  }


  // FRAME CLICKING
  $('#frame-one-button').click(function() {
    $('.cart-item-names').append("GRACE Q-ZONE HOOP QUILTING FRAME ");
    hideFrames()
    showMachines()
    changeCircle('one', 'two')
  })
  $('#frame-two-button').click(function() {
    $('.cart-item-names').append("PHOENIX FRAME 10' ");
    hideFrames()
    showMachines()
    changeCircle('one', 'two')
  })
  $('#frame-three-button').click(function() {
    $('.cart-item-names').append("PHOENIX FRAME 12' ");
    hideFrames()
    showMachines()
    changeCircle('one', 'two')
  })


  // MACHINE CLICKING
  $('#machine-one-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY A4 ');
    hideMachines()
    showAutomation()
    changeCircle('two', 'three')
  })

  $('#machine-two-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY A4 WITH ADJ HANDLEBAR & LIGHT PKG ');
    hideMachines()
    showAutomation()
    changeCircle('two', 'three')
  })

  $('#machine-skip-button').click(function() {
    hideMachines()
    showAutomation()
    changeCircle('two', 'three')
  })


  // AUTOMATION CLICKING
  $('#automation-one-button').click(function() {
    $('.cart-item-names').append('+ QCT5 BEGINNINGS ');
    hideAutomation()
    showAccessories()
    changeCircle('three', 'four')
  })

  $('#automation-two-button').click(function() {
    $('.cart-item-names').append('+ QCT5 PRO ');
    hideAutomation()
    showAccessories()
    changeCircle('three', 'four')
  })

  $('#automation-skip-button').click(function() {
    hideAutomation()
    showAccessories()
    changeCircle('three', 'four')
  })


  // ACCESSORIES CLICKING
  $('#accessories-one-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY ESSENTIAL PACKAGE ');
    hideAccessories()
    showWarranty()
    changeCircle('four', 'five')
  })

  $('#accessories-two-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY CREATIVE PACKAGE ');
    hideAccessories()
    showWarranty()
    changeCircle('four', 'five')
  })

  $('#accessories-three-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY ULTIMATE PACKAGE ');
    hideAccessories()
    showWarranty()
    changeCircle('four', 'five')
  })

  $('#accessories-skip-button').click(function() {
    hideAccessories()
    showWarranty()
    changeCircle('four', 'five')
  })

  
  // WARRANTY CLICKING
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
})