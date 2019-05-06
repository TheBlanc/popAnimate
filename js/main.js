var colors = ["rgb(222, 53, 53)", "rgb(152, 101, 233)", "rgb(249, 193, 47)", "rgb(250, 247, 1)", "rgb(167, 113, 255)", "rgb(215, 252, 80)", "rgb(108, 213, 223)", "rgb(0, 192, 227)", "rgb(0, 126, 69)", "rgb(242, 228, 39)", "rgb(81, 231, 177)"
, "rgb(86, 28, 180)", "rgb(240, 161, 168)", "rgb(69, 214, 218)", "rgb(255, 199, 56)", "rgb(133, 67, 187)", "rgb(155, 106, 227)", "rgb(68, 237, 155)", "rgb(242, 146, 34)", "rgb(227, 76, 49)"];

var emojis = ['💩', '✌️', '👻', '⚡️', '🌻', '🤙', '👽', '🍕', '🏝', '☀️', '🥑', '🔮', '🌎', '🌙', '🍝', '🍿', '🥟', '🍦', '❤️', '👁', '🙈', '🙉', '🙊', '🌵', '🍳', '🥞', '🍟', '🍣'];

function addBubble() {
  var checkBoxState = $('input[type=checkbox]').prop('checked');

  if (checkBoxState) {

    $(".container").append('<div class="thing shape animated pulse infinite"></div>');
    var circle = $(".shape").last();
    var randomColorNum = Math.random() * (colors.length);
    randomColorNum = Math.floor(randomColorNum);
    console.log("random Color Num = " + randomColorNum);
    circle[0].style.left = event.x - 50 + "px";
    circle[0].style.top = event.y - 50 + "px";
    circle[0].style.backgroundColor = colors[randomColorNum];

  } else {

    $(".container").append('<div class="thing emoji animated pulse infinite"></div>');
    var emojiObject = $(".emoji").last();
    var randomEmojiNum = Math.random() * (emojis.length);
    randomEmojiNum = Math.floor(randomEmojiNum);
    console.log("random Emoji Num = " + randomEmojiNum);
    emojiObject[0].style.left = event.x - 50 + "px";
    emojiObject[0].style.top = event.y - 50 + "px";
    emojiObject[0].innerHTML = emojis[randomEmojiNum];

  }
}

// 'stopPropagation()' stops the click event from working on top of the switch. This way the pop-up objects do not cover the switch and interfere with the functionality.
$('.controls').click(function(e) {
    e.stopPropagation();
});

$('.switchContainer').click(function(e) {
  var checkBoxState = $('input[type=checkbox]').prop('checked');
  if (checkBoxState) {
    $('#circle-label').toggle('clip');


//
  } else {
    console.log(checkBoxState);
    $('#emoji-label').toggle('clip');
  }
});

$('#clearButton').click(function(e) {
  $('.thing').remove();
});

addEventListener('click', addBubble);
