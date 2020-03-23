$( document ).ready(function() {
  //Modal
  document.getElementsByClassName('modal')[0].addEventListener('click', function (event) {
    if (event.target === document.getElementsByClassName('modal')[0]) {
      $('.modal').hide();
    }
  });
  $('.modal__close').click(function () {
    $('.modal').hide();
  });
  //Caclulator
  function calculate() {
    if (payment_type == 2) {
      monthly = ((sum/100*percent)*srok)/(srok*12);
    } else {
      monthly = (((sum/100*percent)*srok)+sum)/(srok*12);
    }
  }
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
    if(value !== ''){
      $('.sum').val(value).change();
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