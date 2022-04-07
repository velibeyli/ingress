///////////////////////////////////////////////////////////////////////////////////////////
// Numbers of keywords
// 01. Top Section
// 02. Team Carousel Section

$(document).ready(function () {
  const nextIcon = '<i class="fa-solid fa-arrow-right-long"></i>';
  const prevIcon = '<i class="fa-solid fa-arrow-left-long"></i>';
  ///////////////////////////////////////////////////////////////////////////////////////////
  // 01. Top Section
  $("#topSection .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  ///////////////////////////////////////////////////////////////////////////////////////////
  // 02. Team Carousel Section

  $(".team_carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [prevIcon, nextIcon],
    dots: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});
