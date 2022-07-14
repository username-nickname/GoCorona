$(".header__burger").click(function () {
	$(".header__burger, .header__menu").toggleClass("active");
	$("body").toggleClass("lock");
});
$(document).ready(function () {
	let position = $(".header").offset();
	let absolutePosition = window.pageYOffset;
	let header = $(".header");
	if (position = absolutePosition) {
		header.addClass("scroll");
	} else {
		header.removeClass("scroll");
	}
	$(window).scroll(function () {
		let position = $(".header").offset();
		let absolutePosition = window.pageYOffset;
		let header = $(".header");
		if (position = absolutePosition) {
			header.addClass("scroll");
		} else {
			header.removeClass("scroll");
		}
	});
});
$(document).ready(function () {
	$(".get-started__content").addClass("animate");
	$(".get-started__image").addClass("animate");
	$(".video-get-started").addClass("animate");
});
$(document).ready(function () {
	let features = $(".features__content").offset();
	let absolutePosition = window.pageYOffset;
	if (features = absolutePosition) {
		$(".media-features__item_1").addClass("animate");
		$(".media-features__item_2").addClass("animate");
		$(".media-features__item_3").addClass("animate");
		$(".features").addClass("animate");
	}
});
$(document).ready(function () {
	$(window).on('scroll', function () {
		var blockPosition = $('.features').offset().top,
			windowScrollPosition = $(window).scrollTop() + 70;

		if (blockPosition < windowScrollPosition) {
			$(".media-features__item_1").addClass("animate");
			$(".media-features__item_2").addClass("animate");
			$(".media-features__item_3").addClass("animate");
			$(".features").addClass("animate");
		}
	});
});

$(document).ready(function () {
	let info = $(".info").offset();
	let absolutePosition = window.pageYOffset;
	if (info = absolutePosition) {
		$(".numbers-info").addClass("animate");
		$(".numbers-info__inner").addClass("animate");
		$(".info__body").addClass("animate");
	}
});
$(document).ready(function () {
	$(window).on('scroll', function () {
		var blockPosition = $('.info').offset().top,
			windowScrollPosition = $(window).scrollTop() + 150;
		if (blockPosition < windowScrollPosition) {
			$(".numbers-info").addClass("animate");
			$(".numbers-info__inner").addClass("animate");
			$(".info__body").addClass("animate");
		}
	});
});

$(document).ready(function () {
	let info = $(".advantages").offset();
	let absolutePosition = window.pageYOffset;
	if (info = absolutePosition) {
		$(".item-advantages").addClass("animate");
		$(".advantages__items").addClass("animate");
		$(".advantages__content").addClass("animate");
	}
});
$(document).ready(function () {
	$(window).on('scroll', function () {
		var blockPosition = $('.advantages').offset().top,
			windowScrollPosition = $(window).scrollTop() + 150;
		if (blockPosition < windowScrollPosition) {
			$(".item-advantages").addClass("animate");
			$(".advantages__items").addClass("animate");
			$(".advantages__content").addClass("animate");
		}
	});
});
// $(document).ready(function () {
// 	let features = $(".features__content").offset();
// 	let absolutePosition = window.pageYOffset;
// 	let media__item_1 = $(".media-features__item_1");
// 	if (features = absolutePosition) {
// 		media__item_1.addClass("animate");
// 	}
// 	$(window).scroll(function () {
// 		let features = $(".features__content").offset();
// 		let absolutePosition = window.pageYOffset;
// 		let media__item_1 = $(".media-features__item_1");
// 		if (features = absolutePosition) {
// 			media__item_1.addClass("animate");
// 		}
// 	});
// });

