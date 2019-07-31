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

  function hideAutomation(machine) {
    $('#automation-one').hide();
    $('#automation-two').hide();
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

  function showFrames(machine) {
    if (machine === 'skip') {
      $('#frame-four').css('display', 'flex');
      $('#frame-five').css('display', 'flex');
      $('#frame-six').css('display', 'flex');
      $('#frame-skip').css('display', 'flex');
    } else {
      $('#frame-one').css('display', 'flex');
      $('#frame-two').css('display', 'flex');
      $('#frame-three').css('display', 'flex');
    }
  }

  function hideFrames(machine) {
    if (machine === 'skip') {
      $('#frame-four').hide();
      $('#frame-five').hide();
      $('#frame-six').hide();
      $('#frame-skip').hide();
    } else {
      $('#frame-one').hide();
      $('#frame-two').hide();
      $('#frame-three').hide();
    }
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

  // Automation Clicking
  $('#automation-one-button').click(function() {
    $('.cart-item-names').append("QCT5 BEGINNINGS ");
    hideAutomation()
    showMachines()
    changeCircle('one', 'two')
  })

  $('#automation-two-button').click(function() {
    $('.cart-item-names').append("QCT5 PRO ");
    hideAutomation()
    showMachines()
    changeCircle('one', 'two')
  })




  // A4 Machine Clicking
  $('#machine-one-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY A4 ');
    hideMachines()
    showFrames()
    changeCircle('two', 'three')
  })

  $('#machine-two-button').click(function() {
    $('.cart-item-names').append('+ DYNASTY A4 WITH ADJ HANDLEBAR & LIGHT PKG ');
    hideMachines()
    showFrames()
    changeCircle('two', 'three')
  })

  $('#frame-one-button').click(function() {
    $('.cart-item-names').append("+ GRACE Q-ZONE HOOP QUILTING FRAME ");
    hideFrames()
    showAccessories()
    changeCircle('three', 'four')
  })
  $('#frame-two-button').click(function() {
    $('.cart-item-names').append("+ PHOENIX FRAME 10' ");
    hideFrames()
    showAccessories()
    changeCircle('three', 'four')
  })
  $('#frame-three-button').click(function() {
    $('.cart-item-names').append("+ PHOENIX FRAME 12' ");
    hideFrames()
    showAccessories()
    changeCircle('three', 'four')
  })
  // ACCESSORIES GOTO: Common Clicking
  // WARRANTY GOTO: Common Clicking




  // Skip Machine & Skip Frame Clicking
  $('#machine-skip-button').click(function() {
    hideMachines()
    showFrames('skip')
    changeCircle('two', 'three')
  })

  $('#frame-four-button').click(function() {
    $('.cart-item-names').append("+ GRACE Q-ZONE HOOP QUILTING FRAME ");
    hideFrames('skip')
    showAccessories()
    changeCircle('three', 'four')
  })
  $('#frame-five-button').click(function() {
    $('.cart-item-names').append("+ PHOENIX FRAME 10' ");
    hideFrames('skip')
    showAccessories()
    changeCircle('three', 'four')
  })
  $('#frame-six-button').click(function() {
    $('.cart-item-names').append("+ PHOENIX FRAME 12' ");
    hideFrames('skip')
    showAccessories()
    changeCircle('three', 'four')
  })
  $('#frame-skip-button').click(function() {
    hideFrames('skip')
    showAccessories()
    changeCircle('three', 'four')
  })
  // ACCESSORIES GOTO: Common Clicking
  // WARRANTY GOTO: Common Clicking




  // Common Clicking
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