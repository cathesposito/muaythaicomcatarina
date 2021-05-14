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
    if (currentScroll >= 200 && currentScroll <= 850) {
      $(".pic1").css("display", "block");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "none");
      $(".photosHidden").css("margin-top", 50);
    }
    if (currentScroll > 850 && currentScroll <= 1100) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
      $(".photosHidden").css("margin-top", 50);
    }
    if (currentScroll > 1100 && currentScroll <= 1550) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "block");
      $(".photosHidden").css("margin-top", 100)
    }
  });
};

function resposiveScreen3() {
  $(document).on("scroll", function() {
    const currentScroll = $("html").scrollTop();
    if (currentScroll >= 0 && currentScroll <= 1000) {
      $(".pic1").css("display", "block");
      $(".pic2").css("display", "none");
      $(".pic3").css("display", "none");
    }
    if (currentScroll > 1000 && currentScroll <= 1300) {
      $(".pic1").css("display", "none");
      $(".pic2").css("display", "block");
      $(".pic3").css("display", "none");
    }
    if (currentScroll > 1300 && currentScroll <= 1500) {
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
  if (x < 1400 && x >= 600) {
    resposiveScreen2()
  }
  if (x < 600) {
    resposiveScreen3()
  }
}

myFunction()
