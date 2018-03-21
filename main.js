$(document).ready(function(){
    $("#reg").click(function(){
        $(this).css("border-bottom", "1px solid rgba(0,0,255,1)");
        $("#log").css("border-bottom", "1px solid rgba(0,0,0,0.2)");
        // $("#log:hover").css("border-bottom", "1px solid blue");
        // $("#log").toggleClass("hovered");
        $("#flexi-1").css("display", "block");
        $("#flexi-2").css("display", "none");
    });

    $("#log").click(function(){
        $(this).css("border-bottom", "1px solid rgba(0,0,255,1)");
        $("#reg").css("border-bottom", "1px solid rgba(0,0,0,0.2)");
        // $("#reg:hover").css("border-bottom", "1px solid blue");
        // $("#reg").toggleClass("hovered");
        $("#flexi-1").css("display", "none");
        $("#flexi-2").css("display", "block");
    });
});

// border-bottom: 1px solid blue;


/* TO DO: fix hover states */
// #reg:hover {
//     border: none;
//     border-bottom: 1px solid ;
// }


