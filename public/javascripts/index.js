let width = $(window).width();
let height = $(window).height();

$(window).resize(function () {
  width = $(window).width() * 0.85;
  height = $(window).height() * 0.9;
  $("#letter").css({
    width:width,
    "max-height":height,
  })
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
    typeSpeed: 50,
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
    typeSpeed: 50,
    onComplete: (self) => {
      $(".typed-cursor").hide();
      paragraph();
    },
  });
}

function paragraph() {
  let els = $(".paragraph p");
  for (let index = 0; index < els.length; index++) {
    const text = $(els[index]).attr("data-text");
    new Typed(els[index], {
      strings: [text],
      typeSpeed: 50,
      onComplete: (self) => {
        $(".typed-cursor").hide();
        footer();
      },
    });
  }
}

function footer() {
  $(".footer-letter").show();
  const text = $("#footer-greet").attr("data-text");

  new Typed("#footer-greet", {
    strings: [text],
    typeSpeed: 50,
    onComplete: (self) => {
      $(".typed-cursor").hide();
    },
  });
}
