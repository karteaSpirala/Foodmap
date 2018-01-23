

/*

$("splashView").fadeOut(3000);
$("principalView").fadeIn(1000);


$(document).ready(function(){
  $("#ocultar").on( "click", function() {
    $('#splash-view').hide(3000); //muestro mediante id

   });
  $("#mostrar").on( "click", function() {
    $('#principal-view').show(1000); //oculto mediante id

  });
});


var splashView = $("#splash-view");
var principalView = $("#principal-view");

$('h1').click(function() {
  $("#splash-view").hide(3000);
});

$('div').click(function() {
  $("principal-view").show(1000);
});

*/

$(document).ready(function(){
 setTimeout(function(){
   window.location.href = "views/splash.html";
 }, 2000);
});
