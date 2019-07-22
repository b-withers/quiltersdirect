$(document).ready(function(){
  $(".diamond-one").css("background-color", "#FFFF99");
  $(".rectangle-one").css("background-color", "#FFFF99");
  $(".number-one").css("color", "#624e78");

  // Longarm Clicking
  $("#longarm-one-button").click(function(){
    $("#longarm-one-button").hide();
    $(".longarm-two").hide();
    $(".longarm-three").hide();
    $(".number-one").hide();
    $(".frame-one").show();
    $(".frame-two").show();
    $(".check-one").show();
    $(".diamond-one").css("background-color", "#624E78");
    $(".rectangle-one").css("background-color", "#e6e6fa");
    $(".number-one").css("color", "white");
    $(".diamond-two").css("background-color", "#FFFF99");
    $(".rectangle-two").css("background-color", "#FFFF99");
    $(".number-two").css("color", "#624e78");
  });
  $("#longarm-two-button").click(function(){
    $("#longarm-two-button").hide();
    $(".longarm-one").hide();
    $(".longarm-three").hide();
    $(".number-one").hide();
    $(".frame-one").show();
    $(".frame-two").show();
    $(".check-one").show();
    $(".diamond-one").css("background-color", "#624E78");
    $(".rectangle-one").css("background-color", "#e6e6fa");
    $(".number-one").css("color", "white");
    $(".diamond-two").css("background-color", "#FFFF99");
    $(".rectangle-two").css("background-color", "#FFFF99");
    $(".number-two").css("color", "#624e78");
  });
  $("#longarm-three-button").click(function(){
    $("#longarm-three-button").hide();
    $(".longarm-two").hide();
    $(".longarm-one").hide();
    $(".number-one").hide();
    $(".frame-one").show();
    $(".frame-two").show();
    $(".check-one").show();
    $(".diamond-one").css("background-color", "#624E78");
    $(".rectangle-one").css("background-color", "#e6e6fa");
    $(".number-one").css("color", "white");
    $(".diamond-two").css("background-color", "#FFFF99");
    $(".rectangle-two").css("background-color", "#FFFF99");
    $(".number-two").css("color", "#624e78");
  });
  
// Frame Clicking
  $("#frame-one-button").click(function(){
    $("#frame-one-button").hide();
    $(".frame-two").hide();
    $(".number-two").hide();
    $(".automation-one").show();
    $(".automation-two").show();
    $(".check-two").show();
    $(".diamond-two").css("background-color", "#624E78");
    $(".rectangle-two").css("background-color", "#e6e6fa");
    $(".number-two").css("color", "white");
    $(".diamond-three").css("background-color", "#FFFF99");
    $(".rectangle-three").css("background-color", "#FFFF99");
    $(".number-three").css("color", "#624e78");
  });
  $("#frame-two-button").click(function(){
    $("#frame-two-button").hide();
    $(".frame-one").hide();
    $(".number-two").hide();
    $(".automation-one").show();
    $(".automation-two").show();
    $(".check-two").show();
    $(".diamond-two").css("background-color", "#624E78");
    $(".rectangle-two").css("background-color", "#e6e6fa");
    $(".number-two").css("color", "white");
    $(".diamond-three").css("background-color", "#FFFF99");
    $(".rectangle-three").css("background-color", "#FFFF99");
    $(".number-three").css("color", "#624e78");
  });

  // Automation Clicking
  $("#automation-one-button").click(function(){
    $("#automation-one-button").hide();
    $(".automation-two").hide();
    $(".number-three").hide();
    $(".accessories-package-one").show();
    $(".accessories-package-two").show();
    $(".check-three").show();
    $(".diamond-three").css("background-color", "#624E78");
    $(".rectangle-three").css("background-color", "#e6e6fa");
    $(".number-three").css("color", "white");
    $(".diamond-four").css("background-color", "#FFFF99");
    $(".rectangle-four").css("background-color", "#FFFF99");
    $(".number-four").css("color", "#624e78");
  });
  $("#automation-two-button").click(function(){
    $("#automation-two-button").hide();
    $(".automation-one").hide();
    $(".number-three").hide();
    $(".accessories-package-one").show();
    $(".accessories-package-two").show();
    $(".check-three").show();
    $(".diamond-three").css("background-color", "#624E78");
    $(".rectangle-three").css("background-color", "#e6e6fa");
    $(".number-three").css("color", "white");
    $(".diamond-four").css("background-color", "#FFFF99");
    $(".rectangle-four").css("background-color", "#FFFF99");
    $(".number-four").css("color", "#624e78");
  });

// Accessories-Packages Clicking
  $("#accessories-package-one-button").click(function(){
    $("#accessories-package-one-button").hide();
    $(".accessories-package-two").hide();
    $(".number-four").hide();
    $(".checkout-button").show();
    $(".check-four").show();
    $(".diamond-four").css("background-color", "#624E78");
    $(".rectangle-four").css("background-color", "#e6e6fa");
    $(".number-four").css("color", "white");
  });
  $("#accessories-package-two-button").click(function(){
    $("#accessories-package-two-button").hide();
    $(".accessories-package-one").hide();
    $(".number-four").hide();
    $(".checkout-button").show();
    $(".check-four").show();
    $(".diamond-four").css("background-color", "#624E78");
    $(".rectangle-four").css("background-color", "#e6e6fa");
    $(".number-four").css("color", "white");
  });
});