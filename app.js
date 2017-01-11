var newBox = 0;

$(function(){
  $('#createBox').click(function() {
    var randomColor = "#"
    console.log("the button was clicked");
    for (var i = 0; i < 6; i++) {
      randomColor += randomNumber(0,9);
      console.log(randomColor);
    }
    $('html').css('background-color', randomColor);
    $('body').append("<div class = 'box' id = 'box' style = 'background-color: " + randomColor + ";'><button id = 'x'>X</button></div>")
  });
  $('body').on('click', '.box', function(){
    $(this).css('background-color', 'black');
  });
  $('body').on('click', '#x', function(){
    $(this).closest('.box').remove();
  });
})

function randomNumber(min, max){
return Math.floor(Math.random() * (1 + max - min) + min);
}
