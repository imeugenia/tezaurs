jQuery(document).ready(function($) {

  var $document = $(document),
      $element = $('#reading-shadow'),
      $main_container = $('#main-container'),
      $header_container = $('#header-container'),
      className = 'visible-block';
      classVisible = 'visible';

  $document.scroll(function() {
    if ($document.scrollTop() > $main_container.height() + $header_container.height() - $(window).height() ){
      $element.removeClass(className);
    } else {
      $element.addClass(className);
    }
  });
    var current_scroll = 0;
    $document.scroll(function(event){

      var next_scroll = $(this).scrollTop();

      //if we scoll up
      if ( next_scroll < current_scroll && $document.scrollTop() >= 260) {
        //make header fixed on the top
        //add class scrollup-header (make search head display none and height 8rem)
        //add class to main-container with margin top 16.25rem
        $header_container.addClass('scrollup-header');
        $main_container.addClass('scroll-add-margin');
      } else {
        //remove classes added above
        $header_container.removeClass('scrollup-header');
        $main_container.removeClass('scroll-add-margin');
      }

      current_scroll = next_scroll; 
    });

    // if ($(document).height() > $(window).height()) {
    //   $(".main").addClass("fix-wrapper");
    // } else {
    //   $(".main").removeClass("fix-wrapper");
    // }

});



var $character_button_array = document.getElementsByClassName('character');
var $character_text_array = [
    "ā", "č", "ē", "ģ", "ķ", "ļ", "ņ", "š", "ū", "ž" ]
var $input_field = document.getElementById("search-field");
function IndexOf(character) {
  for ( var i = 0; i < $character_button_array.length; i++ ) {
    if ( $character_button_array[i] === character )
      return i;
    }
}

function addText(character) {
  var pos = IndexOf(character);
  $input_field.value += $character_text_array[pos];
}









