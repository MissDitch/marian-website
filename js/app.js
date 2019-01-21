$(document).foundation()
$(function() {

// https://material.io/develop/web/components/animation/
// tThese functions handle prefixing across various browsers


// import {getCorrectEventName} from './scss/@material/animation/dist';
// import {getCorrectPropertyName} from './scss/@material/animation/dist';

// const eventToListenFor = getCorrectEventName(window, 'animationstart');
// const propertyToListenFor = getCorrectPropertyName(window, 'animationstart');

// var url = window.location.pathname,
//         urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
//     $('#top a').each(function () {
//         if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
//             $(this).addClass('active');
//             $(this).parent().previoussibling().find('a').removeClass('active');
//         }

// // Get the container element
// var btnContainer = document.getElementById("top");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByTagName("a");

// var url = window.location.pathname;
// // var urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");

//     // If there's no active class
//     if (current.length > 0) {
//       current[0].className = current[0].className.replace(" active", "");
//     }

//     // Add the active class to the current/clicked button
//     this.className += " active";
//   });
// }
// var nav = document.getElementById('top'),
//         anchor = nav.getElementsByTagName('a'),
//         current = window.location.pathname.split('/')[1];
//         for (var i = 0; i < anchor.length; i++) {
//         if(anchor[i].href == current) {
//             anchor[i].className = "active";
//         }
//     }
    // $(function() {
    //     var url = location.origin + location.pathname;
    //     $('top a[href^="' + url + '"]')
    //       .closest('li')
    //       .addClass('active');
    //   });


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




});







