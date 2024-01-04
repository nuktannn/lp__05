//drawer
$(".drawer-icon").on("click", function (e) {
  e.preventDefault();

  $(".drawer-icon").toggleClass("is-active");
  $(".drawer-nav").toggleClass("is-active");

  return false;
});

$(".drawer-nav [href]").on("click", function (event) {
  $(".drawer-icon").trigger("click");
});

// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $(".js-header").height();
  $("main").css("margin-top", height);
});

const infiniteSlider = new Swiper(".infinite-slider", {
  loop: true,
  slidesPerView: 10,
  spaceBetween: 20,
  speed: 4000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
});

//モーダル
$(function () {
  $(".js-modal-open").each(function () {
    $(this).on("click", function () {
      var target = $(this).data("target");
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
  });
  $(".js-modal-close").on("click", function () {
    $(".js-modal").fadeOut();
    return false;
  });
  $(".modal__bg").on("click", function (e) {
    e.stopPropagation();
  });
});

//swiper
var swiper = new Swiper(".spots-slider", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 1.5273,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#js-next",
    prevEl: "#js-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 480px
    300: {
      slidesPerView: 1.4,
      centeredSlides: true,
    },
    // when window width is >= 768px
    900: {
      slidesPerView: 2.5,
      centeredSlides: false,
    },
    // when window width is >= 768px
    1200: {
      slidesPerView: 3.2,
      centeredSlides: false,
    },
    // when window width is >= 1024px
    1512: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});


//qa
$(document).ready(function () {
  $(".qa__box .qa__box-q").click(function () {
    var $icon = $(this).find(".qa__box-icon");
    var $answer = $(this).next(".qa__box-a");

    if ($icon.find(".qa__box-bar2").is(":visible")) {
      $icon.find(".qa__box-bar2").hide();
      $answer.slideDown();
    } else {
      $icon.find(".qa__box-bar2").show();
      $answer.slideUp();
    }
  });
});

$(window).resize(function() {
  if ($(window).width() <= 900) {
    $(".qa__item:first-child .qa__box-icon").addClass("is-open");
    $(".qa__item:first-child .qa__box-a").slideDown();
    $(".qa__item:first-child .qa__box-icon .qa__box-bar2").hide();

    $(".qa__item:not(:first-child) .qa__box-icon").removeClass("is-open");
    $(".qa__item:not(:first-child) .qa__box-a").slideUp();
    $(".qa__item:not(:first-child) .qa__box-icon .qa__box-bar2").show();
  } else {
    $(".qa__item:nth-child(2) .qa__box-icon").addClass("is-open");
    $(".qa__item:nth-child(2) .qa__box-a").slideDown();
    $(".qa__item:nth-child(2) .qa__box-icon .qa__box-bar2").hide();

    $(".qa__item:not(:nth-child(2)) .qa__box-icon").removeClass("is-open");
    $(".qa__item:not(:nth-child(2)) .qa__box-a").slideUp();
    $(".qa__item:not(:nth-child(2)) .qa__box-icon .qa__box-bar2").show();
  }
}).resize();

$('.qa__box-icon').click(function() {
  $(this).siblings('.qa__box-q').toggleClass('clicked');
});


//スムーススクロール
jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("header").innerHeight();
  var id = jQuery(this).attr("href");
  var position = 0;
  if (id != "#") {
    var position = jQuery(id).offset().top - header;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    300
  );

  return false;
});

//wow
new WOW().init();

  //top-button(スムーススクロール)
  jQuery(window).on("scroll", function () {
    if (100 < jQuery(this).scrollTop()) {
      jQuery(".page__top-pc").addClass("is-show");
    } else {
      jQuery(".page__top-pc").removeClass("is-show");
    }
  });

  // form
let $form = $('#js-form')
$form.submit(function (e) {
  $.ajax({
    url: $form.attr('action'),
    data: $form.serialize(),
    type: "POST",
    dataType: "xml",
    statusCode: {
      0: function () {
        //送信に成功したときの処理 
        $form.slideUp()
        $('#js-success').slideDown()
      },
      200: function () {
        //送信に失敗したときの処理 
        $form.slideUp()
        $('#js-error').slideDown()
      }
    }
  });
  return false;
});

// formの入力確認
let $submit = $('.contact__button.-submit')
$('#js-form input, #js-form textarea').on('change', function () {
  if(
    $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[name="entry.1672445236"]').prop('checked') === true
      ){
    //すべて入力された時
    $submit.prop('disabled' , false)
    $submit.addClass('-active')
    $submit.css('background', '#FFEE56');
    $submit.css('color', '#4A3636');
  } else {
    //すべて入力さていない時
    $submit.prop('disabled' , true)
    $submit.removeClass('-active')
    $submit.css('background', '#fff');
  }
})
