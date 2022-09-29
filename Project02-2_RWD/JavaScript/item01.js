
$(document).ready(function(){
    $(".newPrice").hide();

})




//選擇顏色後顯示在視窗上的文字
function colorSelect(val){
    if(val==1){ 
    $(".colorText").text("白/藍/酒紅");
    $(".itemDemo").html( "<img src=\"./img/item/shoe-1.jpeg\" >")
    $(".price").removeClass("crossLine");
    $(".newPrice").hide();

}else if (val == 2){
    $(".colorText").text("白/綠/灰");
    $(".itemDemo").html( "<img src=\"./img/item/shoe-2.jpeg\" >")
    $(".price").addClass("crossLine");
    $(".newPrice").show();
    // $(".price").clone().after().html(`<span class="newPrice h5">$ 2981NTD</span>`);
}else if (val == 3){
    $(".colorText").text("白/粉藍/粉紅");
    $(".itemDemo").html( "<img src=\"./img/item/shoe-3.jpeg\" >")
    $(".price").removeClass("crossLine");
    $(".newPrice").hide();

}else{
    $(".colorText").text("白/粉紫/黃");
    $(".itemDemo").html( "<img src=\"./img/item/shoe-4.jpeg\" >")
    $(".price").removeClass("crossLine");
    $(".newPrice").hide();



}
}

//尺寸點擊後的外誆
$(".sizeOption").on("click",function(){
    // $(".sizeOption").css("color","black");
    // $(this).css("color","red");
    $(".sizeOption").css("border","0");
    $(this).css("border","1px solid black");
})


//主要顯示圖片
$(".picSelect").on("click",function(){
    $("div.picSelect").css("border","0px ");
    $(this).css("border","2px solid black");
    $(this).css("border-radius","5px");
    //prop改屬性物件
    $(".itemDemo>img").attr("src",$(this).children("img").prop("src"));
    
})
