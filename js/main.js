var colors = ["rgb(218, 88, 88)", "rgb(146, 108, 207)", "rgb(233, 188, 71)", "rgb(250, 247, 1)", "rgb(167, 115, 252)", "rgb(189, 210, 114)", "rgb(110, 175, 181)", "rgb(110, 210, 228)", "rgb(1, 122, 69)", "rgb(208, 79, 31)", "rgb(41, 169, 186)"
, "rgb(149, 28, 180)", "rgb(240, 161, 168)", "rgb(255, 232, 133)", "rgb(255, 199, 56)", "rgb(133, 67, 187)", "rgb(155, 106, 227)", "rgb(68, 237, 155)", "rgb(171, 116, 52)", "rgb(227, 76, 49)"];

var emojis = ['💩', '✌️', '👻', '⚡️', '🌻', '🤙', '👽', '🍕', '🏝', '☀️', '🥑', '🔮', '🌎'];

function addBubble() {

  var checkBoxState = $('input[type=checkbox]').prop('checked');

  if (checkBoxState) {

    $(".container").append('<div class="shape animated pulse infinite"></div>');
    var circle = $(".shape").last();
    var randomColorNum = Math.random() * (colors.length);
    randomColorNum = Math.floor(randomColorNum);
    console.log("random Color Num = " + randomColorNum);
    circle[0].style.left = event.x - 50 + "px";
    circle[0].style.top = event.y - 50 + "px";
    circle[0].style.backgroundColor = colors[randomColorNum];
    
  } else {

    $(".container").append('<div class="emoji animated pulse infinite"></div>');
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

addEventListener('click', addBubble);
