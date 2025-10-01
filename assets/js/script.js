
(function ($) {
    "use strict";

    /*============================================
    // Preloader
    ============================================*/
    if ($('.preloader').length > 0) {

        window.onload = function () {
            const preloader = document.querySelector('.preloader');
            preloader.classList.add('hidden');
        };
    }

    // header-next
    var getHeaderHeight = function () {
        var headerNext = $(".header-next");
        var header = $(".header-area");
        var headerHeight = header.height();
        headerNext.css({
            "margin-top": headerHeight + "px"
        });
    }
    getHeaderHeight();

    $(window).on('resize', function () {
        getHeaderHeight();
    });



    /*============================================
    nice select
    ============================================*/
    $(document).ready(function () {
        $('.nice-select').niceSelect();
    });

    /*============================================
    Select2
    ============================================*/
    $('.select2').select2();

    /*============================================
        Youtube popup
    ============================================*/
    $(".youtube-popup").magnificPopup({
        disableOn: 300,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    })


    /*============================================
    AOS js init
    ============================================*/
    AOS.init({
        easing: "ease",
        duration: 1200,
        once: true,
        offset: 60,
        disable: "mobile"
    });

    // =============  Dynamic Year ========= 
    if ($('.dynamic-year').length > 0) {
        const yearElement = document.querySelector('.dynamic-year');
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = currentYear;
    }

    /******************************
    Tol Tip
    ********************************/
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Go to Top
    $(window).on("scroll", function () {
        // If window scroll down .active class will added to go-top
        var goTop = $(".go-top");
        if ($(window).scrollTop() >= 200) {
            goTop.addClass("active");
        } else {
            goTop.removeClass("active")
        }
    })
    $(".go-top").on("click", function (e) {
        $("html, body").animate({
            scrollTop: 0,
        }, 0);
    });

    /*============================================
    Toggle List
    ============================================*/
    $("[data-toggle-list]").each(function () {

        var show_more = "Show More +";
        var show_less = "Show Less -";

        var list = $(this).children();
        var listShow = $(this).data("toggle-show");
        var listShowBtn = $(this).next("[data-toggle-btn]");

        var showMoreText = show_more + '';
        var showLessText = show_less + '';

        if (list.length > listShow) {
            listShowBtn.show();
            list.slice(listShow).hide();
            listShowBtn.on("click", function () {
                var isExpanded = listShowBtn.text() === showLessText;
                list.slice(listShow).slideToggle(300);
                listShowBtn.text(isExpanded ? showMoreText : showLessText);
            });
        } else {
            listShowBtn.hide();
        }
    });

    /*============================================
        data att background image
    ============================================*/
    function lazyLoadBackground() {
        $(".bg-img").each(function () {
            var el = $(this);
            if (el.attr("data-bg-image") && el.is(":visible") && el.offset().top < $(window).scrollTop() + $(window).height()) {
                var src = el.attr("data-bg-image");
                el.css({
                    "background-image": "url(" + src + ")",
                }).removeAttr("data-bg-image");
            }
        });
    }
    lazyLoadBackground();
    $(window).on("scroll", lazyLoadBackground);


    /*============================================
    Image to background image
    ============================================*/
    $(".img-to-bg.blur-up").parent().addClass('blur-up lazyload');

    $(".img-to-bg").each(function () {
        var el = $(this), src = el.attr("src"), parent = el.parent();

        parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            "display": "block"
        });

        el.hide();
    });

    /*============================================
        Lazyload image
    ============================================*/
    var lazyLoad = function () {
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 2;
        lazySizesConfig.preloadAfterLoad = true;

        var lazyContainer = $(".lazy-container");

        if (lazyContainer.children(".lazyloaded")) {
            lazyContainer.addClass("lazy-active")
        } else {
            lazyContainer.removeClass("lazy-active")
        }
    }

    $(document).ready(function () {
        lazyLoad();
    })


    /*============================================
        default Slider
    ============================================*/
    $(".default-slider").each(function () {
        var web_slider = $(this);
        var id = web_slider.attr("id");
        var sliderId = "#" + id;

        var swiper = new Swiper(sliderId, {
            spaceBetween: web_slider.data("slidespace"),
            speed: 1000,
            pagination: {
                el: sliderId + "-pagination",
                clickable: true,
            },

            navigation: {
                nextEl: sliderId + "-next",
                prevEl: sliderId + "-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: web_slider.data("xsmview"),
                },
                420: {
                    slidesPerView: web_slider.data("smview"),
                },
                768: {
                    slidesPerView: web_slider.data("mdview"),
                },
                992: {
                    slidesPerView: web_slider.data("lgview"),
                },
                1199: {
                    slidesPerView: web_slider.data("xlview"),
                }
            },
        });
    });

    /*=-----------------------------
        productmodal_slider Slider
    -----------------------------*/
    var swiper = new Swiper(".productmodal_slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        // fade: true,
        asNavFor: '.slider-nav',
        prevArrow: '<button class="slick-prev slick-arrow-up"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow-down"><i class="fa fa-chevron-right"></i></button>'
    });

    $('.show-product-gallery').on('click', function (e) {
        e.preventDefault();

        var items = [];

        // slider-for এর সব image collect করব
        $('.slider-for img').each(function () {
            items.push({
                src: $(this).attr('src'),
                type: 'image'
            });
        });

        // Magnific Popup ওপেন করা
        $.magnificPopup.open({
            items: items,
            gallery: {
                enabled: true
            },
            type: 'image'
        });
    });


    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        vertical: true,
        focusOnSelect: true,
        infinite: false,
        prevArrow: '<button class="slick-prev slick-arrow-up"><i class="fa fa-chevron-up"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow-down"><i class="fa fa-chevron-down"></i></button>',
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    });


    function initZoomOnActiveSlide() {
        // Remove any existing zoom containers
        $('.zoomContainer').remove();
        // Remove previously attached zoom
        $('.slider-for .slick-slide img').each(function () {
            if ($(this).data('ezPlus')) {
                $(this).ezPlus('destroy');
            }
        });

        // Get active slide's image
        const $activeImg = $('.slider-for .slick-current img');

        // Optional: assign ID if needed
        $activeImg.attr('id', 'zoom_05');

        // Init ezPlus
        $activeImg.ezPlus({
            zoomType: 'inner',
            cursor: 'crosshair'
        });
    }

    // Init on first load
    initZoomOnActiveSlide();

    // Re-init on slide change
    $('.slider-for').on('afterChange', function (event, slick, currentSlide) {
        initZoomOnActiveSlide();
    });



    /*=--------------------------------
        review 
    ---------------------------------*/
    const stars = document.querySelectorAll('.stars');
    let currentRating = 0;

    // Hover effect
    stars.forEach((star, idx) => {
        star.addEventListener('mouseover', () => {
            resetStars();
            for (let i = 0; i <= idx; i++) {
                stars[i].classList.add('hovered');
            }
        });

        star.addEventListener('mouseout', () => {
            resetStars();
            applyRating(currentRating);
        });

        star.addEventListener('click', () => {
            currentRating = idx + 1;
            applyRating(currentRating);
        });
    });

    function resetStars() {
        stars.forEach(s => {
            s.classList.remove('hovered');
            s.classList.remove('filled');
        });
    }

    function applyRating(rating) {
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('filled');
        }
    }


    /*=--------------------------------
     quick-shop 
 ---------------------------------*/
    var productCards = $(".product-card");

    productCards.each(function () {
        var $card = $(this);
        var $btnReplace = $card.find(".btn-replace");
        var $quickShop = $card.find(".quick-shop");
        var $closeBtn = $card.find(".quick-shop .close-btn");

        if ($btnReplace.length && $quickShop.length) {
            $btnReplace.on("click", function (e) {
                e.preventDefault();
                $quickShop.addClass("show");
                $card.addClass("active_quickshop");
                $(this).addClass("disable");
            });
        }

        if ($closeBtn.length && $quickShop.length) {
            $closeBtn.on("click", function (e) {
                e.preventDefault();
                $quickShop.removeClass("show");
                $btnReplace.removeClass("disable");
                $card.removeClass("active_quickshop");
            });
        }
    });


    /*============================================
    price filter
    ============================================*/
    $(function () {
        var minPrice = 0;
        var maxPrice = 2000;

        $("#slider-range").slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [200, 1800],
            slide: function (event, ui) {
                $("#amount").val(ui.values[0] + " ৳ — " + ui.values[1] + " ৳");
            }
        });

        // Set initial display
        $("#amount").val(
            $("#slider-range").slider("values", 0) + " ৳ — " +
            $("#slider-range").slider("values", 1) + " ৳"
        );
    });




})(jQuery);


