$(document).ready(function(){

    $(document).mousemove(function(event){
        if(event.pageY > 500){
            $(".list_2").hide();
        }else{
            $(".list_2").show();
        }
    });

});