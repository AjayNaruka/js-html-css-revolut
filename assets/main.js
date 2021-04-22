$(function(){

  var activeIndex;
  var isActive = false;

  //HOVER
 /* $(".main-list .hoverable").mouseenter(function(){
   if(!isActive){ // PER APRIRNE SOLO UNA ALLA VOLTA CON HOVER
    var hoverLi = $(this).find(".drop-menu");
    hoverLi.addClass("active");
    isActive=true;
    activeIndex = $(this).index();
    console.log("l'indice aperto e' : "+activeIndex)
   }  
 })
 */
 //CHIUSURA -> due casi
 /* $(".main-list .hoverable").click(function(){
   var clickedIndex = $(this).index();
   console.log("hai cliccato su index: "+clickedIndex);   
   console.log("hai cliccato su index: "+clickedIndex);   
   if(isActive){ // ENTRO SOLO LE NE HO UN MENU ATTIVO
     //CASO 1:  SE CLICCO LO STESSO
     if($(this).index()===activeIndex){ 
      var clickedLi = $(this).find(".drop-menu.active");
      clickedLi.removeClass("active")
      isActive=false;
      activeIndex =null;
      console.log("rimosso cliccando lo stesso link")
     }
     //CASO 2: ho cliccato un diverso link => chiudo il corrente e apro quello nuovo
     else{ 
      var alreadyOpen =$(".hoverable .drop-menu.active");
      alreadyOpen.removeClass("active")
      var clickedLi = $(this).find(".drop-menu");
      clickedLi.addClass("active")
      activeIndex=clickedIndex
      console.log("rimosso aprendo un link diverso")
     }
   }
 }) */

//////////////////////////////
// CORREZIONE
//////////////////////////////
$(".hoverable").mouseenter(function(){
  //RIMUOVO DA TUTTI I MENU LA CLASSE ACTIVE
  $(".drop-menu").removeClass("active")
  //AGGIUNGO ACTIVE A THIS
  $(this).find(".drop-menu").addClass("active")
})

$(".hoverable").click(function(){ // QUANDO CLICCO HO GIA FATTO UN HOVER DI PER SW
  $(this).find(".drop-menu").toggleClass("active")
})

})


