$(document).ready(function(){
    $("#reg").click(function(){
        $(this).css("border-bottom", "1px solid rgba(0,0,255,1)");
        $("#log").css("border-bottom", "1px solid rgba(0,0,0,0.2)");
        $("#flexi-1").css("display", "block");
        $("#flexi-2").css("display", "none");
    });

    $("#log").click(function(){
        $(this).css("border-bottom", "1px solid rgba(0,0,255,1)");
        $("#reg").css("border-bottom", "1px solid rgba(0,0,0,0.2)");
        $("#flexi-1").css("display", "none");
        $("#flexi-2").css("display", "block");
    });
});

// border-bottom: 1px solid blue;
