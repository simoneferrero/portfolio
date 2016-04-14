'use strict';

var choices = [],
  counter = 0;

function randomizer(array) {
  var newChoice = array[Math.floor(Math.random()*array.length)],
  result = $("#result_button > span");
  result
    .finish()
    .fadeOut(0);
  if (array.length > 0) {
    result
      .text(newChoice);
  } else {
    result
      .text("You have no options to choose from!")
      .css("font-size", "75%");
  }
  result
    .fadeIn(500)
    .delay(2000)
    .fadeOut(500)
    .queue(function(next) {
      result
        .text("CHOOSE!")
        .css("font-size", "100%");
        next();
    })
    .fadeIn(500);
  choice
    .focus();
}

function choiceAdder() {
  var choice = $("#choice")[0];
  var list = $("#list_of_choices")[0];
  choice
    .focus();
  if (choice.value != "") {
    choices.push(choice.value);
    var text = choices[counter];
    var element = $("<button />", {class: "remove_button", html: text}); //without span
    //var element = $("<button />", {class: "remove_button"}); //with span
    if ($(window).width() <= 1300) {
      element
        .css("width", "29%")
        .css("font-size", "160%")
        .css("max-height", "60px");
    }
    //var content = $("<span />", {html: choices[counter]}); //with span
    element
      .appendTo(list);
    //element.append(content); //with span
    showConfirm("Choice added");
    element
      .hover(function() {
        $("#descr")
          .html(text);
        element
          .html("DELETE?"); //without span
        //content.html('DELETE?'); //with span
      }, function() {
        element
          .html(text); //without span
        //content.html(text); //with span
      });
    list.scrollTop = list.scrollHeight;
    element
      .on("click", element, function() {
        var index = choices.indexOf(text);
        showConfirm("Choice removed");
        choices.splice(index, 1);
        counter--;
        $(this)
          .remove();
        choice
          .focus();
      });
    counter++;
  }
  choice.value = "";
}

function showConfirm(text) {
  $('#confirm')
    .finish()
    .fadeOut(0)
    .text(text)
    .fadeIn(500)
    .delay(1000)
    .fadeOut(500);
}

function fullAnimationOpen() {
  $("#full_content")
    .css("visibility", "visible")
    .fadeOut(0);
  $("#second_page")
    .animate({"margin-right": 0}, {duration: 2000, queue: false});
  $("#slider")
    .attr("src", "slider_one.png")
    .removeClass("spinner_ccw")
    .animate({"margin-right": "90%"}, 1800, function() {
      $('#choice')
        .focus();
    })
    .addClass("spinner_cw")
    .css("transform", "rotate(180deg)");
}

function fullAnimationClose() {
  $("#second_page")
    .animate({"margin-right": "-100%"}, {duration: 2000, queue: false});
  $("#slider")
    .attr("src", "slider_one.png")
    .removeClass("spinner_cw")
    .animate({"margin-right": "1%"}, {duration: 1800, queue: false})
    .addClass("spinner_ccw")
    .css("transform", "");
}

function partialAnimationOpen() {
  $("#full_content")
    .css("visibility", "visible")
    .fadeOut(0);
  $("#second_page")
    .animate({"margin-right": 0}, 2000, function() {
      $('#choice')
        .focus();
    });
  $("#slider")
    .attr("src", "slider_one.png")
    .removeClass("spinner_ccw")
    .addClass("spinner_cw")
    .css("transform", "rotate(180deg)");
}

function partialAnimationClose() {
  $("#second_page")
    .animate({"margin-right": "-100%"}, {duration: 2000, queue: false});
  $("#slider")
    .attr("src", "slider_one.png")
    .removeClass("spinner_cw")
    .animate({"margin-right": "1%"}, {duration: 1800, queue: false})
    .addClass("spinner_ccw")
    .css("transform", "");
}
