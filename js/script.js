$(document).ready(function(){
    var phys_hidden = true;
    $(".physics-courses").hide();
    $(".cs-courses").hide();
    $(".math-courses").hide();
    var phys_height = $("#phys").height();
    $("#physics-toggle").click(function(){
        $("#physbot").show();
        if(phys_hidden){
            $(".physics-courses").show();
            $("#phys-chevron").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#phys").css({
                height:phys_height + $("#phystop").height()
            });
            //if($("#phystop").position().top - $("#physbot").position().top < -30) {
            //    $("#physbot").hide();
            //}
            //$("#phys").css({
             //   height:$("#phystop").height() + $("#phys-chevron").height()+20
            //});
        }
        else{
            $(".physics-courses").hide();
            $("#phys-chevron").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#phys").css({
                height:phys_height
            });
        }
        
        phys_hidden = !phys_hidden;
    });

    var cs_hidden = true;
    $("#cs-toggle").click(function(){
        $("#csbot").show();
        if(cs_hidden){
            $(".cs-courses").show();
            $("#cs-chevron").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#cs").css({
                height:$("#cs").innerHeight()
            })
//            if($("#cstop").position().top - $("#csbot").position().top < -10) {
 //               $("#csbot").hide();
  //          }
        }
        else{
            $(".cs-courses").hide();
            $("#cs-chevron").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#cs").css({
                height:$("#cs").innerHeight()
            })
        }
        cs_hidden = !cs_hidden;
    });

    var math_hidden = true;
    $("#math-toggle").click(function(){
        $("#mathbot").show();
        if(math_hidden){
            $(".math-courses").show();
            $("#math-chevron").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#math").css({
                height:$("#math").innerHeight()
            })
            //if($("#mathtop").position().top - $("#mathbot").position().top < -10) {
             //   $("#mathbot").hide();
            //}
        }
        else{
            $(".math-courses").hide();
            $("#math-chevron").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#math").css({
                height:$("#math").innerHeight()
            })
        }
        math_hidden = !math_hidden;
    });


});
