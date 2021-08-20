
//var xhr = new XMLHttpRequest();
//xhr.open('GET', 'http://ip-api.com/json');
//xhr.onload = function() {
//    if (xhr.status === 200) {
//        var geoData = JSON.parse(xhr.responseText);
//        document.body.classList.add("country--" + geoData.countryCode.toLowerCase());
//    }
//
//    else {
//        document.body.classList.add('country---und');
//    }
//};
//xhr.send();

jQuery(document).ready(function($) {

    if ($('body').hasClass('scrollmagic')) {

        var controller = new ScrollMagic.Controller();
        var titleBarHeight = $('.hr__title-bar').outerHeight(true);

        var scene = new ScrollMagic.Scene({triggerElement: ".hr__title-bar", triggerHook: 'onLeave', offset: titleBarHeight })
            .setClassToggle('.hr__site-header', 'display')
            //.addIndicators({name: 'header trigger'}) // add indicators (requires plugin)
            .addTo(controller);
    }

    if ($('.hr__partners-section .fl-col-group').length) {

        var swiper = new Swiper('.hr__partners-section > .fl-row-content-wrap > .fl-node-content', {
            wrapperClass: 'fl-col-group',
            slideClass: 'fl-col',
            slidesPerView: 'auto',
            freeMode: true,
            resistanceRatio: false,
            breakpoints: {
                1170: {
                    autoplay: true,
                    delay: 3000,
                    loop: true,
                    speed: 230
                },
                992: {
                    autoplay: true,
                    delay: 3000,
                    loop: true,
                    speed: 230
                },
                768: {
                    autoplay: true,
                    delay: 3000,
                    loop: true,
                    speed: 230
                }
            }
        });
    }

    $('#primary-menu .menu-item-has-children, #side-menu .menu-item-has-children').on('click', function() {
        $(this).find('a').toggleClass('toggled');
        $(this).find('.sub-menu').slideToggle(230);
    });


    function we_are_hiring() {
        lines = [
            "===============================================================================",
            ",--.  ,--.              ,--.                 ,------.                 ,--.     ",
            "|  '--'  | ,--,--. ,---.|  |,-. ,---. ,--.--.|  .--. ' ,--,--.,--,--, |  |,-.  ",
            "|  .--.  |' ,-.  || .--'|     /| .-. :|  .--'|  '--'.'' ,-.  ||      \\|     /  ",
            "|  |  |  |\\ '-'  |\\ `--.|  \\  \\\\   --.|  |   |  |\\  \\ \\ '-'  ||  ||  ||  \\  \\  ",
            "`--'  `--' `--`--' `---'`--'`--'`----'`--'   `--' '--' `--`--'`--''--'`--'`--' ",
            "===============================================================================",
            "  You opened the console! Know some code, do you? Want to work for one of the  ",
            "  best startups around? https://www.hackerrank.com/careers                     ",
            "==============================================================================="
        ]
        for (i = 0; i < lines.length; i ++) {
            console.log(lines[i]);
        }
    }

    if ($('body').hasClass('home')) {
        setTimeout(we_are_hiring, 5000);
    }

    if(window.trackJs) {
        trackJs.track("Page Loaded");
    }

    $('.fl-post-toggle-content').on('click', function () {
        $(this).parent().toggleClass('toggled');
    });


    var obj = {
        afterRequest: function (data) {

            data.forEach(function(item, i, arr){
                if (typeof item.value === 'string') {
                    item.value = item.value.replace(/^.*\/\/[^\/]+/, '');
                }
            });

            return data;
        }
    };

    if ($('body').hasClass('fl-builder-edit')) {
        $('.fl-link-field-search-input').autoSuggest('defaults', obj);
    }

    //pagination with dots
    if ($('.hr__pagination-section').length) {

        if ($('.hr__side-pagination').length) {

            $('.hr__side-pagination').prepend('<ul class="hr__side-pagination__list"></ul>');
            var paginationList = $('.hr__side-pagination .hr__side-pagination__list');

            $('.hr__pagination-section').each(function (i, elem) {
                var elemId = $(this).attr('id');
                var elemTitle = $(this).data('title') ? $(this).data('title') : elemId;
                var autoValueClass = $(this).data('title') ? '' : 'class="autovalue"'; // add class to label if title value set from id attribute.

                paginationList.append('<li> <a href="#'+ elemId +'" class="link-to-'+elemId+'"><span ' + autoValueClass + '>'+ elemTitle +'</span></a></li>');
                /*if ( 'undefined' !== typeof FLBuilderLayout ) {
                        //paginationList.find('.link-to' + elemId + '').each(FLBuilderLayout._initAnchorLink);
                }*/
                var index = i + 1;
                var scene = new ScrollMagic.Scene({triggerElement: "#"+ elemId +"", triggerHook: 'onLeave', offset: -200 })
                    .setClassToggle('.hr__side-pagination__list', 'selected-'+ index +'-item')
                    //.addIndicators({name: 'section '+elemId+' trigger'}) // add indicators (requires plugin)
                    .addTo(controller);

            });
        } else if($('.side-pagination').length) {

            $('.hr__pagination-section').each(function (i, elem) {

                var elemId = $(this).attr('id');
                var index = i + 1;

                //console.log(elemId);

                var scene = new ScrollMagic.Scene({triggerElement: "#" + elemId + "", triggerHook: 'onLeave', offset: -200})
                    .setClassToggle('.side-pagination > div[class^="menu"]', 'reached-' + index + '-item')
                    //.addIndicators({name: 'section '+elemId+' trigger'}) // add indicators (requires plugin)
                    .addTo(controller);

                //console.log(scene);
            });
        }

        var scene = new ScrollMagic.Scene({triggerElement: ".hr__site-footer", triggerHook: 'onEnter' })
            .setClassToggle('.hr__side-pagination', 'hr__side-pagination--absolute')
            //.addIndicators({name: 'pagination list trigger'}) // add indicators (requires plugin)
            .addTo(controller);

    }
    //side=pagination block

    $('.hr__side-pagination__list a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({scrollTop: target.offset().top}, 800);
                }
            }
        });

    if  ($('.hr__site-header-minimal__logo').length) {
        var scene = new ScrollMagic.Scene({triggerElement: ".hr__minimal-header-trigger", triggerHook: 'onLeave' })
            .setClassToggle('.hr__site-header-minimal__logo', 'hr__site-header-minimal__logo--fixed')
            //.addIndicators({name: 'Minimal Header trigger'}) // add indicators (requires plugin)
            .addTo(controller);
    }

    if  ($('.hr__title-bar--developer-report').length) {
        var scene = new ScrollMagic.Scene({triggerElement: ".hr__minimal-header-trigger", triggerHook: 'onEnter', offset: -400, duration: 550 })
            .setClassToggle('.hr__title-bar--developer-report', 'hr__title-bar--active')
            //.addIndicators({name: 'Active Title Bar trigger'}) // add indicators (requires plugin)
            .addTo(controller);
    }

    $('.hr__column-text-icon').click(function(){
        window.location = $(this).find("a").first().attr("href");
        return false;
    });

    $('#side-pagination-hamburger').click(function(){

        $(this).toggleClass('hr__hamburger--is-active');
        $(this).siblings('.side-pagination').toggleClass('side-pagination--toggled');

        return false;
    });

    var $side_pagination = $('.side-pagination'),
        $side_pagination_hamburger = $('#side-pagination-hamburger');


    $(document).mouseup(function (e) {
        if (!$side_pagination.is(e.target) // if the target of the click isn't the container...
            && $side_pagination.has(e.target).length === 0
            && !$side_pagination_hamburger.is(e.target)
            && $side_pagination_hamburger.has(e.target).length === 0 ) // ... nor a descendant of the container
        {
            $side_pagination.removeClass('side-pagination--toggled');
            $side_pagination_hamburger.removeClass('hr__hamburger--is-active');
        }
    });

    $('.report-side-menu a').click(function() {

        if ($('.main-navigation--visible').length) {
            $('html').removeClass('noscroll');
            $('.hr__mobile-menu-toggle--open').removeClass('hr__mobile-menu-toggle--open');
            $('.main-navigation--visible').removeClass('main-navigation--visible');
        }
        //Close Side Pagination
        if ($('.side-pagination--toggled').length) $('.side-pagination--toggled').removeClass('side-pagination--toggled');
        if ($('.hr__hamburger--is-active').length) $('.hr__hamburger--is-active').removeClass('hr__hamburger--is-active');
    });
});
