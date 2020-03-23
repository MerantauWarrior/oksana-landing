$( document ).ready(function() {
  //Modal
  $('.js-modal').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('.modal').show();
    $(target).show();
  });
  document.getElementsByClassName('modal')[0].addEventListener('click', function (event) {
    if (event.target === document.getElementsByClassName('modal')[0]) {
      $('.modal').hide();
    }
  });
  $('.modal__close').click(function () {
    $('.modal').hide();
  });
  //Caclulator
  var percent = 8, srok, sum, payment_type = 1;
  function calculate() {
    if (payment_type === 2) {
      monthly = parseInt(((sum/100*percent)*srok)/(srok*12));
    } else {
      monthly = parseInt((((sum/100*percent)*srok)+sum)/(srok*12));
    }
    $('.calculator__amount-value span').text(monthly);
    $('.credit-rub').text(sum + ' рублей');
    $('.avans-rub').text(sum/10 + ' рублей');
  }
  $('.sum').rangeslider({
    polyfill: false,
    rangeClass: 'calculator-slider',
    fillClass: 'calculator-slider__fill',
    handleClass: 'calculator-slider__thumb',
    onInit: function() {
      $('#fSum').val($(this)[0].value);
      sum = $(this)[0].value;
    },
    onSlide: function(position, value) {
      $('#fSum').val(value);
      sum = value;
      calculate();
    }
  });
  $('.calculator-radio__item label').click(function () {
    payment_type = parseInt($(this).siblings('input[name="creditType"]').val());
    calculate();
  });
  $('#fSum').on('input', function () {
    var value = $(this).val();
    if(value !== ''){
      $('.sum').val(value).change();
      sum = value;
      calculate();
    }
  });
  $('.date').rangeslider({
    polyfill: false,
    rangeClass: 'calculator-slider',
    fillClass: 'calculator-slider__fill',
    handleClass: 'calculator-slider__thumb',
    onInit: function() {
      $('#fDate').val($(this)[0].value);
      srok = $(this)[0].value;
    },
    onSlide: function(position, value) {
      $('#fDate').val(value);
      srok = value;
      calculate();
    }
  });
  $('#fDate').on('input', function () {
    var value = $(this).val();
    if(value !== ''){
      $('.date').val(value).change();
      srok = value;
      calculate();
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