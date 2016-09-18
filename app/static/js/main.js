// randomizing list of placeholders
var foods = ['boba', 'ice cream', 'donuts', 'burritos', 'pizza', 'sushi', 'korean bbq', 'ramen', 'mac n cheese'];
var places = ['los angeles', 'san francisco', 'huntington beach', 'new york city', 'santa monica', 'chicago', 'boston', 'houston'];

var i = Math.round(Math.random()*(foods.length-1));
var j = Math.round(Math.random()*(places.length-1));
document.getElementById('food').placeholder = foods[i];
document.getElementById('location').placeholder = places[j];


// initializing baffle
// var s=["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","<",">","/"];
// var text = ["getting", "eating", "drinking", "snacking on", "binging on"];
//
// let b = baffle('#verb', {
//   characters: s
// });
//
// function baff() {
//   var k = Math.round(Math.random()*(text.length-1));
//   b.start()
//   .text(currentText => text[k])
//   .reveal(1500);
// }
//
//
// setInterval(baff, 3500);
