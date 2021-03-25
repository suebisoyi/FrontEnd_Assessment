import $ from 'jquery';

$(document).ready(function() {
    var $magic = $(".hiddenBackgroundRevealedOnMouseOver"),
        magicWHalf = $magic.width() / 2;
    $(document).on("mousemove", function(e) {
      $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
    });
  });