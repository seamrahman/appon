// banner-slider start //

$('.banner-slider').slick({
  dots: true,
    arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    autoplay:true,
});

// banner-slider end // 

// ss-slider start //
$('.screen-shot').slick({
  dots: true,
    arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
});
// ss-slider end //

// venubox start //

$(document).ready(function(){
    $('.venobox').venobox(); 
});

// venubox end //

// feature-text-slider start //

$('.feature-text').slick({
  dots: false,
    arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
    asNavFor:".feature-img",
});

// feature-text-slider start //

// feature-img-slider start //

$('.feature-img').slick({
  dots: true,
    arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
    asNavFor:".feature-text",
    centerMode:true,
    centerPadding: "0",
});

// feature-img-slider start //