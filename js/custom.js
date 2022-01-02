$(document).ready(function () {

  // mobile menu
	$('.mobile-btn').on('click', function () {
		$('body').addClass('noscroll');
		$('.nav').addClass('active');
	});
	$('.close-menu').on('click', function () {
		$('body').removeClass('noscroll');
		$('.nav').removeClass('active');
	});
  // Подменю
  $('.have-sub').click(function () {
    $(this).closest('li').toggleClass('active');
    $(this).toggleClass('active').next().slideToggle();
    $('.have-sub').not(this).removeClass('active').next().slideUp();
    $('.have-sub').not(this).closest('li').removeClass('active');
  });

  // Background (установка background в html через атрибут "data-bg")
  var bgSelector = $(".bg-img");
  bgSelector.each(function (index, elem) {
    var element = $(elem),
        bgSource = element.data('bg');
    element.css('background-image', 'url(' + bgSource + ')');
  });

  // Выпадающий список
  $('.select').on('click','.placeholder',function(){
    var parent = $(this).closest('.select');
    if ( ! parent.hasClass('is-open')){
    parent.addClass('is-open');
    $('.select.is-open').not(parent).removeClass('is-open');
    }else{
    parent.removeClass('is-open');
    }
  }).on('click','ul>li',function(){
    var parent = $(this).closest('.select');
    parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
    parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
  });
  // -- Закрываем селект при клике вне элемента и при скролинге
  $(document).click( function(e){
    if ( $(e.target).closest('.select').length ) {
      return;
    }
    $('.select').removeClass('is-open');
  });
  $(document).scroll(function (e){  
    if ( $(e.target).closest('.select').length ) {
      return;
    }
    $('.select').removeClass('is-open');
  });

  // Плавная прокрутка
  $(document).ready(function() {
    $('.sm-scroll').click(function(){
    var el = $(this).attr('href');
    el = el.replace(/[^\#]*/, '');
    $('body,html').animate({
    scrollTop: $(el).offset().top}, 1000);
    return false;
    });
  });

  // Слайдеры
  $('.custom-slider').slick({   
    arrows:true,
    dots:false,
    appendArrows: '.custom-slider-arrows',
    prevArrow: '<span class="prev-slide"><svg viewBox="0 0 15 46"><g><g><path d="M6.998-.002h1v43.293l5.647-5.647.707.707-6.147 6.147.147.147-.708.707-.146-.146-.146.146-.708-.707.146-.147-6.146-6.147.708-.707 5.646 5.647z" fill="currentColor"/></g></g></svg></span>',
    nextArrow: '<span class="next-slide"><svg viewBox="0 0 15 46"><g><g><path d="M6.998-.002h1v43.293l5.647-5.647.707.707-6.147 6.147.147.147-.708.707-.146-.146-.146.146-.708-.707.146-.147-6.146-6.147.708-.707 5.646 5.647z" fill="currentColor"/></g></g></svg></span>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Popup
  $('.js--popup').on('click', function (e) {
    e.preventDefault();
    let btn = $(this).data('modal');
    $('#' + btn).addClass('active');
    $('.popup-overlay').show();
    $('body').toggleClass('noscroll');
  })

  $('.close-popup, .popup-overlay, .close-popup-btn').on('click', function (e) {
    e.preventDefault();
    $('.popup-overlay').hide();
    $('.popup-window').removeClass('active');
    $('body').removeClass('noscroll');
  })

  // Tabs
  $(".myTabs").each(function() {
      var $myTabs = $(this);
      $myTabs.find(".tab_content").hide().first().show();
      $myTabs.find(".tabs li:first").addClass("active").show();
      $myTabs.find(".tabs li").click(function() {
          var $this = $(this);
          $this.addClass("active").siblings().removeClass("active");
          $myTabs.find(".tab_content").hide();
          var activeTab = $this.find("a").attr("href");
          $(activeTab).fadeIn();
          return false;
      });
  });

  // Accordeon
  $('.acc__head').click(function () {
    $(this).closest('.acc-item').toggleClass('active');
    $(this).toggleClass('active').next().slideToggle();
    $('.acc__head').not(this).removeClass('active').next().slideUp();
    $('.acc__head').not(this).closest('acc-item').removeClass('active');
  });



})