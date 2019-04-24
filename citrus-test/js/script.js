$(document).ready(function (){
var card = $('.product-card');
var mini=$('.mini');
card.mouseover(function () {
  card.css({
    
     "border": "1px solid #7EB105",
     "box-shadow": "0px 2px 10px rgba(0, 0, 0, 0.2)",
     "border-radius": "3px"
  }
   
  );
$('.product-card__option').css('display','flex');
$('.product-card__stock').css('display', 'flex');
$('.product-card__properties').css('display', 'block');
});
card.mouseout(function () {
   card.css({
      
       "border": "none",
       "box-shadow": "none",
       "border-radius": "none"
     }

   );
  $('.product-card__option').css('display', 'none');
  $('.product-card__stock').css('display', 'none');
  $('.product-card__properties').css('display', 'none');
});
});