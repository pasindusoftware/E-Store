

$(document).ready(function(){

    let f_f = document.getElementById('fi_f');
    let f_v = document.getElementById('fi_v');
    let f_b = document.getElementById('fi_b');
    let f_d = document.getElementById('fi_d');

    $('#btnfil').click(function(){
        if(!f_f.checked){
            $('#it1').fadeOut(500);
            $('#it2').fadeOut(500);
            $('#it4').fadeOut(500);
            $('#it9').fadeOut(500);
            $('#it13').fadeOut(500);
        }else{
            $('#it1').fadeIn(500);
            $('#it2').fadeIn(500);
            $('#it4').fadeIn(500);
            $('#it9').fadeIn(500);
            $('#it13').fadeIn(500);
        }
        if(!f_v.checked){
            $('#it3').fadeOut(500);
            $('#it5').fadeOut(500);
            $('#it6').fadeOut(500);
            $('#it12').fadeOut(500);
        }else{
            $('#it3').fadeIn(500);
            $('#it5').fadeIn(500);
            $('#it6').fadeIn(500);
            $('#it12').fadeIn(500);
        }
        if(!f_b.checked){
            $('#it7').fadeOut(500);
            $('#it8').fadeOut(500);
            $('#it14').fadeOut(500);
        }else{
            $('#it7').fadeIn(500);
            $('#it8').fadeIn(500);
            $('#it14').fadeIn(500);
        }
        if(!f_d.checked){
            $('#it10').fadeOut(500);
            $('#it11').fadeOut(500);
        }else{
            $('#it10').fadeIn(500);
            $('#it11').fadeIn(500);
        }
    })

    $('#cart1').click(function(){
        sessionStorage.setItem("item0", "1");
    })

    $('#cart2').click(function(){
        sessionStorage.setItem("item1", "1");
    })

    $('#cart3').click(function(){
        sessionStorage.setItem("item2", "1");
    })

    $('#cart4').click(function(){
        sessionStorage.setItem("item3", "1");
    })

    $('#cart5').click(function(){
        sessionStorage.setItem("item4", "1");
    })

    $('#cart6').click(function(){
        sessionStorage.setItem("item5", "1");
    })

    $('#cart7').click(function(){
        sessionStorage.setItem("item6", "1");
    })

    $('#cart8').click(function(){
        sessionStorage.setItem("item7", "1");
    })

    $('#cart9').click(function(){
        sessionStorage.setItem("item8", "1");
    })

    $('#cart10').click(function(){
        sessionStorage.setItem("item9", "1");
    })

    $('#cart11').click(function(){
        sessionStorage.setItem("item10", "1");
    })

    $('#cart12').click(function(){
        sessionStorage.setItem("item11", "1");
    })

    $('#cart13').click(function(){
        sessionStorage.setItem("item12", "1");
    })

    $('#cart14').click(function(){
        sessionStorage.setItem("item13", "1");
    })
})

