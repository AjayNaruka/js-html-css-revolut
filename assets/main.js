$(function(){

  var activeIndex;
  var isActive = false;

  //HOVER
 $(".main-list .hoverable").mouseenter(function(){
   if(!isActive){ // PER APRIRNE SOLO UNA ALLA VOLTA CON HOVER
    var clickedLi = $(this).find(".drop-menu");
    clickedLi.addClass("active");
    isActive=true;
    activeIndex = $(this).index();
    console.log("l'indice aperto e' : "+activeIndex)
   }
    
 })

 //CHIUSURA -> due casi
 $(".main-list .hoverable").click(function(){
   var clickedIndex = $(this).index();
   console.log("hai cliccato su index: "+clickedIndex);   
   console.log("hai cliccato su index: "+clickedIndex);   
   if(isActive){
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
 })



})