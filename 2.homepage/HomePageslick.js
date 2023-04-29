$(document).ready(function(){
  $('.carousel').slick({
  slidesToShow: 3,
  // slidesToScroll: 3,
  // autoplay: true,
  // autoplaySpeed: 500,
  dots:true,
  // centerMode: true,
  prevArrow: '<div class="class-to-style arr1"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
  nextArrow: '<div class="class-to-style arr2"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>'
  });
});
