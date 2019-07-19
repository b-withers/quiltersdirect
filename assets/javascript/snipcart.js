$(document).ready(function(){
  // Longarm Clicking
  $("#longarm-one-button").click(function(){
    $("#longarm-one-button").hide();
    $(".longarm-two").hide();
    $(".longarm-three").hide();
    $(".frame-one").show();
    $(".frame-two").show();
  });
  $("#longarm-two-button").click(function(){
    $("#longarm-two-button").hide();
    $(".longarm-one").hide();
    $(".longarm-three").hide();
    $(".frame-one").show();
    $(".frame-two").show();
  });
  $("#longarm-three-button").click(function(){
    $("#longarm-three-button").hide();
    $(".longarm-two").hide();
    $(".longarm-one").hide();
    $(".frame-one").show();
    $(".frame-two").show();
  });
  
// Frame Clicking
  $("#frame-one-button").click(function(){
    $("#frame-one-button").hide();
    $(".frame-two").hide();
    $(".automation-one").show();
    $(".automation-two").show();
  });
  $("#frame-two-button").click(function(){
    $("#frame-two-button").hide();
    $(".frame-one").hide();
    $(".automation-one").show();
    $(".automation-two").show();
  });

  // Automation Clicking
  $("#automation-one-button").click(function(){
    $("#automation-one-button").hide();
    $(".automation-two").hide();
    $(".accessories-package-one").show();
    $(".accessories-package-two").show();
  });
  $("#automation-two-button").click(function(){
    $("#automation-two-button").hide();
    $(".automation-one").hide();
    $(".accessories-package-one").show();
    $(".accessories-package-two").show();
  });

// Accessorie-Packages Clicking
  $("#accessories-package-one-button").click(function(){
    $("#accessories-package-one-button").hide();
    $(".accessories-package-two").hide();
    $(".checkout-button").show();
  });
  $("#accessories-package-two-button").click(function(){
    $("#accessories-package-two-button").hide();
    $(".accessories-package-one").hide();
    $(".checkout-button").show();
  });
});