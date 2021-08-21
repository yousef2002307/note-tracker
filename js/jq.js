$(document).ready(function(){
    
$(".notes .btn-primary").on("click",function(){
$(".jopopup").fadeIn(500);
$(".jopopup .content-text").text($(this).prev("p").text());
});
$(".jopopup i").on("click",function(){
$(".jopopup").fadeOut(500);
});

});