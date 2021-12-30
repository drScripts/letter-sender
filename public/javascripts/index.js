let width = $(window).width();
let height = $(window).height();

$(window).resize(function () {
  width = $(window).width() * 0.85;
  height = $(window).height() * 0.9;
  $("#letter").css({
    width: width,
    "max-height": height,
  });
});

$("#letter").click(function () {
  let isOpen = $("body").attr("isOpen");

  if (isOpen) {
    return false;
  }

  $("body").attr("isOpen", true);

  $(this).removeClass("letter");
  $(this).animate({
    display: "absolute",
    "z-index": "10000",
  });
  $("#wrapp").css("background-color", "#3b4049");
  $("#wrapp").css("display", "absolute");
  $("#wrapp").css("top", "-200px");
  $("body").css("diplay", "block");
  $("body").css("justify-content", "none");
  $("body").css("alig-items", "none");

  $(".lid").fadeOut(1000);
  $(".envelope").fadeOut(1000);
  $(".letter-text").show(1000);
  $("#click-text").hide();
  $(this).animate(
    {
      width: width * 0.85,
      "max-height": height * 0.9,
    },
    function () {
      setTimeout(() => {
        created();
      }, 1500);
    }
  );
});

function created() {
  const text = $(".date-create").attr("data-text");

  new Typed(".date-create", {
    strings: [text],
    typeSpeed: 40,
    onComplete: (self) => {
      $(".typed-cursor").hide();
      greatingText();
    },
  });
}

function greatingText() {
  const text = $(".greating").attr("data-text");

  new Typed(".greating", {
    strings: [text],
    typeSpeed: 40,
    onComplete: (self) => {
      $(".typed-cursor").hide();
      paragraph();
    },
  });
}

let els = $(".paragraph p");
let indexs = 0;
function paragraph() {
  const text = $(els[indexs]).attr("data-text");

  typed(indexs, text);
}

function typed(index, text) {
  new Typed(els[index], {
    strings: [text],
    typeSpeed: 40,
    onComplete: (self) => {
      $(".typed-cursor").hide();
      indexs++;
      if (indexs >= els.length) {
        footer();
      } else {
        paragraph();
      }
    },
  });
}

function footer() {
  $(".footer-letter").show();
  const text = $("#footer-greet").attr("data-text");

  new Typed("#footer-greet", {
    strings: [text],
    typeSpeed: 40,
    onComplete: (self) => {
      $(".typed-cursor").hide();
    },
  });
}
