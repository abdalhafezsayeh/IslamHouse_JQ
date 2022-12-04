$(function (){

    'use strict';

    var navbar = $(".navbar");
    $(window).scroll(function () {

        if($(window).scrollTop() >= navbar.height()) {
            navbar.addClass("scrold");
            
        } else {

            navbar.removeClass("scrold");
        }



        // Show Button Scroll To op
        var buttonScroll = $(".scroll-to-top");
        if ($(window).scrollTop() >= 1100) {
            buttonScroll.fadeIn(400)
        } else {
            buttonScroll.fadeOut(400)
        }


        $('.box').each(function () {

            if($(window).scrollTop() > $(this).offset().top) {


                var boxId = $(this).attr('id');

                $('.navbar li a').removeClass('activeclass');

                $('.navbar li a[data-scroll="' + boxId + '"]').addClass('activeclass');
            }

        });

    }); /** End Scrool **/

    $('.navbar li a').click(function (e) {

        $(this).addClass('activeclass').parent().siblings().find('a').removeClass('activeclass')

    });

    $('.navbar li a , .app-slider .ho a').click(function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1

        }, 500)


    });


});