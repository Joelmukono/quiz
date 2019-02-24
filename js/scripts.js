$(document).ready(function(){
  $("#myForm").submit(function(event){
   event.preventDefault();
   var language = $("input:radio[name=language]:checked").val();//scripting
   var keyword = $("input:radio[name=keyword]:checked").val();//var
   var tag = $("input:radio[name=tag]:checked").val();//script
   var popUp = $("input:radio[name=popUp]:checked").val();//alert
   var callFunction = $("input:radio[name=callFunction]:checked").val();//function()
   var method = $("input:radio[name=method]:checked").val();//pop
   var back = $("input:radio[name=back]:checked").val();//reverse()
   var statement = $("input:radio[name=statement]:checked").val();//if()
   var score = 0;
   var answers=["scripting","var","script","alert","function","pop","reverse","if"];

   //if(language == answers[0]){
       //alert(score+=2);

   //}else if(language != answers[0]){
        //alert(score=0);
   //}
   var inputs=[language,keyword,tag,popUp,callFunction,method,back,statement];

   inputs.forEach(function(elements){
     answers.forEach(function(elements2){
       if(elements == elements2 ){
         
       }

     });

   });

   });


  });
