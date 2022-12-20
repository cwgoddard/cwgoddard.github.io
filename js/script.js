$(document).ready(function(){


    var pton_hidden = true;
    $(".pton-courses").hide()
    var pton_height = $("#pton").height();

    $('#pton-toggle').click(function(){
        $('#ptonbot').show();
        if(pton_hidden){
            $(".pton-courses").show();
            $("#pton-chevron").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#pton").css({
                height:pton_height
            });
        }
        else{
            $(".pton-courses").hide();
            $("#pton-chevron").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#pton").css({
                height:pton_height
            });
        }
        pton_hidden = !pton_hidden;
    });

    var cornell_hidden = true;
    $(".cornell-courses").hide()
    var cornell_height = $("#cornell").height();

    $('#cornell-toggle').click(function(){
        $('#cornellbot').show();
        if(cornell_hidden){
            $(".cornell-courses").show();
            $("#cornell-chevron").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $("#cornell").css({
                height:cornell_height
            });
        }
        else{
            $(".cornell-courses").hide();
            $("#cornell-chevron").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $("#cornell").css({
                height:cornell_height
            });
        }
        cornell_hidden = !cornell_hidden;
    });

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
