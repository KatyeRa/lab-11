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

  $("#text").click(function() {
    $(".vsc").hide();
  });

  $("#addClass").click(function() {
    $("h2").addClass("white");
  });

  $("#remove").click(function() {
    $("h2").removeClass("white");
  });

  $("#color").click(function() {
    $(".vsc").css({"background-color": "black", "color": "white"});
  });


})
