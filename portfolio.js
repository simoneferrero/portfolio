var aq = window.matchMedia("(max-aspect-ratio: 1/1)");
var lq = window.matchMedia("(max-width: 1250px) and (min-aspect-ratio: 1/1)");
var mq = window.matchMedia("(min-width: 1000px)");

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

function shootHTML() {
  $("#top_left")
    .finish()
    .fadeIn(200, function() {
      $("#tl")
        .finish()
        .fadeIn(100)
        .delay(7000)
        .fadeOut(300);
    });
  if (aq.matches) {
    $("#top_left")
      .animate({"top": "7.8vh"}, {duration: 200, queue: false})
      .animate({"left": "19.2vh"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#top_left")
          .finish()
          .css("top", "-5vh")
          .css("left", "3vh");
      });
  } else if (lq.matches){
    $("#top_left")
      .animate({"top": "3.8vw"}, {duration: 200, queue: false})
      .animate({"left": "19.2vw"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#top_left")
          .finish()
          .css("top", "-9vw")
          .css("left", "3vw");
      });

  } else {
    $("#top_left")
      .animate({"top": "2.3vw"}, {duration: 300, queue: false})
      .animate({"left": "24.05vw"}, {duration: 300, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#top_left")
          .finish()
          .css("top", "-10vw")
          .css("left", "8vw");
      });
  }
}

function shootCSS() {
  $("#bottom_left")
    .finish()
    .fadeIn(200, function() {
      $("#bl")
        .finish()
        .fadeIn(100)
        .delay(7000)
        .fadeOut(300);
    });
  if (aq.matches) {
    $("#bottom_left")
      .animate({"bottom": "-6.4vh"}, {duration: 200, queue: false})
      .animate({"left": "15.1vh"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom_left")
          .finish()
          .css("bottom", "-16vh")
          .css("left", "0");
      });
  } else if (lq.matches) {
    $("#bottom_left")
      .animate({"bottom": "-2.4vw"}, {duration: 200, queue: false})
      .animate({"left": "15.1vw"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom_left")
          .finish()
          .css("bottom", "-12vw")
          .css("left", "0");
      });
  } else {
    $("#bottom_left")
      .animate({"bottom": "9vw"}, {duration: 300, queue: false})
      .animate({"left": "21.5vw"}, {duration: 300, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom_left")
          .finish()
          .css("bottom", "-2vw")
          .css("left", "5vw");
      });
  }
}

function shootJS() {
  $("#bottom")
    .finish()
    .fadeIn(200, function() {
      $("#b")
        .finish()
        .fadeIn(100)
        .delay(7000)
        .fadeOut(300);
    });
  if (aq.matches) {
    $("#bottom")
      .animate({"bottom": "-14vh"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom")
          .finish()
          .css("bottom", "-30vh");
      });
  } else if (lq.matches) {
    $("#bottom")
      .animate({"bottom": "-10vw"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom")
          .finish()
          .css("bottom", "-26vw");
      });
  } else {
    $("#bottom")
      .animate({"bottom": "4vw"}, {duration: 300, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom")
          .finish()
          .css("bottom", "-9vw");
      });
  }
}

function shootJQ() {
  $("#top_right")
    .finish()
    .fadeIn(200, function() {
      $("#tr")
        .finish()
        .fadeIn(100)
        .delay(7000)
        .fadeOut(300);
    });
  if (aq.matches) {
    $("#top_right")
      .animate({"top": "2vh"}, {duration: 200, queue: false})
      .animate({"right": "11.8vh"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#top_right")
          .finish()
          .css("top", "-7vh")
          .css("right", "0");
      });
  } else if (lq.matches) {
    $("#top_right")
      .animate({"top": "-2vw"}, {duration: 200, queue: false})
      .animate({"right": "11.8vw"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#top_right")
          .finish()
          .css("top", "-11vw")
          .css("right", "0");
      });
  } else {
    $("#top_right")
      .animate({"top": "-0.5vw"}, {duration: 300, queue: false})
      .animate({"right": "19vw"}, {duration: 300, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#top_right")
          .finish()
          .css("top", "-10vw")
          .css("right", "8vw");
      });
  }
}

function shootAngular() {
  $("#bottom_right")
    .finish()
    .fadeIn(200, function() {
      $("#br")
        .finish()
        .fadeIn(100)
        .delay(7000)
        .fadeOut(300);
    });
  if (aq.matches) {
    $("#bottom_right")
      .animate({"bottom": "-10.2vh"}, {duration: 200, queue: false})
      .animate({"right": "7.6vh"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom_right")
          .finish()
          .css("bottom", "-15vh")
          .css("right", "0");
      });
  } else if (lq.matches) {
    $("#bottom_right")
      .animate({"bottom": "-6.2vw"}, {duration: 200, queue: false})
      .animate({"right": "7.6vw"}, {duration: 200, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom_right")
          .finish()
          .css("bottom", "-11vw")
          .css("right", "0");
      });
  } else {
    $("#bottom_right")
      .animate({"bottom": "5vw"}, {duration: 300, queue: false})
      .animate({"right": "18vw"}, {duration: 300, queue: false})
      .delay(7000)
      .fadeOut(300, function() {
        $("#bottom_right")
          .finish()
          .css("bottom", "-2vw")
          .css("right", "5vw");
      });
  }
}

