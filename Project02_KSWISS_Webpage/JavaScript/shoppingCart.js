$(document).ready(function(){

    
    var shoeImg = ["shoe-1.jpeg", "shoe-2.jpeg","shoe-3.jpeg","shoe-4.jpeg"]
    var shoeName = ["K-SWISS Lundahl Lth WP防水運動鞋-男-白/藍/酒紅", "K-SWISS Lundahl Lth WP防水運動鞋-男-白/綠/灰"];
    var shoePrice = [ 3180 , 2981];

    $("#myProduct").html(shoeName[0]);
    $("#price").html("$"+shoePrice[0]);
    $("#result").html("$"+shoePrice[0]*$("#quantity").val());
    

    $( "input[type='number']" ).change(function(){
        var purchase1 = shoePrice[0]*$("#quantity").val();
        var purchase2 = shoePrice[1]*$("#quantity2").val();
        $("#result").html("$"+shoePrice[0]*$("#quantity").val());
        console.log(purchase1);
        $(".checkOut").html(purchase1+purchase2);

    })
    
    $("#myProduct2").html(shoeName[1]);
    $("#price2").html("$"+shoePrice[1]);
    $("#result2").html("$"+shoePrice[1]*$("#quantity").val());

    $( "input[type='number']" ).change(function(){
        var purchase1 = shoePrice[0]*$("#quantity").val();
        var purchase2 = shoePrice[1]*$("#quantity2").val();
        $("#result2").html("$"+shoePrice[1]*$("#quantity2").val());
        console.log(purchase2);
        $(".checkOut").html(purchase1+purchase2);

    })
    












})