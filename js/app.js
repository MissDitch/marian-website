$(document).foundation()
$(function() {

// https://material.io/develop/web/components/animation/
// tThese functions handle prefixing across various browsers


// import {getCorrectEventName} from './scss/@material/animation/dist';
// import {getCorrectPropertyName} from './scss/@material/animation/dist';

// const eventToListenFor = getCorrectEventName(window, 'animationstart');
// const propertyToListenFor = getCorrectPropertyName(window, 'animationstart');

$(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
    $("body").addClass("sticky-shrinknav-wrapper");
    } else{
    $("body").removeClass("sticky-shrinknav-wrapper");
    }
});
$('[data-curtain-menu-button]').click(function(){
    $('body').toggleClass('curtain-menu-open');
})

 // cache the window object
 var $window = $(window);

 // Parallax background effect
 $('section[data-type="background"]').each(function() {

     var $bgobj = $(this);  // assigning the object

     $window.scroll(function() {

         // scroll the background at var speed
         // the yPos is a negative value because we're scrolling it UP!

         var yPos = -($window.scrollTop() / $bgobj.data('speed'));

         // Put together our final background position
         var coords = '50% '+ yPos + 'px';

         // Move the background
         $bgobj.css({ backgroundPosition: coords });

     }); // end window scroll

 });

// managing active state
var top = document.getElementById("top");
var topMenuLinks= top.getElementsByTagName("a");
for (var i = 0; i < topMenuLinks.length; i++) {
    // console.log("top menu links are " + topMenuLinks[i]);
}

var bottom = document.getElementById("bottom");
var bottomMenuLinks= bottom.getElementsByTagName("a");
for (var i = 0; i < bottomMenuLinks.length; i++) {
    // console.log("bottom menu links are " + bottomMenuLinks[i]);
}

var currentPath = window.location.pathname.split('/');
// console.log("currentPath is " + currentPath);
var current = currentPath[currentPath.length - 1];
// console.log("current is " + current);

// console.log(werk);

for (var i = 0; i < topMenuLinks.length; i++) {
    var currentTopSplit = topMenuLinks[i].href.split('/');
    // console.log("topmenulink splitted" + currentTopSplit);
    var actualUrl = currentTopSplit[currentTopSplit.length - 1];
    // console.log("actual url is " + actualUrl);
    if(actualUrl == current)  {
        // console.log("it's a match! " + topMenuLinks[i].href);
        topMenuLinks[i].className = "active";
    }
    if(actualUrl.includes("stad")){
        // console.log("anchor includes stad: " + actualUrl);
        topMenuLinks[0].className = "active"

    }
}



});







