$(document).ready(function(){

    $("#addItem").on("click",function(){
        
        //clone的預設是false，所以函式不會執行，需改為true
        var newItem = $(".item").eq(0).clone(true); //複製最後一項
        newItem.find("div").text($("#addItemVal").val());
        //下面這個方法會改到文字和叉叉的內文，後改用find()去找某個特定的元素就解決問題了
        // newItem.children($(".itemContent")).text($("#addItemVal").val());
        //加上新項目到清單中
        $(".listArea").children($(".item").eq(-1).after(newItem));



        // var newwItem = 



    });//addItem function end



    $(".deleteItem").on("click",function(){
        $(this).parent($("div")).remove();
    })
$

// $(".checkbox").on("click",function(){
//     console.log(123);
//     if( $(".checkbox").prop("checked") == true){
//         console.log(456);
//         // $(".itemContent").toggleClass("crossLine");
//         // 這個方法會影響到其他items
//         //$(this).siblings("div").addClass("crossLine");
//         $(this).next("div").addClass("crossLine");
//         console.log($(this));
//     }else{
//         console.log(789);
//         //這個方法會影響到其他items
//         //$(this).siblings("div").removeClass("crossLine");
//         $(this).next("div").removeClass("crossLine");
//         console.log($(this));

//     }
// })


//莫名解掉上面的bug...
//把範圍改成全部便解決問題:)
$(".item").click(function(){
    // $(this).prev("input").attr("checked","checked");
    // $(this).toggleClass("crossLine");
    $(this).find($(".itemContent")).toggleClass("crossLine");
})






});//the end