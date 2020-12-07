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

    
    // loading 화면
    $(window).load(function() {
        $('.loading').delay(2500).fadeOut(300);
    });


    // scroll 이벤트
    var sct;
    $(window).on('scroll', function() {
        sct = $(this).scrollTop();
    
        //gotop 버튼 생성
        if ( sct >= 300 ) {
            $('.gotop').addClass('on').stop().animate({
                opacity: '1'
            }, 500)
        } else {
            $('.gotop').removeClass('on').stop().animate({
                opacity: '0'
            }, 500)
        }


        //gotop 클릭시 up
        $('.gotop').on('click', function() {
            $('html, body').stop().animate({
                scrollTop:'0'
            }, 800, 'linear')
        })


        // scroll 이벤트 발생하는 함수 호출
        if ( $('#container').children().is('#content') ) { 
            mainScroll() 
        }
    })

    // scroll 이벤트 발생
    function mainScroll() {
        // article4 scroll animation
        var art4Near = $('.article4').offset().top - $(this).height()
        if ( sct >= art4Near ) {
            $('.article4').addClass('on')
        } else if ( sct === 0) {
            $('.article4').removeClass('on')
        }
        // article5 scroll animation
        var art5Near = $('.article5').offset().top - $(this).height()
        if ( sct >= art5Near ) {
            $('.article5').addClass('on')
        } else if ( sct === 0) {
            $('.article5').removeClass('on')
        }
    }


})(jQuery)