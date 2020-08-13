jQuery(document).ready(function ($) {
  //sctructure page
    const blockWidth = $('.structure_part_title').outerWidth();
    function titleLine(){
      $('.title-line').width($('.structure_title-wrapper').width() - blockWidth);
    }
    titleLine();

    const partHeight1 = $('.structure_part:not(:nth-child(1))').outerHeight();
    const partHeight2 = $('.structure_part:not(:nth-child(2))').outerHeight();
    const partHeight3 = $('.structure_part:not(:nth-child(3))').outerHeight();
    function mainSideLine(){
      $('.main-side-line').height(partHeight1 + partHeight2 + partHeight3 + 32);
    }
    
      setTimeout(function(){
        calculateHeightTable();
      }, 10)
    const calculateHeightTable = () => {
       $('.structure_part').each((index, elem) => {
        const heightBlock = $(elem).find('.structure_items_wrapper').outerHeight();
        const heightLastElem = $(elem).find('.structure_item:last-child').outerHeight() / 2;
        $(elem).find('.side-line').height(heightBlock - heightLastElem + 16)
      })
    }
    

    $(window).resize(() => {
      calculateHeightTable();
      titleLine();
      mainSideLine();
    })

  // sliders
  	const mySwiper = new Swiper ('.intro-section', {
  		pagination: {
          el: '.intro-pagination',
          type: 'progressbar',
        },
  		navigation: {
        nextEl: '.intro-next',
        prevEl: '.intro-prev',
      },
  	});

    const mySwiper2 = new Swiper ('.universities-slider', {
      slidesPerView: 4,
      spaceBetween: 30,
      navigation: {
        nextEl: '.un-next',
        prevEl: '.un-prev',
      },
      breakpoints: {
        991:{
          slidesPerView: 3,
        },
        769:{
          slidesPerView: 2,
        },
        470:{
          slidesPerView: 1,
        }
      },
    });

    const mySwiper3 = new Swiper ('.page-content-slider', {
      spaceBetween: 30,
      navigation: {
        nextEl: '.page-content-next',
        prevEl: '.page-content-prev',
      },
    });
  // mobile menu
    $('#burger-btn').on('click', function(e){
      $(this).toggleClass('open');
      $('body').toggleClass('fixed-body');
      $('.search-wrapper').hide();
      $('.when-search').fadeIn();
      $('.search-wrapper').toggleClass('another-style');
      $('.header-top-line').toggleClass('opened-menu-style');
      $('.header-bottom-line .menu-wrapper').slideToggle(200);
    });

  //mobile aside menu
    if($(window).width() < 992){
      $('.aside-menu li.current-page').on('click', function(e){
        $(this).toggleClass('open');
        $(this).siblings('li').slideToggle();
    })};

  // schedule accordion
    $('.schedule-label').on('click', function(e){
      $(this).toggleClass('opened');
      $(this).siblings('.schedule-content-wrapper').slideToggle();
    });

  // language switcher
    $('li.current-language').on('click', function(e){
      $(this).siblings('li').slideToggle();
      $('.language-switcher').toggleClass('show');
    });

  // search field
    $('#search').on('click', function(e){
      e.preventDefault();
      $('.when-search').fadeOut();
      $('.search-wrapper').fadeIn();
    });

    $('.close-search').on('click', function(e){
      e.preventDefault();
      $('.search-wrapper').fadeOut();
      $('.when-search').fadeIn();
    });
  
  // set default slides
    $('.intro-current').text(`${mySwiper.activeIndex < 10 ? '0' : ''}${mySwiper.activeIndex + 1}`);

    $('.intro-count').text(`${mySwiper.slides?.length < 10 ? '0' : ''}${mySwiper.slides?.length}`);
    mySwiper.on('slideChange', function () {
      $('.intro-current').text(`${mySwiper.activeIndex < 10 ? '0' : ''}${mySwiper.activeIndex + 1}`);
    });  

  // video-modal
    const url = $('.video-modal').attr('data-video');
    $('.start-video-btn').on('click', function(e){
      $('html').addClass('none-scroll');
      $('.video-modal').find('iframe').attr('src', url);
      $('.overlay').fadeIn();
      $('.video-modal').fadeIn();
    });
    $('.overlay, .video-close').on('click', function(e){
      $('html').removeClass('none-scroll');
      $('.video-modal').find('iframe').attr('src', '');
      $('.overlay').fadeOut();
      $('.video-modal').fadeOut();
    });
  
});