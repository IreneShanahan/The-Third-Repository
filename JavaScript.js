/*  JavaScript is case sensitive 
use camelcase such as ThePaleoGuy 
constants are all caps CONSTANTLYUPPERCASE
White space doesn't matter in Js only for the human reading the code. 
End each sentence with a semicolon ; it adds structure to your code.
Variables start with lowercase eg var greenDuck
Objects and Classes start with uppercase letter eg var date = Date ();
Use // for one line comments.*/

/************************************Carousel timing code*************/

$(document).ready(function(){
    $('.carousel').carousel({
      interval:8000
        });
    });

/************************************Order your copy code*************/


$(document).ready(function() {
  $("#downloadmessage").hide();
  $(".btn-warning").click(function() {
    $("#downloadmessage").show();
  });
});

