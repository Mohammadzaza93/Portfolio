$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
});
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  // Smooth scrolling effect for navigation links
  $(document).ready(function() {
    // Smooth scrolling for all links with the class "nav-link"
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            // Store the hash
            var hash = this.hash;

            // Animate scroll to the target section
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});

// Animation or transition effect using JavaScript/jQuery
$(document).ready(function() {
$("#start-animation").click(function() {
    // When the button is clicked, fade in the text
    $("#animated-text").css("opacity", "1");
});
});

// Slideshow or image carousel using JavaScript/jQuery

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
slides.forEach((slide) => {
    slide.style.display = "none";
});
slides[index].style.display = "block";
}

function nextSlide() {
slideIndex++;
if (slideIndex >= slides.length) {
    slideIndex = 0;
}
showSlide(slideIndex);
}

function prevSlide() {
slideIndex--;
if (slideIndex < 0) {
    slideIndex = slides.length - 1;
}
showSlide(slideIndex);
}

// Automatically advance to the next slide every 3 seconds
setInterval(nextSlide, 3000);

// Show the first slide initially
showSlide(slideIndex);

// Interactive element using jQuery

$(document).ready(function () {
// Toggle additional information
$('#toggleButton').on('click', function () {
  $('#additionalInfo').toggle(); // Toggle the visibility
});
});

//  Owl Carousel  //

$(".carousel").owlCarousel({
margin: 20,
loop: true,
autoplay: true,
autoplayTimeOut: 2000,
autoplayHoverPause: true,
responsive: {
  0: {
    items: 1,
    nav: false
  },
  600: {
    items: 2,
    nav: false
  },
  1000: {
    items: 3,
    nav: false
  }
}
});


 

