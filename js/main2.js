// var one = document.getElementById('one');
// var two = document.getElementById('two');
// var three = document.getElementById('three');
// var four = document.getElementById('four');
// var five = document.getElementById('five');
// var six = document.getElementById('six');
// var seven = document.getElementById('seven');
// var eight = document.getElementById('eight');
// var nine = document.getElementById('nine');
// var ten = document.getElementById('ten');
// var eleven = document.getElementById('eleven');
// var twelve = document.getElementById('twelve');
// var thirteen = document.getElementById('thirteen');
// var fourteen = document.getElementById('fourteen');
// var place = document.getElementById('star');
// var click = document.getElementById('click');
// // Mouse Move and different factors affecting the direction and speeds
// function move(){
//   one.style.left = 500 - ((event.x)/8) + "px";
//   one.style.top = 190 + ((event.y)/8) + "px";
//   two.style.left = 100 - ((event.x)/15) + "px";
//   two.style.top =  200 - ((event.y)/15) + "px";
//   three.style.left = 582 + ((event.x)/5) + "px";
//   three.style.top = 185 + ((event.y)/5) + "px";
//   four.style.left = 715 - ((event.x)/6) + "px";
//   four.style.top =  215 - ((event.y)/3) + "px";
//   five.style.left = 1200 - ((event.x)/7) + "px";
//   five.style.top = 190 - ((event.y)/7) + "px";
//   six.style.left = 700 - ((event.x)/6) + "px";
//   six.style.top = 190 + ((event.y)/6) + "px";
//   seven.style.left = 300 - ((event.x)/5) + "px";
//   seven.style.top = 190 + ((event.y)/5) + "px";
//   eight.style.left = 700 - ((event.x)/3) + "px";
//   eight.style.top = 100 - ((event.y)/20) + "px";
//   nine.style.left = 405 + ((event.x)/8) + "px";
//   nine.style.top = 600 - ((event.y)/15) + "px";
//   ten.style.left = 850 - ((event.x)/8) + "px";
//   ten.style.top = 450 + ((event.y)/8) + "px";
//   eleven.style.left = 900 - ((event.x)/5) + "px";
//   eleven.style.top = 600 + ((event.y)/9) + "px";
//   twelve.style.left = 1000 - ((event.x)/4) + "px";
//   twelve.style.top = 400 + ((event.y)/10) + "px";
//   thirteen.style.left = 900 - ((event.x)/3) + "px";
//   thirteen.style.top = 400 + ((event.y)/5) + "px";
//   fourteen.style.left = 800 - ((event.x)/2) + "px";
//   fourteen.style.top = 400 - ((event.y)/5) + "px";
// }
//
// addEventListener('mousemove', move);
//
// star.addEventListener('click', appear1);
//
// function appear1() {
//   one.classList.remove('off');
//   star.removeEventListener('click', appear1);
//   star.addEventListener('click', appear2);
// }
// function appear2() {
//   two.classList.remove('off');
//   star.removeEventListener('click', appear2);
//   star.addEventListener('click', appear3);
// }
// function appear3() {
//   three.classList.remove('off');
//   star.removeEventListener('click', appear3);
//   star.addEventListener('click', appear4);
// }
// function appear4() {
//   four.classList.remove('off');
//   star.removeEventListener('click', appear4);
//   star.addEventListener('click', appear5);
// }
// function appear5() {
//   five.classList.remove('off');
//   star.removeEventListener('click', appear5);
//   star.addEventListener('click', appear6);
// }
// function appear6() {
//   six.classList.remove('off');
//   star.removeEventListener('click', appear6);
//   star.addEventListener('click', appear7);
// }
// function appear7() {
//   seven.classList.remove('off');
//   star.removeEventListener('click', appear7);
//   star.addEventListener('click', appear8);
// }
// function appear8() {
//   eight.classList.remove('off');
//   star.removeEventListener('click', appear8);
//   star.addEventListener('click', appear9);
// }
// function appear9() {
//   nine.classList.remove('off');
//   star.removeEventListener('click', appear9);
//   star.addEventListener('click', appear10);
// }
// function appear10() {
//   ten.classList.remove('off');
//   star.removeEventListener('click', appear10);
//   star.addEventListener('click', appear11);
// }
// function appear11() {
//   eleven.classList.remove('off');
//   star.removeEventListener('click', appear11);
//   star.addEventListener('click', appear12);
// }
// function appear12() {
//   twelve.classList.remove('off');
//   star.removeEventListener('click', appear12);
//   star.addEventListener('click', appear13);
// }
// function appear13() {
//   thirteen.classList.remove('off');
//   star.removeEventListener('click', appear13);
//   star.addEventListener('click', appear14);
// }
// function appear14() {
//   fourteen.classList.remove('off');
//   star.removeEventListener('click', appear14);
//   star.addEventListener('click', rmvStar);
// }
// function rmvStar() {
//   star.classList.add('off');
//   click.classList.add('off');
//   star.removeEventListener('click', rmvStar);
// }
