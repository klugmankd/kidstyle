// -------
// Helpers
// -------

    var enableScrollTimer = 0;
    window.addEventListener('scroll', function() {
        clearTimeout(enableScrollTimer);
        document.body.classList.add('disable-hover');
        enableScrollTimer = setTimeout( function(){ document.body.classList.remove('disable-hover'); }, 250);
    }, false);

// -------
// Helpers
// -------


// ---------
// DOM ready
// ---------
$(document).ready(function(){

    // ----------------
    // Offscreen panels
    // ----------------

        // Offscreen menu
        $('.js--offscreen-navigation--toggle').sidr({
            name: 'js--offscreen-navigation',
            side: 'left',
            renaming: false,
            displace: false,
            onOpen: function(){
                $('.b_page').addClass('b_page--shaded');
            },
            onCloseEnd: function(){
                $('.b_page').removeClass('b_page--shaded');
            }
        });

        // Offscreen cart
        $('.js--offscreen-cart--toggle').sidr({
            name: 'js--offscreen-cart',
            side: 'right',
            renaming: false,
            displace: false,
            onOpen: function(){
                $('.b_page').addClass('b_page--shaded');
            },
            onCloseEnd: function(){
                $('.b_page').removeClass('b_page--shaded');
            }
        });

        // Close on tap
        $('.b_page').on('tap', function(){
            $.sidr('close', 'js--offscreen-navigation');
            $.sidr('close', 'js--offscreen-cart');
        });

        // Close on resize
        $(window).resize(function(){
            $.sidr('close', 'js--offscreen-navigation');
            $.sidr('close', 'js--offscreen-cart');
        });

    // ----------------
    // Offscreen panels
    // ----------------


    // -------------------
    // Navigation dropdown
    // -------------------

        var product_categories_dropdown = new $.underneath($('#js--product-categories--dropdown'), {
            easing_show : 'easeInOutExpo',
            easing_hide : 'easeInOutExpo',
            speed_show  : 250,
            speed_hide  : 250,
            before_show : function(){
                $('.js--product-categories-dropdown-toggle').parent().addClass('b_navigation__item--current');
                $('.b_page').addClass('b_page--darkened');
            },
            after_hide  : function(){
                $('.js--product-categories-dropdown-toggle').parent().removeClass('b_navigation__item--current');
                $('.b_page').removeClass('b_page--darkened');
            }
        });

        $(window).resize(function(){
            product_categories_dropdown.hide();
        });

    // -------------------
    // Navigation dropdown
    // -------------------


    // -----------------
    // Contacts dropdown
    // -----------------
        var contacts_dropdown = new $.underneath( $('.b_dropdown-toggle__list'), {
            easing_show : 'easeInOutExpo',
            easing_hide : 'easeInOutExpo',
            speed_show  : 200,
            speed_hide  : 200
        });
    // -----------------
    // Contacts dropdown
    // -----------------


    // ------------
    // Search input
    // ------------
        $('.js--search-field-toggle').on('click', function(e){
            if ( $('.b_search-form').hasClass('b_search-form--collapsed') ){
                $('.b_search-form').removeClass('b_search-form--collapsed');
                $('.b_search-form__input').focus();
            }
            else{
                $('.b_search-form').addClass('b_search-form--collapsed');
                $('.b_search-form__input').blur();
            }

            if (!$('.b_search-form__input').val()){
                e.preventDefault();
            }
        });
    // ------------
    // Search input
    // ------------


    // ------------
    // Owl Carousel
    // ------------
        $(".b_hero-slider__wrapper").owlCarousel({
            singleItem: true,
            autoHeight : false,
            autoPlay: false,
            stopOnHover: true,
            mouseDrag: true,
            pagination: false,
        });

        $(".b_products-deck.owl-carousel").owlCarousel({
            items: 4,
            itemsCustom: [[1148, 4], [960, 3], [580, 2], [480, 1], [0, 1]],
            autoHeight : false,
            mouseDrag: false,
            autoPlay: true,
            stopOnHover: true,
        });

        $(".b_benefits-deck.owl-carousel").owlCarousel({
            items: 4,
            itemsCustom: [[1148, 4], [960, 3], [580, 2], [480, 1], [0, 1]],
            autoHeight : false,
            mouseDrag: false,
            autoPlay: true,
            stopOnHover: true,
        });

        $(".b_suppliers-deck.owl-carousel").owlCarousel({
            autoHeight : false,
            items : 6,
            itemsCustom: [[1024, 6], [960, 5], [640, 4], [480, 3], [240, 2], [0, 1]],
            autoPlay: true,
            mouseDrag: true,
            pagination: false,
        });

        $(".b_thumbs__deck.owl-carousel").owlCarousel({
            autoHeight : false,
            items : 6,
            itemsCustom: [[1024, 6], [960, 5], [640, 4], [480, 3], [240, 2], [0, 1]],
            autoPlay: true,
            mouseDrag: true,
            pagination: false,
        });

    // ------------
    // Owl Carousel
    // ------------



    // --------
    // Zoom Box
    // --------

        $('.no-touchevents .b_product-card__zoom-box, .no-touchevents .b_showcase__preview-zoom-box').zoom({
            duration : 0,
            magnify : .75
        });

        $('.no-touchevents .js--product-card-toggle').on('click', function(e){
            $(this).closest('.b_product-card').toggleClass('js--front js--back');
            e.preventDefault();
        });

        $('.b_showcase__thumbnail-link').on('click', function(e){

            link = $(this).attr('href');

            $('.b_showcase__preview-zoom-box').trigger('zoom.destroy');

            $('.b_showcase__preview-image').attr('src', link);
            e.preventDefault();

            $('.no-touchevents .b_product-card__zoom-box, .no-touchevents .b_showcase__preview-zoom-box').zoom({
                duration : 0,
                magnify : .75
            });

        });

    // --------
    // Zoom Box
    // --------



    // -----
    // Modal
    // -----

        var $dialog = $('#modal-login').dialog();

    // -----
    // Modal
    // -----



    // ----
    // Tabs
    // ----

        var auth_popup_tabs = new $.tabulatron($('#js--tabulatron--authorize'));

    // ----
    // Tabs
    // ----



});
// ---------
// DOM ready
// ---------
