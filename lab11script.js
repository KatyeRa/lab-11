$(document).ready(function () {
  $("#img").click(function () {
    $(".left").toggle(1000);
  })
  $(".left").hover(function () {
        $("left").css("opacity", "1")
    }, function () {
        $("left").css("opacity", ".5")
  });
  $("ul").click(function () {
       $(this).toggleClass("highlight");
     });

  $("#tabl").click(function() {
    $("#tab").fadeOut();
  });
  $("#tabll").click(function() {
    $("#tab").fadeIn();
  });

  $("#flip").click(function() {
    $("#panel").slideDown("slow");
  });

})