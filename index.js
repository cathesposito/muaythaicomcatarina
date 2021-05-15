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
    else if (currentScroll > 950 && currentScroll <= 1200) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
    }
    else if (currentScroll > 1200) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "block");
    }
  });
};

function resposiveScreen2() {
  $(document).on("scroll", function() {
    const currentScroll = $("html").scrollTop();
    if (currentScroll >= 350 && currentScroll <= 900) {
      $(".pic1").css("display", "block");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "none");
    }
    else if (currentScroll > 900 && currentScroll <= 1050) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
    }
    else if (currentScroll > 1050) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "block");
    }
  });
};

function resposiveScreen3() {
  $(document).on("scroll", function() {
    const currentScroll = $("html").scrollTop();
    if (currentScroll >= 200 && currentScroll <= 550) {
      $(".pic1").css("display", "block");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "none");
    }
    else if (currentScroll > 550 && currentScroll <= 800) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
    }
    else if (currentScroll > 800) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "block");
    }
  });
};

function resposiveScreen4() {
  $(document).on("scroll", function() {
    const currentScroll = $("html").scrollTop();
    if (currentScroll >= 200 && currentScroll <= 350) {
      $(".pic1").css("display", "block");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "none");
    }
    else if (currentScroll > 350 && currentScroll <= 500) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
    }
    else if (currentScroll > 500) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "block");
    }
  });
};

function myFunction(){
  var x = window.innerWidth;
  if (x >= 1400) {
    resposiveScreen1()
  }
  if (x <1400 && x >= 1300) {
    resposiveScreen2()
  }
  if (x < 1300 && x >= 600) {
    resposiveScreen3()
  }
  if (x < 600) {
    resposiveScreen4()
  }
}

myFunction()
