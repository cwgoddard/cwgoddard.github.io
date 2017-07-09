$(document).ready(function(){
    var phys_hidden = true;
    $(".physics-courses").hide();
    $(".cs-courses").hide();
    $(".math-courses").hide();
    $("#physics-toggle").click(function(){
        if(phys_hidden){
            $(".physics-courses").show();
            $("#phys-chevron").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        }
        else{
            $(".physics-courses").hide();
            $("#phys-chevron").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
        phys_hidden = !phys_hidden;
    });

    var cs_hidden = true;
    $("#cs-toggle").click(function(){
        if(cs_hidden){
            $(".cs-courses").show();
            $("#cs-chevron").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        }
        else{
            $(".cs-courses").hide();
            $("#cs-chevron").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
        cs_hidden = !cs_hidden;
    });

    var math_hidden = true;
    $("#math-toggle").click(function(){
        if(math_hidden){
            $(".math-courses").show();
            $("#math-chevron").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        }
        else{
            $(".math-courses").hide();
            $("#math-chevron").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        }
        math_hidden = !math_hidden;
    });
});
