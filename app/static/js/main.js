// randomizing list of placeholders
var foods = ['boba', 'ice cream', 'donuts', 'burritos', 'pizza', 'sushi', 'korean bbq', 'ramen', 'mac n cheese'];
var places = ['los angeles', 'san francisco', 'huntington beach', 'new york city', 'santa monica', 'chicago', 'boston', 'houston'];

var i = Math.round(Math.random()*(foods.length-1));
var j = Math.round(Math.random()*(places.length-1));
document.getElementById('food').placeholder = foods[i];
document.getElementById('location').placeholder = places[j];

// modal
function hasClass(el, className) {
    return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += ' ' + className;
}

function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('\\b'+ className+'\\b', 'g'), '');
}

document.getElementById('about').addEventListener("click", function() {
  var target = this.getAttribute('data-target');
  var html = document.getElementsByTagName('html')[0];
  addClass(html, 'is-clipped');
  var target_html = document.querySelector(target);
  addClass(target_html, 'is-active')
});

document.getElementsByClassName('modal-close')[0].addEventListener('click', function() {
  var html = document.getElementsByTagName('html')[0];
  removeClass(html, 'is-clipped');
  var target_html = document.querySelector('#about-modal');
  removeClass(target_html, 'is-active');
});
