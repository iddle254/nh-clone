"use strict";
$(function () {
  let a = $("body");
  $(window).scroll(function () {
    $(this).scrollTop() > 60
      ? a.addClass("scrolling")
      : a.removeClass("scrolling");
  }),
    $(".btn-menu").on("click", function () {
      return $("body").toggleClass("menu-open"), !1;
    }),
    $(".btn-search").bind("click", function () {
      $("#search").addClass("search-open"),
        setTimeout(function () {
          $("#search .txtsearch").focus();
        }, 100);
    }),
    $(".btn-search-close").bind("click", function () {
      $("#search").removeClass("search-open white-bg"),
        $("#search .search-results").removeClass("show"),
        $("#search .txtsearch").blur().val("");
    }),
    $("#search .txtsearch").on("keyup", () => {
      setTimeout(() => {
        $("#search").addClass("white-bg"),
          $("#search .search-results").addClass("show");
      }, 1e3);
    }),
    $(document).on("keyup", function (a) {
      "27" == a.which &&
        $("#search").hasClass("search-open") &&
        ($("#search").removeClass("search-open"),
        $("#search .txtsearch").blur().val(""));
    }),
    $(".patient-stories-slider.owl-carousel").length &&
      $(".patient-stories-slider.owl-carousel").owlCarousel({
        items: 1,
        responsiveRefreshRate: 0,
        autoplay: !0,
        autoplayHoverPause: !0,
        autoplayTimeout: 1e4,
        loop: !0,
        nav: !0,
        navText: [
          "<i class='icon-arrow-prev'></i>",
          "<i class='icon-arrow-next'></i>"
        ],
        navContainer: ".patient-stories-nav",
        dots: !0,
        dotsContainer: ".patient-stories-dots",
        margin: 80
      }),
    $(".partners-slider.owl-carousel").length &&
      $(".partners-slider.owl-carousel").owlCarousel({
        items: 4,
        responsiveRefreshRate: 0,
        autoplay: !0,
        loop: !1,
        nav: !0,
        navText: [
          "<i class='icon-arrow-prev'></i>",
          "<i class='icon-arrow-next'></i>"
        ],
        dots: !0,
        dotsContainer: ".partners-slider-dots",
        margin: 24,
        responsive: {
          0: { items: 1, margin: 14 },
          570: { items: 2, slideBy: 2, margin: 14 },
          670: { items: 3, slideBy: 3, margin: 18 },
          970: { items: 3, slideBy: 3 },
          1100: { items: 4 }
        }
      }),
    $(".beds-slider.owl-carousel").length &&
      $(".beds-slider.owl-carousel").owlCarousel({
        items: 1,
        responsiveRefreshRate: 0,
        autoplay: !0,
        autoplayHoverPause: !0,
        autoplayTimeout: 1e4,
        loop: !0,
        nav: !1,
        dots: !0,
        margin: 20
      }),
    $(".milestones-slider.owl-carousel").length &&
      $(".milestones-slider.owl-carousel").owlCarousel({
        items: 1,
        responsiveRefreshRate: 0,
        autoplay: !0,
        autoplayHoverPause: !0,
        autoplayTimeout: 1e4,
        loop: !0,
        nav: !0,
        navText: [
          "<i class='icon-arrow-prev'></i>",
          "<i class='icon-arrow-next'></i>"
        ],
        navContainer: ".milestones-nav",
        dots: !0,
        dotsContainer: ".milestones-dots",
        margin: 80
      }),
    $(".latest-news.owl-carousel").length &&
      $(".latest-news.owl-carousel").owlCarousel({
        items: 3,
        slideBy: 3,
        responsiveRefreshRate: 0,
        lazyLoad: !0,
        autoplay: !0,
        loop: !1,
        nav: !1,
        dots: !0,
        margin: 23,
        responsive: {
          0: { items: 1, stagePadding: 50, margin: 14 },
          570: { items: 2, slideBy: 2, stagePadding: 50, margin: 14 },
          670: { items: 3, margin: 18 }
        }
      }),
    $(".interviews.owl-carousel").length &&
      $(".interviews.owl-carousel").owlCarousel({
        items: 3,
        slideBy: 3,
        responsiveRefreshRate: 0,
        lazyLoad: !0,
        autoplay: !0,
        loop: !1,
        nav: !1,
        dots: !0,
        margin: 23,
        responsive: {
          0: { items: 1, margin: 14 },
          570: { items: 2, slideBy: 2, margin: 14 },
          670: { items: 3, margin: 18 }
        }
      });
  (function () {
    let a = $(".accordion").attr("data-accordion");
    $(".accordion .title").on("click", function () {
      "close" === a
        ? ($(".accordion .desc").slideUp(200),
          $(this).parent("li").hasClass("content-visible")
            ? $(this).parent("li").toggleClass("content-visible")
            : ($(this).parent("li").siblings().removeClass("content-visible"),
              $(this)
                .next(".desc")
                .slideDown(200)
                .end()
                .parent("li")
                .addClass("content-visible")))
        : $(this)
            .next(".desc")
            .slideToggle(200)
            .end()
            .parent("li")
            .toggleClass("content-visible");
    });
  })();
});
