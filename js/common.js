
var countDownDate = new Date("Sep 21, 2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is finished, write some text
    //if (distance < 0) {
    //    clearInterval(x);
    //    document.getElementById("days").innerHTML = "0";
    //    document.getElementById("hours").innerHTML = "0";
    //    document.getElementById("minutes").innerHTML = "0";
    //    document.getElementById("seconds").innerHTML = "0";
    //}
}, 1000);






//window.onload = function() {
//    $(".header").css('transform', 'scale(1.5)');
//    $(".header").css('position', 'relative');
//    $("#home").css('overflow', 'hidden');
//};

// popup gallery

var popup_slides = document.getElementsByClassName("zoom");
for (var i = 0; i < popup_slides.length; i++){
popup_slides[i].addEventListener("click", function (event) {
    event.preventDefault();
        document.querySelector(".slider-back").style.display = "block";
        document.querySelector(".slider").style.display = "block";
        //document.querySelector(".slider").css('flex-direction', 'column');
        //document.querySelector(".slider").css('justify-content', 'space-between');
        $('body').css('overflow', 'hidden');

});
}

var close_slider = document.getElementsByClassName("slider-close");
for (var i = 0; i < close_slider.length; i++) {
    close_slider[i].addEventListener("click", function (event) {
        event.preventDefault()
        document.querySelector(".slider-back").style.display = "none";
        document.querySelector(".slider").style.display = "none";
        $('body').css('overflow', 'scroll');
    })
}


var slideIndex;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide-block");
   
    //var dots = document.getElementsByClassName("demo");
    //var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //for (i = 0; i < dots.length; i++) {
    //    dots[i].className = dots[i].className.replace(" active", "");
    //}
    slides[slideIndex - 1].style.display = "flex";
    //dots[slideIndex - 1].className += " active";
    //captionText.innerHTML = dots[slideIndex - 1].alt;
}


//animate scroll
// var menu_click = document.querySelectorAll(".li_a");
// menu_click.addEventListener("click", function (event) {
//     event.preventDefault();
//     var id = menu_click.attr('href');
//     var top = id.offset().top;
// $('body, html').animate({ scrollTop: top }, 1200);
// })

// $(".menu").on("click", "a", function (event) {
//             event.preventDefault();
//             var id = $(this).attr('href'),
//                 top = $(id).offset().top;
//             $('body, html').animate({ scrollTop: top }, 1200);
//         })
//     $(".hidden-menu").on("click", "a", function (event) {
//         event.preventDefault();
//         var id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body, html').animate({ scrollTop: top }, 1200);
//     })
//     $(".attending_content").on("click", "a", function (event) {
//         event.preventDefault();
//         var id = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body, html').animate({ scrollTop: top }, 1200);
//     })




