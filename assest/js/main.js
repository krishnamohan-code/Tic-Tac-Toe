jQuery(document).on('ready', function ($) {
    "use strict";

    /*--------------------------
        STICKY MAINMENU
    ---------------------------*/
    $("#mainmenu-area").sticky({
        topSpacing: 0
    });

    /*---------------------------
        SMOOTH SCROLL
    -----------------------------*/
    $('ul#nav li a[href^="#"], a.navbar-brand, a.scrolltotop').on('click', function (event) {
        var id = $(this).attr("href");
        var offset = 60;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 1500, "easeInOutExpo");
        event.preventDefault();
    });

    // nav bar
    /*
* BetterNav - Bootstrap Navbar + bigSlide (for mobile)
* ATTENTION: CSS does not use browser prefixes, modify if you decide to use in production!
*/
$(document).ready(function() {
    /* Navbar specifics */
      $('.better-nav').each(function(){
        /* Set max width of fixed navbar equal to parent element (ignore this it's project specific) */
        $parentMaxWidth = $('dummy').css('max-width');
        $('.container', this).css('max-width', $parentMaxWidth);
        /* Add body padding if navbar is fixed on top or bottom */
        if($('.better-nav').hasClass('fixed-top')) {
          var $navHeight = $(this).height();
          $('body').css('padding-top', $navHeight+'px');
        } else if($('.better-nav').hasClass('fixed-bottom')) {
          var $navHeight = $(this).height();
          $('body').css('padding-bottom', $navHeight+'px');
        }
      });
    /* Clone main navbar for mobile */
      $('.better-nav .toggle').on('click touchstart', function(){
        $('#navbar-slide').empty();
        $(this).siblings('.body').clone().appendTo("#navbar-slide");
        betterNavPillsInit('#navbar-slide li.dropdown .selector');
      });
    /* Navbar pills dropdown trigger */
      function betterNavPillsInit($action) {
        $($action).on('click tap', function(){
          if($(this).parent('li.dropdown').hasClass('opened')) {
            $(this).parent('li.dropdown').removeClass('opened');
          } else {
            $(this).parent('li.dropdown').addClass('opened');
          }
        });
      }
      betterNavPillsInit('li.dropdown .selector');
    /* Initialize bigSlide */
      $('.better-nav .toggle').bigSlide({
        'menu':	'#navbar-slide',
        'push':	'body',
        'side':	'left',
        'menuWidth':	'80%',
        'speed':	300,
        'easyClose':	true,
        afterOpen: function() {
          $('body').css('overflow', 'hidden');
          $('#underlay').addClass('active');
        },
        afterClose: function() {
          setTimeout(function() {
            $('body').css('overflow', 'visible');
          }, 300);
          $('#underlay').removeClass('active');
        }
      });
      /* Dummy Content */
      var $dummyCount = 0;
      while ($dummyCount < 5 ) {
        $('<article><content><h3>DUMMY ARTICLE</h3></content></article>').appendTo('dummy');
        $dummyCount++;
      }
  });


    /*----------------------------
        MOBILE & DROPDOWN MENU
    ------------------------------*/
    jQuery('.stellarnav').stellarNav({
        theme: 'dark',
        breakpoint: 900,
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function () {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });

    /*--------------------------
       PARALLAX BACKGROUND
    ----------------------------*/
    $(window).stellar({
        responsive: true,
        positionProperty: 'position',
        horizontalScrolling: false
    });


    /*---------------------------
	    HOME SLIDER
	-----------------------------*/
    var $homeSlider = $('.welcome-slider-area');
    $homeSlider.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 9000,
        margin: 0,
        /*animateIn: 'fadeIn',
        animateOut: 'fadeOut',*/
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });


    /*------------------------------
        VIDEO POPUP
    --------------------------------*/
    var $videoModal = $(".video-area-popup");
    $videoModal.modalVideo({
        channel: 'youtube'
    });


    /*---------------------------
        MICHIMP INTEGRATION
    -----------------------------*/
    $('#mc-form').ajaxChimp({
        url: 'http://intimissibd.us14.list-manage.com/subscribe/post?u=a77a312486b6e42518623c58a&amp;id=4af1f9af4c', //Set Your Mailchamp URL
        callback: function (resp) {
            if (resp.result === 'success') {
                $('.subscriber-form input, .subscriber-form button').hide();
            }
        }
    });


    /*---------------------------
        COURSE SLIDER
    -----------------------------*/
    var $courseCarousel = $('.course-list');
    $courseCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        center: true,
        navText: ['<i class="fa fa-long-arrow-left"></i> Prev', 'Next <i class="fa fa-long-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 3
            },
            1900: {
                items: 4
            }
        }
    });

    /*---------------------------
        TESTMONIAL SLIDER
    -----------------------------*/
    var $testmonialCarousel = $('.testmonial-slider');
    $testmonialCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: true,
        center: false,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 20,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    /*---------------------------
        CLIENT SLIDER
    -----------------------------*/
    var $clientCarousel = $('.client-slider');
    $clientCarousel.owlCarousel({
        merge: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        center: true,
        navText: ['<i class="fa fa-long-arrow-left"></i> Prev', 'Next <i class="fa fa-long-arrow-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
            1200: {
                items: 5
            },
            1900: {
                items: 5
            }
        }
    });


    /*--------------------------
        FACT COUNTERING
    ---------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    /*--------------------------
        ACTIVE WOW JS
    ----------------------------*/
    new WOW().init();

    /*---------------------------
        PLACEHOLDER ANIMATION
    ----------------------------*/
    Placeholdem(document.querySelectorAll('[placeholder]'));

}(jQuery));



jQuery(window).on('load', function () {
    "use strict";
    /*--------------------------
        PRE LOADER
    ----------------------------*/
    $(".preeloader").fadeOut(1000);
    

});
