$(function () {$(".second-slider__tabs-item").on("click", function (t) { t.preventDefault(),$(".second-slider__tabs-item").removeClass("second-slider__tabs-item--active"),$(this).addClass("second-slider__tabs-item--active"), $(".second-slider__tabs-content-item").removeClass("second-slider__tabs-content-item--active"),$($(this).attr("href")).addClass("second-slider__tabs-content-item--active") })
});




$(function () { $(".header-tabs__top-item").on("click", function (t) { t.preventDefault(), $(".header-tabs__top-item").removeClass("header-tabs__top-item--active"), $(this).addClass("header-tabs__top-item--active"), $(".header-tabs__content-item").removeClass("header-tabs__content-item--active"), $($(this).attr("href")).addClass("header-tabs__content-item--active") }), $(".posts__cards-share").one("click", function () { $(this).addClass("posts__cards-share--disable"), $(".posts__cards-item").click(function () { $(this).children("p").css("opacity", "1") }) }) });