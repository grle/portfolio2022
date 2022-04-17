
////////////NAVIGATION BAR

$( document ).ready(function() {

    $( "#menu-icon" ).click(function() {
        $( ".mobile-menu" ).fadeIn( 200 );

        $( "body" ).css( "overflow", "hidden" );

        $( ".mobile-menu .link" ).click(function() {
            $( ".mobile-menu" ).fadeOut( 200 );
            $( "body" ).css( "overflow", "visible" );
        });
    });

    $( ".mobile-menu .icon" ).click(function() {
        $( ".mobile-menu" ).fadeOut( 200 );

        $( "body" ).css( "overflow", "visible" );
    });

    var currentScroll = $(window).scrollTop();

    $(window).scroll(function(){
        var newScroll = $(window).scrollTop();

        currentScroll = newScroll;
    });
});

/////POSITION AWARE BUTTON
//https://codepen.io/aslamshoev/pen/gOMmRej
$(function() {
  $('.btn-posnawr')
    .on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
    })
    .on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
      		relX = e.pageX - parentOffset.left,
      		relY = e.pageY - parentOffset.top;
    	$(this).find('span').css({top:relY, left:relX})
    });
});

////////////SORT CATEGORY
////////////CLASS: instructional ux graphic
////////////BUTTON: btnAll btnInst btnUX btnGraph

/////SORT BY HIDE & FADE

$(".project").hide();
$(".ux").fadeIn();

$(document).ready(function(){
  $("#btnAll").click(function(){
    $(".project").hide();
    $(".project").fadeIn();
  });
  $("#btnInst").click(function(){
    $(".project").hide();
    $(".instructional").fadeIn();
  });
  $("#btnUX").click(function(){
    $(".project").hide();
    $(".ux").fadeIn();
  });
  $("#btnUXW").click(function(){
    $(".project").hide();
    $(".uxw").fadeIn();
  });

});

/////CATEGORY LINK
/////ONCLICK: displayALL() displayInstructional() displayUX() displayGraphic()
// function displayALL() {
//   document.getElementById("btnInst").style.color = "var(--dark)";
//   document.getElementById("btnInst").style['border-bottom-color'] = "var(--light-green)";
//   document.getElementById("btnUX").style.color = "var(--dark)";
//   document.getElementById("btnUX").style['border-bottom-color'] = "var(--light-green)";
//   document.getElementById("btnUXW").style.color = "var(--dark)";
//   document.getElementById("btnUXW").style['border-bottom-color'] = "var(--light-green)";
// }
// function displayInstructional() {
//   document.getElementById("btnInst").style.color = "var(--light-green)";
//   document.getElementById("btnInst").style['border-bottom-color'] = "var(--white)";
//   document.getElementById("btnUX").style.color = "var(--dark)";
//   document.getElementById("btnUX").style['border-bottom-color'] = "var(--light-green)";
//   document.getElementById("btnUXW").style.color = "var(--dark)";
//   document.getElementById("btnUXW").style['border-bottom-color'] = "var(--light-green)";
// }
// function displayUX() {
//   document.getElementById("btnInst").style.color = "var(--dark)";
//   document.getElementById("btnInst").style['border-bottom-color'] = "var(--light-green)";
//   document.getElementById("btnUX").style.color = "var(--light-green)";
//   document.getElementById("btnUX").style['border-bottom-color'] = "var(--white)";
//   document.getElementById("btnUXW").style.color = "var(--dark)";
//   document.getElementById("btnUXW").style['border-bottom-color'] = "var(--light-green)";
// }
// function displayUXW() {
//   document.getElementById("btnInst").style.color = "var(--dark)";
//   document.getElementById("btnInst").style['border-bottom-color'] = "var(--light-green)";
//   document.getElementById("btnUX").style.color = "var(--dark)";
//   document.getElementById("btnUX").style['border-bottom-color'] = "var(--light-green)";
//   document.getElementById("btnUXW").style.color = "var(--light-green)";
//   document.getElementById("btnUXW").style['border-bottom-color'] = "var(--white)";
// }
function displayALL() {
  document.getElementById("btnInst").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnUX").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnUXW").style['border-bottom-color'] = "var(--light-green)";
}
function displayInstructional() {
  document.getElementById("btnInst").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnUX").style['border-bottom-color'] = "var(--white)";
  document.getElementById("btnUXW").style['border-bottom-color'] = "var(--white)";
}
function displayUX() {
  document.getElementById("btnInst").style['border-bottom-color'] = "var(--white)";
  document.getElementById("btnUX").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnUXW").style['border-bottom-color'] = "var(--white)";
}
function displayUXW() {
  document.getElementById("btnInst").style['border-bottom-color'] = "var(--white)";
  document.getElementById("btnUX").style['border-bottom-color'] = "var(--white)";
  document.getElementById("btnUXW").style['border-bottom-color'] = "var(--light-green)";
}
