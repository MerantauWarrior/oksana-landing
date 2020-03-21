$( document ).ready(function() {

  //Caclulator
  $('.sum').rangeslider({
    polyfill: false,
    rangeClass: 'calculator-slider',
    fillClass: 'calculator-slider__fill',
    handleClass: 'calculator-slider__thumb',
    onInit: function() {
      $('#fSum').val($(this)[0].value);
    },
    onSlide: function(position, value) {
      $('#fSum').val(value);
    }
  });
  $('#fSum').on('input', function () {
    var value = $(this).val();
    if(value !== '' && value > 300000){
      $('.sum').val(value).change();
    }else{
      $('.sum').val(300000).change();
    }
  });
  $('.date').rangeslider({
    polyfill: false,
    rangeClass: 'calculator-slider',
    fillClass: 'calculator-slider__fill',
    handleClass: 'calculator-slider__thumb',
    onInit: function() {
      $('#fDate').val($(this)[0].value);
    },
    onSlide: function(position, value) {
      $('#fDate').val(value);
    }
  });
  $('#fDate').on('input', function () {
    var value = $(this).val();
    if(value !== ''){
      $('.date').val(value).change();
    }
  });
  //PhoneMask
  $('input[type="tel"]').mask('+7 (999) 999-9999');
  //Feedbacks
  $('.feedbacks__slider').slick({
    infinite: true,
    dots:false,
    prevArrow: $('.js-feedbacks-prev'),
    nextArrow: $('.js-feedbacks-next')
  });
  //Investors
  $('.inrestors__slider').slick({
    infinite: true,
    dots:false,
    prevArrow: $('.js-investor-prev'),
    nextArrow: $('.js-investor-next')
  });

});