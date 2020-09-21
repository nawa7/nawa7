$(document).ready(function () {
  //## Setup WIDTH & HEIGHT for Navbar Items ##//
  const li = $("nav li").length;
  const size = parseInt($("nav div").css("width"));
  for (var i = 1; i < li + 1; i++) {
    var x = size - i * 10;
    $("nav li:nth-last-of-type(" + i + ")").css({
      width: x + "px",
      height: x + "px",
    });
  }
  //## Setup Navbar OnClick ##//
  function navBar() {
    var arr = [90, 140];
    const translateY = $("nav li:nth-last-of-type(1)")
      .css("transform")
      .split(/[()]/)[1];
    var curr = translateY.split(",")[5];
    for (var i = 1; i < li + 1; i++) {
      if (curr > -90) {
        $("#burger").removeClass("is-closed").addClass("is-open");
        $("nav li:nth-last-of-type(" + i + ")").css({
          opacity: 1,
          left: 10 * i + "px",
          transform: "translateY(-" + arr[i - 1] + "px)",
        });
      } else {
        $("#burger").removeClass("is-open").addClass("is-closed");
        $("nav li:nth-last-of-type(" + i + ")").css({
          opacity: 0,
          left: "1px",
          transform: "translateY(-50%)",
        });
      }
    }
  }
  $("nav div").click(navBar);
  //## Setup Light/Dark Mode OnClick ##//
  const body = $("body"),
    img = $("#projects i:nth-of-type(1) img"),
    sun = $("#sun"),
    moon = $("#moon");
  var mode;
  if (localStorage.getItem("mode") == "night") {
    body.toggleClass("day");
    body.toggleClass("night");
    img.toggleClass("active");
    dayOrNight();
    mode = localStorage.getItem("night");
  } else {
    mode = "day";
  }
  $("nav li:nth-of-type(2)").click(function () {
    body.toggleClass("day");
    body.toggleClass("night");
    img.toggleClass("active");
    dayOrNight();
    if (body.hasClass("night")) {
      mode = "night";
      localStorage.setItem("mode", mode);
    } else {
      mode = "day";
      localStorage.setItem("mode", mode);
    }
  });
  function dayOrNight() {
    if (body.hasClass("night")) {
      moon.css("opacity", "0");
      sun.css("opacity", "1");
    } else {
      moon.css("opacity", "1");
      sun.css("opacity", "0");
    }
  }
  //## Setup EN/AR OnClick ##//
  console.log(body.prop("dir"));
  const en = $(".en"),
    ar = $(".ar"),
    e = $("#en"),
    a = $("#ar");
  var lang = "";
  if (localStorage.getItem("lang") == "ar") {
    body.toggleClass("font");
    body.prop("dir", "rtl");
    en.hide();
    ar.fadeIn("slow");
    e.css("opacity", "1");
    a.css("opacity", "0");
  }
  $("nav li:nth-of-type(1)").click(function () {
    if (body.prop("dir") == "ltr") {
      lang = "ar";
      body.toggleClass("font");
      body.prop("dir", "rtl");
      en.hide();
      ar.fadeIn("slow");
      e.css("opacity", "1");
      a.css("opacity", "0");
    } else {
      lang = "en";
      body.toggleClass("font");
      body.prop("dir", "ltr");
      en.fadeIn("slow");
      ar.hide();
      e.css("opacity", "0");
      a.css("opacity", "1");
    }
    localStorage.setItem("lang", lang);
  });
  //## Setup Skills OnHover ##//
  const length = $("#skills i").length;
  for (var x = 1; x <= length; x++) {
    const i = $("#skills i:nth-of-type(" + x + ")");
    const color = i.css("border-color");

    i.hover(
      function () {
        i.css({
          background: color.substring(0, color.length - 3) + "25)",
          color: "var(--text-primary)",
        });
      },
      function () {
        i.css({
          background: "transparent",
          color: "var(--text-secondary)",
        });
      }
    );
  }
});
