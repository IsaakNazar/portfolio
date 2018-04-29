function adjustImage() {
  if($(window).width() <= 850) {
      $('.responsive').attr('src','image/city3.png');
    } else {
      $('.responsive').attr('src','image/city1.png');
    }
}
$(document).ready(function() {
    adjustImage();
});

$( window ).resize(function() {
  adjustImage();
});
