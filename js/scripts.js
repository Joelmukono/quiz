$(document).ready(function(){
  $("#myForm").submit(function(){
   var language = $("input:radio[name=language]:checked").val();
   alert(language);
  });



});
