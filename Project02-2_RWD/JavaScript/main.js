$(document).ready(function(){
    
    if($(window).width()>600){
        $(".cellIntro").hide()
        $(".body_container").show();
        console.log("hiiiiiii");
    }else{
        $(".cellIntro").show();
        $(".cards_area").hide()
        $(".body_container").hide();
        console.log("nooooooo");
    }

    $(window).resize(function () {  
        if($(window).width()>600){
        $(".cellIntro").hide()
        $(".cards_area").show()
        $(".body_container").show();
        console.log("hiiiiiii");
    }else{
        $(".cellIntro").show();
        $(".body_container").hide();
        $(".cards_area").hide()
        console.log("nooooooo");
    } });




    console.log("document.height:" + $(document).height());//整個網頁高度
    console.log("window.height"+$(window).height());//瀏覽器高度
    console.log("body.innerHeight"+$("body").innerHeight());//整個網頁高度

$(document).on("click",$("body"),function(event){
    console.log(event.pageX,event.pageY);//滑鼠點擊座標
})

$(document).on("scroll",function(){
    console.log("scrolled!");
    console.log($(window).scrollTop());
    if($(window).scrollTop()>300){
        $('.list_2').hide();
    }else{
        $('.list_2').show();

    }
    // console.log($(document).offset().top);
    // if($(window.pageYOffset) < 1500){
    //     $('.list_2').show();
    //     console.log(123);
    //     console.log($(window.pageYOffset));
    // }else{
    //     $('.list_2').hide();
    //     console.log(456);
    //     console.log($(window.pageYOffset));

    // }
})

    // $(window).scroll(function(){
    //     if ( $(window).offset().top < 1000) {
    //         $('.list_2').show();
 
    //      } else {
    //         $('.list_2').hide();
    //      }
    // })

    // $(document).mousemove(function(event){
    //     if(event.pageY > 500){
    //         $(".list_2").hide();
    //     }else{
    //         $(".list_2").show();
    //     }
    // });

// 目前這個版本雖動畫成功，但點擊結束後會留下空位
    // $("img").on("click", function(){
    //     var small = $("<img src=\"./img/shoes2022Q3-1.png\">");
    //     small.css("width","10%");
    //     small.addClass("fly");
    //     $(this).after(small);
    // })
// 第二個方法：將小圖隱藏於大圖上方或後方，點擊後小圖「顯示」（應該是用.add()加上CSS和動畫)
//實驗結果：只會進行一次，無法重複執行（大概是因為我是使用addClass裡面只進行一次的動畫
//若嘗試使用jQuery內建動畫，說不定可以重複執行;且將小圖z-index設為-1,這樣一來應該不需要重複更改display屬性
//小圖若設zindex為-1則會跑到背景圖下面，嘗試將其設為0也無法改善問題，猜測目前最佳解法應是改變opacity為0，在動畫時在改為1





    // $("[src*='1']").on("click", function(){
    //     $("#small01").addClass("fly"); 
    // });
    // $("[src*='shoes2022Q3-2']").on("click", function(){
    //     $("#small02").addClass("fly"); 
    // });
    // $("[src*='shoes2022Q3-3']").on("click", function(){
    //     $("#small03").addClass("fly"); 
    // });
    // $("[src*='-4']").on("click", function(){
    //     $("#small04").addClass("fly"); 
    // });

    // $("[src*='1']").on("mouseout", function(){
    //     $("#small01").css("opacity","1");
    //     $("small01").removeClass("fly");
    //     console.log(123);
    // })


    // $("img").on("click", function(){
    //     $("#small01").animate({
    //         right:"500px",
    //         top:"-1000px",
    //         opacity:"1"
    //     },"slow"); 
    // });
    // $("img").on("mouseout", function(){
    //     $("#small01").css("opacity","0");
    //     $("#small01").animate({
    //         right:"0",
    //         top:"0",
    //         opacity:"0"
    //     },); 
    // })
//老師提供的解方，1.使用html重新複寫div內容
//2. 在圖片區外匡加上一個div（內含圖片本身和小圖的空div）
//3.每次點擊這個區域（不是只有圖片），變重新複寫內部div的html框架
    $("#item01").on("click", function(){
        $("#small01").html(`<div class="fly">
        <img src="./img/shoes2022Q3-1.png" width=50% alt="">
    </div>`);
    });
    $("#item02").on("click", function(){
        $("#small02").html(`<div class="fly">
        <img src="./img/shoes2022Q3-2.png" width=50% alt="">
    </div>`);
    });$("#item03").on("click", function(){
        $("#small03").html(`<div class="fly">
        <img src="./img/shoes2022Q3-3.png" width=50% alt="">
    </div>`);
    });$("#item04").on("click", function(){
        $("#small04").html(`<div class="fly">
        <img src="./img/shoes2022Q3-4.png" width=50% alt="">
    </div>`);
    });

});