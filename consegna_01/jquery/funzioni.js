//effetto sul testo
function blink(selector) {
    $(selector).fadeOut('slow', function() {
        $(this).fadeIn('slow', function() {
            blink(this);
        });
    });
}

//effetto sulla foto
$(function() {

    $(".foto_fade").css("opacity", "0.5");


    $(".foto_fade").hover(function() {


            $(this).stop().animate({
                opacity: 1.0
            }, "slow");
        },


        function() {

            $(this).stop().animate({
                opacity: 0.5
            }, "slow");
        });
});
