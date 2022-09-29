$(document).ready(function(){

    // console.log(123);
    
    let arr = "";
    let priceArr = [1580, 1580, 1580, 1580, 1580, 1580, 1580, 1580 ,1580, 1580, 1580, 1580, 1580 ];
    let clothesArr = ["","COURT CASPER VLC","COURT CASPER VLC", "COURT CASPER VLC","COURT PALISADES STRAP", "COURT PALISADES STRAP","COURT PALISADES STRAP","COURT PALISADES STRAP","COURT PALISADES STRAP","TUBES COMFORT 200 STRAP","TUBES COMFORT 200 STRAP","TUBES COMFORT 200 STRAP","TUBES COMFORT 200 STRAP" ]
    for(var i = 1; i < 10; i++){
        arr += `<div class="col-sm-6 col-md-4 col-lg-3 try">
        <div class="picDemo">
        <img width='70%' src="./img/kid/kid${i}.jpg" alt="">

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