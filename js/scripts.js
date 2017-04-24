$(window).load(function() {

    "use strict";

    // will first fade out the loading animation
    $(".signal").fadeOut();
        // will fade out the whole DIV that covers the website.
    $(".preloader").fadeOut("slow");

});
$(document).ready(function () {

    $('#menu-toogle').click(function () {
        $('.mobile-menu').slideToggle();
    })
    
    $('.carusel').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('#column1').click(function () {
        $('.footer-column1').slideToggle();
    });
    $('#column2').click(function () {
        $('.footer-column2').slideToggle();
    });
    $('#column3').click(function () {
        $('.footer-column3').slideToggle();
    });
    $('#column4').click(function () {
        $('.footer-column4').slideToggle();
    });
    $('#column5').click(function () {
        $('.footer-column5').slideToggle();
    });




    // $( "#fast-reg" ).validate({
    //   rules: {
    //     fast_email: {
    //       required: true,
    //       minlength: 10
    //     }
    //   }
    // });

});