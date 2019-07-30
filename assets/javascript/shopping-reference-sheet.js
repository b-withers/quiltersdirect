// TODO:  DELETE FILE
// THIS IS JUST A REFERENCE.  DELETE WHEN SHOPPING-LONGARM-SCRIPTS IS DONE

$(document).ready(function(){
  $(".circle-one").css("background-color", "#f3d5dc");
  $(".number-one").css("color", "#624E78");

///////////////////
// Dyna Sitdown //
/////////////////
// SitDown Machine Click
  $("#dyna-sitdown-button").click(function(){
    $(".custom-package-selections").append('Dyna Sitdown, ')
    $('.customize-selection-header').text('Tables')
    $('.customize-selection-sub-header').text('What Table Is Right For You?')
    $(".dyna-sitdown-machine-row").hide();
    $(".dynasty-a4-machine-row").hide();
    $(".dynasty-a4-upgrade-package-machine-row").hide();
    $(".dyna-sitdown-table-row").css('display', 'flex');
    $(".number-one").hide();
    $(".check-one").show();
    $(".circle-one").css("background-color", "#624E78");
    $(".number-one").css("color", "white");
    $(".circle-two").css("background-color", "#f3d5dc");
    $(".number-two").css("color", "#624E78");
  });
// Sitdown Frame Click
  $("#dyna-sitdown-table-button").click(function(){
    $("#dyna-sitdown-table-button").hide();
    $(".dyna-sitdown-automation").show();
    $(".number-two").hide();
    $(".check-two").show();
    $(".circle-two").css("background-color", "#624E78");
    $(".number-two").css("color", "white");
    $(".circle-three").css("background-color", "#f3d5dc");
    $(".number-three").css("color", "#624E78");
  });
// Sitdown Automation Click
  $("#dyna-sitdown-automation-button").click(function(){
    $("#dyna-sitdown-automation-button").hide();
    $(".dyna-sitdown-essential-package").show();
    $(".dyna-sitdown-creative-package").show();
    $(".number-three").hide();
    $(".check-three").show();
    $(".circle-three").css("background-color", "#624E78");
    $(".number-three").css("color", "white");
    $(".circle-four").css("background-color", "#f3d5dc");
    $(".number-four").css("color", "#624E78");
  });
// Sitdown Acc Pkg Click
  $("#dyna-sitdown-essential-package-button").click(function(){
    $("#dyna-sitdown-essential-package-button").hide();
    $(".dyna-sitdown-creative-package").hide();
    $(".free-warranty").show();
    $(".warranty-upgrade").show();
    $(".number-four").hide();
    $(".check-four").show();
    $(".circle-four").css("background-color", "#624E78");
    $(".number-four").css("color", "white");
    $(".circle-five").css("background-color", "#f3d5dc");
    $(".number-five").css("color", "#624E78");
  });
  $("#dyna-sitdown-creative-package-button").click(function(){
    $("#dyna-sitdown-creative-package-button").hide();
    $(".dyna-sitdown-essential-package").hide();
    $(".free-warranty").show();
    $(".warranty-upgrade").show();
    $(".number-four").hide();
    $(".check-four").show();
    $(".circle-four").css("background-color", "#624E78");
    $(".number-four").css("color", "white");
    $(".circle-five").css("background-color", "#f3d5dc");
    $(".number-five").css("color", "#624E78");
  });
// Sitdown Warranty Click
  $("#free-warranty-button").click(function(){
    $("#free-warranty-button").hide();
    $(".warranty-upgrade").hide();
    $(".checkout-button").show();
    $(".number-five").hide();
    $(".check-five").show();
    $(".circle-five").css("background-color", "#624E78");
    $(".number-five").css("color", "white");
  });
  $("#warranty-upgrade-button").click(function(){
    $("#warranty-upgrade-button").hide();
    $(".free-warranty").hide();
    $(".checkout-button").show();
    $(".number-five").hide();
    $(".check-five").show();
    $(".circle-five").css("background-color", "#624E78");
    $(".number-five").css("color", "white");
  });


/////////////////
// Dynasty A4 //
///////////////
// Dynasty A4 Machine Click
  $("#dynasty-a4-button").click(function(){
    $("#dynasty-a4-button").hide();
    $(".dyna-sitdown").hide();
    $(".dynasty-a4-upgrade-package").hide();
    $(".dynasty-included-frame").show();
    $(".dynasty-addon-phoenix-10-frame").show();
    $(".dynasty-addon-phoenix-12-frame").show();
    $(".number-one").hide();
    $(".check-one").show();
    $(".circle-one").css("background-color", "#624E78");
    $(".number-one").css("color", "white");
    $(".circle-two").css("background-color", "#f3d5dc");
    $(".number-two").css("color", "#624E78");
  });
// Dynasty A4 Frame Click
  $("#dynasty-included-frame-button").click(function(){
    $("#dynasty-included-frame-button").hide();
    $(".dynasty-addon-phoenix-10-frame").hide();
    $(".dynasty-addon-phoenix-12-frame").hide();
    $(".dynasty-addon-qct5-beginnings-automation").show();
    $(".dynasty-addon-qct5-pro-automation").show();
    $(".number-two").hide();
    $(".check-two").show();
    $(".circle-two").css("background-color", "#624E78");
    $(".number-two").css("color", "white");
    $(".circle-three").css("background-color", "#f3d5dc");
    $(".number-three").css("color", "#624E78");
  });
  $("#dynasty-addon-phoenix-10-frame-button").click(function(){
    $("#dynasty-addon-phoenix-10-frame-button").hide();
    $(".dynasty-included-frame").hide();
    $(".dynasty-addon-phoenix-12-frame").hide();
    $(".dynasty-addon-qct5-beginnings-automation").show();
    $(".dynasty-addon-qct5-pro-automation").show();
    $(".number-two").hide();
    $(".check-two").show();
    $(".circle-two").css("background-color", "#624E78");
    $(".number-two").css("color", "white");
    $(".circle-three").css("background-color", "#f3d5dc");
    $(".number-three").css("color", "#624E78");
  });
  $("#dynasty-addon-phoenix-12-frame-button").click(function(){
    $("#dynasty-addon-phoenix-12-frame-button").hide();
    $(".dynasty-included-frame").hide();
    $(".dynasty-addon-phoenix-10-frame").hide();
    $(".dynasty-addon-qct5-beginnings-automation").show();
    $(".dynasty-addon-qct5-pro-automation").show();
    $(".number-two").hide();
    $(".check-two").show();
    $(".circle-two").css("background-color", "#624E78");
    $(".number-two").css("color", "white");
    $(".circle-three").css("background-color", "#f3d5dc");
    $(".number-three").css("color", "#624E78");
  });
// Dynasty A4 Automation Click
  $("#dynasty-addon-qct5-beginnings-automation-button").click(function(){
    $("#dynasty-addon-qct5-beginnings-automation-button").hide();
    $(".dynasty-addon-qct5-pro-automation").hide();
    $(".dynasty-essential-package").show();
    $(".dynasty-creative-package").show();
    $(".dynasty-ultimate-package").show();
    $(".number-three").hide();
    $(".check-three").show();
    $(".circle-three").css("background-color", "#624E78");
    $(".number-three").css("color", "white");
    $(".circle-four").css("background-color", "#f3d5dc");
    $(".number-four").css("color", "#624E78");
  });
  $("#dynasty-addon-qct5-pro-automation-button").click(function(){
    $("#dynasty-addon-qct5-pro-automation-button").hide();
    $(".dynasty-addon-qct5-beginnings-automation").hide();
    $(".dynasty-essential-package").show();
    $(".dynasty-creative-package").show();
    $(".dynasty-ultimate-package").show();
    $(".number-three").hide();
    $(".check-three").show();
    $(".circle-three").css("background-color", "#624E78");
    $(".number-three").css("color", "white");
    $(".circle-four").css("background-color", "#f3d5dc");
    $(".number-four").css("color", "#624E78");
  });
// Dynasty A4 Acc Pkg Click
  $("#dynasty-essential-package-button").click(function(){
    $("#dynasty-essential-package-button").hide();
    $(".dynasty-creative-package").hide();
    $(".dynasty-ultimate-package").hide();
    $(".free-warranty").show();
    $(".warranty-upgrade").show();
    $(".number-four").hide();
    $(".check-four").show();
    $(".circle-four").css("background-color", "#624E78");
    $(".number-four").css("color", "white");
    $(".circle-five").css("background-color", "#f3d5dc");
    $(".number-five").css("color", "#624E78");
  });
  $("#dynasty-creative-package-button").click(function(){
    $("#dynasty-creative-package-button").hide();
    $(".dynasty-essential-package").hide();
    $(".dynasty-ultimate-package").hide();
    $(".free-warranty").show();
    $(".warranty-upgrade").show();
    $(".number-four").hide();
    $(".check-four").show();
    $(".circle-four").css("background-color", "#624E78");
    $(".number-four").css("color", "white");
    $(".circle-five").css("background-color", "#f3d5dc");
    $(".number-five").css("color", "#624E78");
  });
  $("#dynasty-ultimate-package-button").click(function(){
    $("#dynasty-ultimate-package-button").hide();
    $(".dynasty-essential-package").hide();
    $(".dynasty-creative-package").hide();
    $(".free-warranty").show();
    $(".warranty-upgrade").show();
    $(".number-four").hide();
    $(".check-four").show();
    $(".circle-four").css("background-color", "#624E78");
    $(".number-four").css("color", "white");
    $(".circle-five").css("background-color", "#f3d5dc");
    $(".number-five").css("color", "#624E78");
  });
// Warranty Click same as Dyna Sitdown


/////////////////////////////////////////
// Dynasty A4 Upgrade Machine Package //
///////////////////////////////////////

// Dynasty A4 Upgrade Machine Package Click
$("#dynasty-a4-upgrade-package-button").click(function(){
  $("#dynasty-a4-upgrade-package-button").hide();
  $(".dyna-sitdown").hide();
  $(".dynasty-a4").hide();
  $(".dynasty-included-frame").show();
  $(".dynasty-addon-phoenix-10-frame").show();
  $(".dynasty-addon-phoenix-12-frame").show();
  $(".number-one").hide();
  $(".check-one").show();
  $(".circle-one").css("background-color", "#624E78");
  $(".number-one").css("color", "white");
  $(".circle-two").css("background-color", "#f3d5dc");
  $(".number-two").css("color", "#624E78");
});
// Frame, Automation, Accessories and Warranty same as Dynasty A4.


});