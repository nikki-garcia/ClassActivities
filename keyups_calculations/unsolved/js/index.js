$(".calculate").keyup(function(){

    // add carrots variable here
    var carrotPrice = carrots * 1.00;

    // add carrotsPrice variable here

    var calculate = parseInt($('#carrots').val() || 0;
  

    // add onions variable here
    var onionPrice = onions * 3.00;

    // add onionsPrice variable here
    var calculate = parseInt($('#onions').val() || 0;

    // add potatoes variable here
    var potatoePrice = onions * 2.50;
 
    // add potatoesPrice variable here
    var calculate = parseInt($('#potatoe').val() || 0;

    // add total variable here

    // set totalPrice value equal to total variable
    
});



$('#qty, #price').on('input',function() {
    var qty = parseInt($('#qty').val());
    var price = parseFloat($('#price').val());
    $('#total').val((qty * price ? qty * price : 0).toFixed(2));
});