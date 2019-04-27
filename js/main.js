var x;
var y;
var a = 0;

var d = document.getElementsByClassName('shape');

function pop() {

  if (a == 13)
    removeEventListener('click', pop);


  else {
    d[a].style.left = event.x - 50 + "px";
    d[a].style.top = event.y - 50 + "px";
    d[a].classList.remove('off');
    a += 1;
    console.log(a);
  }

}

// function move() {
//
//   if (a == 13)
//     removeEventListener('mousemove', move);
//
//
//   else if (a > 0) {
//     d[a].style.left = (event.x - 50)/10 + "px";
//     d[a].style.top = (event.y - 50)/5 + "px";
//     d[a].classList.remove('off');
//     console.log(a);
//   }
//
// }

addEventListener('click', pop);
// addEventListener('mousemove', move);
