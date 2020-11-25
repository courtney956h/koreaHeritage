(function() {

    // index slick-slide
    $('.slideInner').slick({
        autoplay:true,
        centerMode:true,
        centerPadding:'20px',
        dots:false,
        autoplaySpeed:4500,
        slidesToShow:3,
        slidesToScroll:3,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        pauseOnFocus:true,
        draggable:true,
        fade:false,
        arrows:true,
        prevArrow:'<button class="prevArrow marrow"><i class="fas fa-caret-left"></i></button>',
        nextArrow:'<button class="nextArrow marrow"><i class="fas fa-caret-right"></i></button>'
    });
 






})(jQuery)