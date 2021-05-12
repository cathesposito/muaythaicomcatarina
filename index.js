// Go to price section
$("#buttonPrices").click(function() {
  $('html, body').animate({
    scrollTop: $(".bottomContainer").offset().top
  })
});

// Contacte me Page
$("#buttonPrices2").click(function() {
  $(".bottomContainer2").toggle();
});



// Make animation in the photo animation Section
function resposiveScreen1() {
  $(document).on("scroll", function() {
    const currentScroll = $("html").scrollTop();
    if (currentScroll >= 350 && currentScroll <= 950) {
      $(".pic1").css("display", "block");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "none");
    }
    if (currentScroll > 950 && currentScroll <= 1150) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
    }
    if (currentScroll > 1150 && currentScroll <= 1850) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "block");
    }
  });
};

function resposiveScreen2() {
  $(document).on("scroll", function() {
    const currentScroll = $("html").scrollTop();
    if (currentScroll >= 200 && currentScroll <= 950) {
      $(".pic1").css("display", "block");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "none");
    }
    if (currentScroll > 950 && currentScroll <= 1050) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
    }
    if (currentScroll > 1050 && currentScroll <= 1550) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "block");
    }
  });
};

function resposiveScreen3() {
  $(document).on("scroll", function() {
    const currentScroll = $("html").scrollTop();
    if (currentScroll >= 0 && currentScroll <= 300) {
      $(".pic1").css("display", "block");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "none");
    }
    if (currentScroll > 300 && currentScroll <= 700) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
    }
    if (currentScroll > 700 && currentScroll <= 900) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "block");
    }
  });
};


// Media query
function myFunction(x1, x2, x3) {
  if (x1.matches) { // Media query matches for 1920x1080 and 1536x864
    resposiveScreen1()
  }
  if (x2.matches) { // Media query matches for 1366x768
    resposiveScreen2()
  }
  if (x3.matches){ // Media query matches for 414x896 and 375x667 and 360x640
    resposiveScreen3()
  }

}

var x1 = window.matchMedia("(min-width: 1400px)")
var x2 = window.matchMedia("(min-width: 600px)")
var x3 = window.matchMedia("(min-width: 360px)")
myFunction(x1, x2, x3)
x1.addListener(myFunction)
x2.addListener(myFunction)
x3.addListener(myFunction)
