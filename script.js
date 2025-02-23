$(function () {
    $(".box").hover(
        function() {
            $(this).stop(true).animate({
                backgroundColor: "red",
                padding: ["40px", "easeOutElastic"] //box increases size
            }, 1000);
        }, function() {
            $(this).stop(true).animate({
                backgroundColor: "rgb(211,211,211)",
                padding: ["30px","easeOutElastic"] //box goes back to original size
            }, 1000)
        }
    );

    $("#stretch").hover(
        function() {
            $(this).stop(true).animate({
                width: ["100%","easeOutBounce"], //box stretches to the far right of the screen
                letterSpacing: ["+=14vw","easeOutBounce"] //letter gradually stretches to the right side of the screen
            }, 4000);
        }, function() {
            $(this).stop(true).animate({
                width: ["115px","easeOutBounce"], // goes back to original size
                letterSpacing: ["0px", "easeOutBounce"] //letters stretch out
            }, 3500)
        }
    );

    //
    $(".ball").hover(
        function() {
            $(this).stop(true).animate({
                opacity: "0",
                top: ["50px","easeOutBack"] //ball disappears while it goes down
            }, "slow");
        }, function() {
            $(this).animate({
                opacity: "1",
                top: ["0px", "easeOutBack"] //ball reappears going up
            })
        }
    );
});
