$(".calculate").keyup(function(){
  var carrots = parseInt($("#carrots").val());
  var carrotPrice = carrots * 1.00;

  // var onions = parseInt($("#onions").val()) || 0;
  var onionPrice = onions * 3.00;

  // var potatoes = parseInt($("#potatoes").val()) || 0;
  var potatoePrice = potatoes * 2.50;

  var total = potatoePrice + onionPrice + carrotPrice;

  $('.totalPrice').val(total);
});
