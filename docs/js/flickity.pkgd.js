var flkty = $carousel.data('flickity');
var $imgs = $('.carousel-cell img');

$carousel.on( 'scroll.flickity', function( event, progress ) {
  flkty.slides.forEach( function( slide, i ) {
    var img = $imgs[i];
    var x = ( slide.target + flkty.x ) * -1/3;
    img.style.transform = 'translateX( ' + x  + 'px)';
  });
});