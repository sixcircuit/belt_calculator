
function calculate_strap(desired_inner_circumfrence, material_thickness){

    var radius = (desired_inner_circumfrence / (2 * Math.PI));

    radius += material_thickness;

    var real_circumfrence = radius * (2 * Math.PI);
    
    return(real_circumfrence);
}

function do_calc(){

    var desired_inner_circumfrence = _.n($("input.length").val());
    var material_thickness = _.n($("input.thickness").val());

    if(!desired_inner_circumfrence || !material_thickness){ 
        $(".result").text("");
        $(".results").addClass("hide");
        alert("Please enter a number in both boxes.");
    }else{
        var belt_length = calculate_strap(desired_inner_circumfrence, material_thickness);
        $(".result").text(_.ceil(belt_length, 1));
        $(".results").removeClass("hide");
    }

}

function main(){

    $(".calculate").click(function(){ do_calc(); });

    $(document).keypress(function(e){
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == '13'){ do_calc(); }
    });
}

$(main);
