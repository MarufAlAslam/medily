$('.Newslider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      

  $('.productSlider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="prevBtn btn"><img src="images/Arrow-10.svg" class="img-fluid w-60" alt=""></button>',
    nextArrow: '<button class="nextBtn btn"><img src="images/Arrow-10.svg" class="img-fluid w-60" alt=""></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
      


  $('.navbar-toggler-btn').click(function(){
      $('#myNav').css("transform","translateX(+0)")
  })

  $('.navCloser').click(function(){
    $('#myNav').css("transform","translateX(-100%)")
})

$('.search').click(function(e){
  e.preventDefault()
  $('.searchBg').css('transform','translateX(0)')
  $('.searchBar').show(100)
})

$('.searchBg').click(function(e){
  e.preventDefault()
  $('.searchBg').css('transform','translateX(500%)')
  $('.searchBar').hide(100)
})



$('.sliderSection.py-5 .card').click(function(){
  window.location.href='index2.html';
})