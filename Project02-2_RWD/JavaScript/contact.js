$(document).ready(function () {
    console.log($('.tab'));
    console.log($('ul#tabs li a'));
    $('.tab:first').show();
    $('#tabs li a:first').addClass('active');
    $('ul#tabs li a').click(function () {
        var index = $('ul#tabs li a').index($(this));
        console.log(index);
        $('ul#tabs li a').removeClass('active');
        $('.tab').hide();
        $('.tab').eq(index).show("slow");
        $(this).addClass('active');
    });

    // $(document).mousemove(function(event){
    //     if(event.pageY > 100){
    //         console.log(event.pageY);
    //         $(".list_2").hide();
    //     }else{
    //         console.log(event.pageY);
    //         $(".list_2").show();
    //     }
    // });

});
