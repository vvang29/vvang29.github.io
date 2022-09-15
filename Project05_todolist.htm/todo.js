$(document).ready(function(){

    $("#addItem").on("click",function(){
        
        //clone的預設是false，所以函式不會執行，需改為true
        // var newItem = $(".item").eq(0).clone(true); //複製最後一項
        // newItem.find("div").text($("#addItemVal").val());
        //下面這個方法會改到文字和叉叉的內文，後改用find()去找某個特定的元素就解決問題了
        // newItem.children($(".itemContent")).text($("#addItemVal").val());
        //加上新項目到清單中
        // $(".listArea").children($(".item").eq(-1).after(newItem));
        let add = $("#addItemVal").val();
        if(add == ''){  //使用者需輸入內容才可新增項目
            alert("Please fill in the box.");
        }else{
            var inputValue = $("#addItemVal").val();
            $(".listArea").append(
              `<div class="item">
              <div class="itemContent">${inputValue}</div>
              <button type="button" class="deleteItem">X</button>
              </div> `
            );
        }

    });//addItem function end

    

    // $(".deleteItem").on("click",function(){
    //     $(this).parent($("div")).remove();
    // })
    // $(".item").on("click",".deleteItem",function(){
    //     $(this).parent($("div")).remove();
    // })
//以上兩個方法會使新增的項目無法執行刪除功能
//解決辦法：on內部需要加上selector(append中的節點是在整個文檔加載完之後開始添加，頁面不會爲append的元素初始化添加點擊事件，故使用這種方式動態添加的節點中的click事件沒有生效。)
    $(document).on("click",".deleteItem",function(){
        $(this).parent($("div")).remove();
    })

// $(".checkbox").on("click",function(){
//     if( $(".checkbox").prop("checked") == true){
//         // $(".itemContent").toggleClass("crossLine");
//         // 這個方法會影響到其他items
//         //$(this).siblings("div").addClass("crossLine");
//         $(this).next("div").addClass("crossLine");
//         console.log($(this));
//     }else{
//         //這個方法會影響到其他items
//         //$(this).siblings("div").removeClass("crossLine");
//         $(this).next("div").removeClass("crossLine");
//         console.log($(this));

//     }
// })


//莫名解掉上面的bug...
//1把範圍改成全部便解決問題:)
//2:append異步問題，已改善
$(document).on("click",".item",function(){
    $(this).find($(".itemContent")).toggleClass("crossLine");
})





});//the end