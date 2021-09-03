//mobile menu
var burger = document.getElementById("burger");
var hidden_menu = document.querySelector(".hidden-menu");
var isMenuShow = false;
burger.addEventListener("click", function (event) {
    event.preventDefault();
    if (isMenuShow) {
        $(".hidden-menu").css('display', 'none');
        $(".invitation").css('margin-top', '100px');
        isMenuShow = false;
    }
    else {
        $(".hidden-menu").css('display', 'block');
        $(".invitation").css('margin-top', $(".hidden-menu").outerHeight());
        isMenuShow = true;
    }

});

$(".hidden-menu").on("click", "a", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
                $('body, html').animate({ scrollTop: top } );
                $(".hidden-menu").css('display', 'none');
                $(".invitation").css('margin-top', '100px');
        })

// var close_hidden_menu = document.querySelector(".li_a");
// close_hidden_menu.addEventListener("click", function(event) {
//     event.preventDefault();
//     $(".hidden-menu").css('display', 'none');
//     // close_hidden_menu.style.display = "none";
// });


//fixed menu

$("document").ready(function ($) {

    var nav = $('.nav-bar');

    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.header').outerHeight()) {
            nav.addClass("fixed-nav-bar");
            //$('.menu').css('display', 'block').css('margin', '0, auto');
        }
        else {
            nav.removeClass("fixed-nav-bar");
            //$('.menu').css('margin-left', '0');
        }
    });

    var hidden = $('.hidden-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.header').outerHeight()) {
            hidden.addClass("fixed-hidden-menu");
            //$('.menu').css('display', 'block').css('margin', '0, auto');
        }
        else {
            hidden.removeClass("fixed-hidden-menu");
            //$('.menu').css('margin-left', '0');
        }
    });
});





