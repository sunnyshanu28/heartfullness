// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

$(".back-to-top").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });
