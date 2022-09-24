$(document).ready(function(){

// console.log(123);

let arr = "";
let priceArr = [1180, 1180, 1180, 1980, 1980, 1980, 2680, 2680 ,1980, 1180, 1180, 1180, 2680 ];
let clothesArr = ["","V領排汗T恤","V領排汗T恤", "刷毛圓領上衣","刷毛圓領上衣", "刷毛連帽上衣","刷毛連帽上衣","刷毛連帽上衣","刷毛連帽上衣","印花短袖T恤","印花短袖T恤","印花短袖T恤","刷毛連帽上衣" ]
for(var i = 1; i < 13; i++){
    arr += `<div class="col-sm-6 col-md-4 col-lg-3 try">
    <div class="picDemo">
    <img src="./img/men/men${i}.jpeg" alt="">
    </div>
    <hr>
    <div class="productName h4">${clothesArr[i]}
    </div>
    <div class="productPrice">TWD ${priceArr[i]}
    </div>
</div>`;
}

$("#autoFill").html( arr );





})