function shootTarget() {
  $("#skill1")
    .click(function() {
      shootHTML();
    });
  $("#skill2")
    .click(function() {
      shootCSS();
    });
  $("#skill3")
    .click(function() {
      shootJS();
    });
  $("#skill4")
    .click(function() {
      shootJQ();
    });
  $("#skill5")
    .click(function() {
      shootAngular();
    });
  $("#remover")
    .click(function() {
      disclaimerRemover();
    });
}

function showDescription(element) {
  $(element)
    .stop()
    .clearQueue()
    .delay(500)
    .fadeIn(500);
}

function hideDescription(element) {
  $(element)
    .stop()
    .clearQueue()
    .fadeOut(500);
}

// Intro Slider
function introSliderOpen() {
  if (mq.matches) {
    if (aq.matches) {
      $("#intro")
        .fadeIn(500)
        .css("left", "-90vw")
        .css("top", "-70vh")
        .animate({"left": "5vw"}, {duration: 1000, queue: false})
        .animate({"top": "15vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    } else {
      $("#intro")
        .fadeIn(500)
        .css("left", "-60vw")
        .css("top", "-90vh")
        .animate({"left": "20vw"}, {duration: 1000, queue: false})
        .animate({"top": "5vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    }
  } else {
    if (aq.matches) {
      $("#intro")
        .css("left", "5vw")
        .css("top", "15vh")
        .fadeIn(500);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    } else {
      $("#intro")
        .css("left", "5vw")
        .css("top", "15vh")
        .fadeIn(500);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    }
  }
}

function introSliderClose() {
  if (mq.matches) {
    if (aq.matches) {
      $("#intro")
        .animate({"left": "-90vw"}, {duration: 1000, queue: false})
        .animate({"top": "-70vh"}, {duration: 1000, queue: false})
        .fadeOut(1000);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeIn(500);
    } else {
      $("#intro")
        .animate({"left": "-60vw"}, {duration: 1000, queue: false})
        .animate({"top": "-90vh"}, {duration: 1000, queue: false})
        .fadeOut(1000);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeIn(500);
    }
  } else {
    $("#intro")
      .fadeOut(500);
    $("#homepage")
      .stop()
      .clearQueue()
      .fadeIn(500);
  }
}

// Projects Slider
function projectsSliderOpen() {
  if (mq.matches) {
    if (aq.matches) {
      $("#projects")
        .fadeIn(500)
        .css("display", "block")
        .css("right", "-90vw")
        .css("top", "-70vh")
        .animate({"right": "5vw"}, {duration: 1000, queue: false})
        .animate({"top": "15vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    } else {
      $("#projects")
        .fadeIn(500)
        .css("display", "block")
        .css("right", "-60vw")
        .css("top", "-90vh")
        .animate({"right": "20vw"}, {duration: 1000, queue: false})
        .animate({"top": "5vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    }
  } else {
    if (aq.matches) {
      $("#projects")
        .css("right", "5vw")
        .css("top", "15vh")
        .fadeIn(500);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    } else {
      $("#projects")
        .css("right", "5vw")
        .css("top", "15vh")
        .fadeIn(500);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    }
  }
}

function projectsSliderClose() {
  if (mq.matches) {
    if (aq.matches) {
      $("#projects")
        .animate({"right": "-90vw"}, {duration: 1000, queue: false})
        .animate({"top": "-70vh"}, {duration: 1000, queue: false})
        .fadeOut(1000);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeIn(500);
    } else {
      $("#projects")
        .animate({"right": "-60vw"}, {duration: 1000, queue: false})
        .animate({"top": "-90vh"}, {duration: 1000, queue: false})
        .fadeOut(1000);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeIn(500);
    }
  } else {
    $("#projects")
      .fadeOut(500);
    $("#homepage")
      .stop()
      .clearQueue()
      .fadeIn(500);
  }
}

// About Slider
function aboutSliderOpen() {
  if (mq.matches) {
    if (aq.matches) {
      $("#about")
        .fadeIn(500)
        .css("left", "-90vw")
        .css("bottom", "-70vh")
        .animate({"left": "5vw"}, {duration: 1000, queue: false})
        .animate({"bottom": "15vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    } else {
      $("#about")
        .fadeIn(500)
        .css("left", "-60vw")
        .css("bottom", "-90vh")
        .animate({"left": "20vw"}, {duration: 1000, queue: false})
        .animate({"bottom": "5vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    }
  } else {
    if (aq.matches) {
      $("#about")
        .fadeIn(500)
        .css("left", "5vw")
        .css("bottom", "15vh");
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    } else {
      $("#about")
        .fadeIn(500)
        .css("left", "5vw")
        .css("bottom", "15vh");
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    }
  }
}

function aboutSliderClose() {
  if (mq.matches) {
    if (aq.matches) {
      $("#about")
        .animate({"left": "-90vw"}, {duration: 1000, queue: false})
        .animate({"bottom": "-70vh"}, {duration: 1000, queue: false})
        .fadeOut(1000);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeIn(500);
    } else {
      $("#about")
        .animate({"left": "-60vw"}, {duration: 1000, queue: false})
        .animate({"bottom": "-90vh"}, {duration: 1000, queue: false})
        .fadeOut(1000);
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeIn(500);
    }
  } else {
    $("#about")
      .fadeOut(500);
    $("#homepage")
      .stop()
      .clearQueue()
      .fadeIn(500);
  }
}

// Contact Slider
function contactSliderOpen() {
  if (mq.matches) {
    if (aq.matches) {
      $("#contact")
        .fadeIn(500)
        .css("right", "-90vw")
        .css("bottom", "-70vh")
        .animate({"right": "5vw"}, {duration: 1000, queue: false})
        .animate({"bottom": "15vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    } else {
      $("#contact")
        .fadeIn(500)
        .css("right", "-60vw")
        .css("bottom", "-90vh")
        .animate({"right": "20vw"}, {duration: 1000, queue: false})
        .animate({"bottom": "5vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    }
  } else {
    if (aq.matches) {
      $("#contact")
        .fadeIn(500)
        .css("right", "5vw")
        .css("bottom", "15vh");
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    } else {
      $("#contact")
        .fadeIn(500)
        .css("right", "5vw")
        .css("bottom", "15vh");
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeOut(500);
    }
  }
}

function contactSliderClose() {
  if (mq.matches) {
    if (aq.matches) {
      $("#contact")
        .fadeOut(1000)
        .animate({"right": "-90vw"}, {duration: 1000, queue: false})
        .animate({"bottom": "-70vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeIn(500);
    } else {
      $("#contact")
        .fadeOut(1000)
        .animate({"right": "-60vw"}, {duration: 1000, queue: false})
        .animate({"bottom": "-90vh"}, {duration: 1000, queue: false});
      $("#homepage")
        .stop()
        .clearQueue()
        .fadeIn(500);
    }
  } else {
    $("#contact")
      .fadeOut(500);
    $("#homepage")
      .stop()
      .clearQueue()
      .fadeIn(500);
  }
}

function corners() {
  $("#intro_corner")
    .hover(function() {
      targetIn("#intro_corner > img");
    }, function() {
      targetOut("#intro_corner > img");
    })
    .click(function() {
      if (!introExpanded) {
        projectsSliderClose();
        projectsExpanded = false;
        aboutSliderClose();
        aboutExpanded = false;
        contactSliderClose();
        contactExpanded = false;
        introSliderOpen();
        introExpanded = true;
      } else {
        introSliderClose();
        introExpanded = false;
      }
    });
  $("#projects_corner")
    .hover(function() {
      targetIn("#projects_corner > img");
    }, function() {
      targetOut("#projects_corner > img");
    })
    .click(function() {
      if (!projectsExpanded) {
        introSliderClose();
        introExpanded = false;
        aboutSliderClose();
        aboutExpanded = false;
        contactSliderClose();
        contactExpanded = false;
        projectsSliderOpen();
        projectsExpanded = true;
      } else {
        projectsSliderClose();
        projectsExpanded = false;
      }
    });
  $("#about_corner")
    .hover(function() {
      targetIn("#about_corner > img");
    }, function() {
      targetOut("#about_corner > img");
    })
    .click(function() {
      if (!aboutExpanded) {
        introSliderClose();
        introExpanded = false;
        projectsSliderClose();
        projectsExpanded = false;
        contactSliderClose();
        contactExpanded = false;
        aboutSliderOpen();
        aboutExpanded = true;
      } else {
        aboutSliderClose();
        aboutExpanded = false;
      }
    });
  $("#contact_corner")
    .hover(function() {
      targetIn("#contact_corner > img");
    }, function() {
      targetOut("#contact_corner > img");
    })
    .click(function() {
      if (!contactExpanded) {
        introSliderClose();
        introExpanded = false;
        projectsSliderClose();
        projectsExpanded = false;
        aboutSliderClose();
        aboutExpanded = false;
        contactSliderOpen();
        contactExpanded = true;
      } else {
        contactSliderClose();
        contactExpanded = false;
      }
    });
}

function resizing() {
  $("#top_left")
    .finish()
    .fadeOut(10);
  $("#tl")
    .finish()
    .fadeOut(10);
  $("#bottom_left")
    .finish()
    .fadeOut(10);
  $("#bl")
    .finish()
    .fadeOut(10);
  $("#bottom")
    .finish()
    .fadeOut(10);
  $("#b")
    .finish()
    .fadeOut(10);
  $("#top_right")
    .finish()
    .fadeOut(10);
  $("#tr")
    .finish()
    .fadeOut(10);
  $("#bottom_right")
    .finish()
    .fadeOut(10);
  $("#br")
    .finish()
    .fadeOut(10);
}
