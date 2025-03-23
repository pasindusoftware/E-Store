let itemvali = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let items = ['Oranges','Apples','Carrots','Bananas','Tomato','Garlic','White Bread','Chocolate Cake','StrawBerry','Chocolate Milk Shake','Orange Drink','Fresh Pumpkin','Fresh Avacado','Muffin'];
let price = [11.75,14.75,7.75,8.75,4.75,1.75,3.75,20.75,21.75,8.75,3,5.50,6.50,1.00];
let pricet = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let qty = [1,1,1,1,1,1,1,1,1,1,1,1,1,1];
let icou = 0;
let qtyt = 0;
let em = 0;


for (let i = 0 ; i < 14 ; i++){
    let token = "item"+i;
    let tem = sessionStorage.getItem(token)
    tem =  parseInt(tem);
    if ( tem === 1){
        itemvali[i] = tem;
        pricet[i] = price[i];
        qtyt++;
    }
}


function caltot(){
    let sub = 0;
    for(let i of pricet){
        sub+=i;
    }
    return sub;
}

function uTotal(a) {
    let total = qty[a] * price[a];
    pricet[a] = total;
    $("#fin" + a).text("$" + total.toFixed(2));
    updateview();
}

function funp(a) {
    qty[a]++;
    $("#qtt" + a).text(qty[a]); 
    uTotal(a);
    updateview();
}

function funm(a) {
    if (qty[a] > 1) {
        qty[a]--;
        $("#qtt" + a).text(qty[a]); 
        uTotal(a);
    }
    updateview();
}

function updateview(){
    let tttt = caltot();
    $('#outcou').text(qtyt);
    $('#outsubt').text("$"+tttt);
    if(tttt>100){
        $('#outtotsub').text("$"+(tttt-10));
    }else{
        $('#outtotsub').text("$"+(tttt));
    }
    if(em === 0){
        $('#outtotsub').text("$00.00");
    }
}

$(document).ready(function(){
    
    while(icou<14){
        if(itemvali[icou]){
            let itemcon = '<div class = "item"><p class = "n">'+items[icou]+'</p><p class = "pr">$'+price[icou]+'</p><div class = "secqty"><button id = "btnm" onclick = "funm('+icou+')">-</button><p class = "qty" id = "qtt'+icou+'">'+qty[icou]+'</p><button id = "btnp" onclick = "funp('+icou+')" >+</button></div><p class = "pric" id = "fin'+icou+'">$'+price[icou]+'</p></div>';
            $('#itemlist').append(itemcon);
            em = 1;
        }
        icou++;
    }
    if(em === 0){
        let itemco = '<p id = "nothing">There Is Nothing In Cart !!!</p>';
        $('#itemlist').append(itemco);
    }

    updateview();

    $('#checkout').click(function(){
        let succ = '<div class="success-container"><div class="checkmark"></div><div class="success-text">Purchase Successful!</div></div>';
        $('.contbody').hide('');
        $('.bjhgy').hide('');
        $('.contv').append(succ);
        sessionStorage.clear();
    })


})

