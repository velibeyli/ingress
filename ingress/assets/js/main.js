///////////////////////////////////////////////////////////////////////////////////////////
// Numbers of keywords
// 01. Main page top section
///////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {

    const nextIcon = '<i class="fa-solid fa-arrow-right-long"></i>';
    const prevIcon = '<i class="fa-solid fa-arrow-left-long"></i>';
  ///////////////////////////////////////////////////////////////////////////////////////////
  // 01. Main page top section

  $('.topSection').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
///////////////////////////////////////////////////////////////////////////////////////////
// 01. Main page team member slider

$('.team_corusel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[prevIcon,nextIcon],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
///////////////////////////////////////////////////////////////////////////////////////////

});
