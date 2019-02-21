$(document).ready(function(){
  $("#myForm").submit(function(){
   var language = $("input:radio[name=language]:checked").val();
   var keyword = $("input:radio[name=keyword]:checked").val();
   alert(language+" "+keyword);
  });



});
