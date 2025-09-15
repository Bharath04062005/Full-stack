$(document).ready(function(){
    $("input").focus(function(){
        $(this).mouseenter(function(){
         $(this).css("background-color","yellowv ");
        })
        
    })
    $("#add").click(function(){
        let val=$("input").val();
        if(val){
        $("ul").append(`<li>${val}</li>`);
        }
    })
    $("#remove").click(function(){
        $("ul li:first").remove();
    })
})