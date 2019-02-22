$(document).ready(function(){
  $("#myForm").submit(function(){
   var language = $("input:radio[name=language]:checked").val();
   var keyword = $("input:radio[name=keyword]:checked").val();
   var tag = $("input:radio[name=tag]:checked").val();
   var popUp = $("input:radio[name=popUp]:checked").val();
   var callFunction = $("input:radio[name=callFunction]:checked").val();
   var method = $("input:radio[name=method]:checked").val();
   var reverse = $("input:radio[name=reverse:checked]").val();
   var statement = $("input:radio[name=statement:checked]").val();

   if (language == "scripting" && keyword == "var" && tag == "script" && popUp =="alert()" && callFunction=="function()" && method == "pop()" && reverse == "reverse()" && statement == "if()"){
       alert("correct");

    }
   else{
     alert("wrong");
   }



  });



});
