(function($) {

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


    init();
    function init() {
        var ww = $(window).width();
        if ( ww > 991 && !$('html').hasClass('on') ) {
            $('html').addClass('pc').removeClass('mobile');
        } else if ( ww < 991 && !$('html').hasClass('mobile') ) {
            $('html').addClass('mobile').removeClass('pc');
        }
    }

    $(window).on('resize', function() {
        init();
    });


    // header depth1 hover시 depth2 보이기
    $(".depth1 > li").hover(
        function () {
          if ( $("html").hasClass("pc") ) {
            $(this).find(".depth2").stop().slideDown(500);
          }
        },
        function () {
          if ( $("html").hasClass("pc") ) {
            $(this).find(".depth2").stop().slideUp(500);
          }
        }
    );

    
 
    // 게시판 tab
    $('.tabTit li').each(function(i){
        $(this).find('a').on('click', function(e){
            e.preventDefault()
            $(this).parent().addClass('on')
            .siblings().removeClass('on')
            $('.tabCont  > div').eq(i).fadeIn(100)
            .siblings().fadeOut(100)
        })
    })






})(jQuery)