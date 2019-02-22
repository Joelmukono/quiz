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

  answers=["scripting","var","script","alert","function","pop","reverse","if"];

   if(language == answers[0] && keyword == answers[1] &&
      tag == answers[2] && popUp == answers[3] &&
      callFunction == answers[4] && method == answers[5] && back == answers[6]  &&
      statement == answers[7]){

         alert("you got all correct");

   }else if(language != answers[0] && keyword == answers[1] &&
           tag == answers[2] && popUp == answers[3] &&
           callFunction == answers[4] && method == answers[5] && back == answers[6]  &&
           statement == answers[7]){

              alert("you got 7 correct")

   }else if(language == answers[0] && keyword != answers[1] &&
           tag == answers[2] && popUp == answers[3] &&
           callFunction == answers[4] && method == answers[5] && back == answers[6]  &&
           statement == answers[7]){

              alert("you got 7 correct")

   }else if(language == answers[0] && keyword == answers[1] &&
            tag != answers[2] && popUp == answers[3] &&
            callFunction == answers[4] && method == answers[5] && back == answers[6]  &&
            statement == answers[7]){

              alert("you got 7 correct")

   }else if(language == answers[0] && keyword == answers[1] &&
            tag == answers[2] && popUp != answers[3] &&
            callFunction == answers[4] && method == answers[5] && back == answers[6]  &&
            statement == answers[7]){

              alert("you got 7 correct")

   }


  });



});
