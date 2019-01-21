// import Swup from './././node_modules/swup/dist/swup.js';

// Swup has a several options that can be passed into a constructor as an object.

// const swup = new Swup();
// const swup = new Swup();
// only this line when included with script tag

var swup = new Swup({
    animationSelector: '[class*="swup-transition-"]'
});


function showSwup(swup) {
    return swup;
}
function getUrl(e) {
    console.log("event's baseURI is: " + window.location.href);
    console.log("swup-object contains this url: " + showSwup(swup).currentUrl);

//  return e.delegateTarget.baseURI;
}
var menuLinks = document.getElementsByClassName("menu-link");

for (var i = 0; i < menuLinks.length; i++) {
    console.log(menuLinks[i]);
    menuLinks[i].addEventListener("click", getUrl);
}
console.log("This is swup: " + swup);
// console.log("swup-object contains this url: " + showSwup(swup).currentUrl);

// var nav = document.getElementById("top");
// console.log("nav contains " + nav);
var anchor = document.getElementsByTagName("a");
for (var i = 0; i < anchor.length; i++) {
    console.log("anchors are " + anchor[i]);
}

var currentPath = window.location.pathname.split('/');
console.log("currentPath is " + currentPath);
// current = window.location.pathname.split('/')[4];
var current = currentPath[currentPath.length - 1];
console.log("current is " + current);
var current = currentPath[currentPath.length - 1];

// console.log("anchor = ",anchor,"current = ",current);

for (var i = 0; i < anchor.length; i++) {
if(anchor[i].href.includes(current)) {
    console.log("i = " + i + " " + anchor[i].href);
anchor[i].className = "active";

}

}
// var url = window.location.url;

// swup.on('clickLink', function(url, current) {
//     console.log("I just clicked a link. The address bar shows: " +  url + ",  and this menu-item is active: " + current);

// });
function getEvent(e) {
    return e;
}


document.addEventListener('swup:clickLink', event => {
    // function getUrl(event) {
    //     console.log("event's baseURI is: " + window.location.href);
    //     console.log("swup-object contains this url: " + showSwup(swup).currentUrl);
    //     return event;
    // }
    // function getEvent(e) {
    //     return e;
    // }
    // var url = getEvent(event);
    // do something when link is clicked
    console.log("I just clicked a link. The address bar shows: " + window.location.pathname + ",  and this menu-item is active: " + current);
    // var event = getEvent(event);
    // console.log("event.delegateTarget is: " + url);
console.log("current after clicking is " + swup.transition.to);


});
