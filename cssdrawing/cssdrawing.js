/*window.addEventListener("resize", function() {
  if ($(window).width() <= 1050) {
    $(".corner")
      .width("28vw")
      .height("28vw");
    $(".corner > span")
      .css("font-size", "3.8vw")
      .css("bottom", "-4.3vw")
      .css("line-height", "3.8vw");
    $("#description_corner")
      .css("left", "-14vw")
      .css("top", "-14vw");
    $("#projects_corner")
      .css("right", "-14vw")
      .css("top", "-14vw");
    $("#about_corner")
      .css("left", "-14vw")
      .css("bottom", "-14vw");
    $("#contact_corner")
      .css("right", "-14vw")
      .css("bottom", "-14vw");
    $(".tab")
      .width("70vw")
      .css("left", "15vw"); //if open: adjust!
  } else {
    $(".corner")
      .width("20vw")
      .height("20vw");
    $(".corner > span")
      .css("font-size", "3vw")
      .css("bottom", "-3.5vw")
      .css("line-height", "3vw");
    $("#description_corner")
      .css("left", "-10vw")
      .css("top", "-10vw");
    $("#projects_corner")
      .css("right", "-10vw")
      .css("top", "-10vw");
    $("#about_corner")
      .css("left", "-10vw")
      .css("bottom", "-10vw");
    $("#contact_corner")
      .css("right", "-10vw")
      .css("bottom", "-10vw");
    $(".tab")
      .width("60vw")
      .css("left", "20vw"); //if open: adjust!

  }
});*/


function targetIn(element) {
  $(element)
    .stop()
    .clearQueue()
    .fadeIn(200)
    .animate({"bottom": "10%"}, {duration: 500, queue: false});
}

function targetOut(element) {
  $(element)
    .stop()
    .clearQueue()
    .fadeOut(200)
    .queue(function() {
      $(element)
        .css("bottom", "-50%");
      $(this)
        .dequeue();
    });
}
// Description Slider
function descriptionSliderOpen() {
  $("#description")
    .animate({"left": "20vw"}, {duration: 1000, queue: false})
    .animate({"top": "5vh"}, {duration: 1000, queue: false});
  $("#homepage")
    .fadeOut(500);
}

function descriptionSliderClose() {
  $("#description")
    .animate({"left": "-60vw"}, {duration: 1000, queue: false})
    .animate({"top": "-90vh"}, {duration: 1000, queue: false});
  $("#homepage")
    .fadeIn(500);
}

// Projects Slider
function projectsSliderOpen() {
  $("#projects")
    .animate({"right": "20vw"}, {duration: 1000, queue: false})
    .animate({"top": "5vh"}, {duration: 1000, queue: false});
  $("#homepage")
    .fadeOut(500);
}

function projectsSliderClose() {
  $("#projects")
    .animate({"right": "-60vw"}, {duration: 1000, queue: false})
    .animate({"top": "-90vh"}, {duration: 1000, queue: false});
  $("#homepage")
    .fadeIn(500);
}

// About Slider
function aboutSliderOpen() {
  $("#about")
    .animate({"left": "20vw"}, {duration: 1000, queue: false})
    .animate({"bottom": "5vh"}, {duration: 1000, queue: false});
  $("#homepage")
    .fadeOut(500);
}

function aboutSliderClose() {
  $("#about")
    .animate({"left": "-60vw"}, {duration: 1000, queue: false})
    .animate({"bottom": "-90vh"}, {duration: 1000, queue: false});
  $("#homepage")
    .fadeIn(500);
}

// Contact Slider
function contactSliderOpen() {
  $("#contact")
    .animate({"right": "20vw"}, {duration: 1000, queue: false})
    .animate({"bottom": "5vh"}, {duration: 1000, queue: false});
  $("#homepage")
    .fadeOut(500);
}

function contactSliderClose() {
  $("#contact")
    .animate({"right": "-60vw"}, {duration: 1000, queue: false})
    .animate({"bottom": "-90vh"}, {duration: 1000, queue: false});
  $("#homepage")
    .fadeIn(500);
}

/* Not using ATM

function curveText(span) {
  var str = $(span).html();
  var curved = '';
  for (var i = 0; i < str.length; i++) {
    curved += '<span class="char';
    curved += i;
    curved += '">';
    curved += str[i];
    curved += '</span>';
  }
  $(span).html(curved);
  console.log(curved);
}
*/
