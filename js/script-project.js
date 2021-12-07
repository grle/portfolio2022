
////////////NAVIGATION BAR

// $( document ).ready(function() {
//
//     $( "#menu-icon" ).click(function() {
//         $( ".mobile-menu" ).fadeIn( 200 );
//
//         $( "body" ).css( "overflow", "hidden" );
//
//         $( ".mobile-menu .link" ).click(function() {
//             $( ".mobile-menu" ).fadeOut( 200 );
//             $( "body" ).css( "overflow", "visible" );
//         });
//     });
//
//     $( ".mobile-menu .icon" ).click(function() {
//         $( ".mobile-menu" ).fadeOut( 200 );
//
//         $( "body" ).css( "overflow", "visible" );
//     });
//
//     var currentScroll = $(window).scrollTop();
//
//     $(window).scroll(function(){
//         var newScroll = $(window).scrollTop();
//
//         currentScroll = newScroll;
//     });
// });

/////SCROLL UP BUTTON
//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
