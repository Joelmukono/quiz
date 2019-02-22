$(document).ready(function(){
  $("#myForm").submit(function(){
   var language = $("input:radio[name=language]:checked").val();
   var keyword = $("input:radio[name=keyword]:checked").val();
   var tag = $("input:radio[name=tag]:checked").val();
   var popUp = $("input:radio[name=popUp]:checked").val();
   var method = $("input:radio[name=method]:checked").val();


   if(language=="undefined"&& keyword=="undefined" ){

   }
   else if (language == "scripting" && keyword == "var" && tag == "script" && popUp =="alert()"){
     alert("correct");

    }

   else{
     alert("wrong");
   }
   var points=0;


  });



});
