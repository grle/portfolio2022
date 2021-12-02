
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

////////////SORT CATEGORY
////////////CLASS: instructional ux graphic
////////////BUTTON: btnAll btnInst btnUX btnGraph

/////SORT BY HIDE & FADE
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
  $("#btnGraph").click(function(){
    $(".project").hide();
    $(".graphic").fadeIn();
  });

});

/////CATEGORY LINK

/////ONCLICK: displayALL() displayInstructional() displayUX() displayGraphic()
function displayALL() {
  document.getElementById("btnInst").style.color = "var(--dark)";
  document.getElementById("btnInst").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnUX").style.color = "var(--dark)";
  document.getElementById("btnUX").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnGraph").style.color = "var(--dark)";
  document.getElementById("btnGraph").style['border-bottom-color'] = "var(--light-green)";
}function displayInstructional() {
  document.getElementById("btnInst").style.color = "var(--light-green)";
  document.getElementById("btnInst").style['border-bottom-color'] = "var(--white)";
  document.getElementById("btnUX").style.color = "var(--dark)";
  document.getElementById("btnUX").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnGraph").style.color = "var(--dark)";
  document.getElementById("btnGraph").style['border-bottom-color'] = "var(--light-green)";
}
function displayUX() {
  document.getElementById("btnInst").style.color = "var(--dark)";
  document.getElementById("btnInst").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnUX").style.color = "var(--light-green)";
  document.getElementById("btnUX").style['border-bottom-color'] = "var(--white)";
  document.getElementById("btnGraph").style.color = "var(--dark)";
  document.getElementById("btnGraph").style['border-bottom-color'] = "var(--light-green)";
}
function displayGraphic() {
  document.getElementById("btnInst").style.color = "var(--dark)";
  document.getElementById("btnInst").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnUX").style.color = "var(--dark)";
  document.getElementById("btnUX").style['border-bottom-color'] = "var(--light-green)";
  document.getElementById("btnGraph").style.color = "var(--light-green)";
  document.getElementById("btnGraph").style['border-bottom-color'] = "var(--white)";
}
