//Event listener on button 
$("#submit").click(function() {

//Save name as variable
var name = $("#name").val();

//set the HTML of the paragraph element 
$("#buttonPusherInfo").html(name + 
    " was the last person to push the the button.");

//Set input value to be blank.
$("#name").val("");

});