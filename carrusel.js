$(document).ready(function() {
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < $(".carousel-inner")[0].scrollWidth - $(".carousel").width()-cardWidth) {
      scrollPosition += cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, cardWidth);
    } else {
      // Si está al final, retrocede al inicio del carrusel inmediatamente
      scrollPosition = 0;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, cardWidth);
    }
  });

  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition >= cardWidth) {
      scrollPosition -= cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, cardWidth);
    } else {
      // Si ya estás en el inicio, retrocede al final del carrusel
      scrollPosition = $(".carousel-inner")[0].scrollWidth - $(".carousel").width();
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, cardWidth);
    }
  });
});
