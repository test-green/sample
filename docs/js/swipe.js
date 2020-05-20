//1ŒÂ–Ú‚ÌSwiper
var mySwiper1 = new Swiper('.swiper1', {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.next1',
		prevEl: '.prev1'
	},
	pagination: {
		el: '.page1',
		type: 'bullets',
		clickable: true
	}
});

//2ŒÂ–Ú‚ÌSwiper
var mySwiper2 = new Swiper('.swiper2', {
	loop: true,
	speed: 1000,
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
	navigation: {
		nextEl: '.next2',
		prevEl: '.prev2'
	},
	pagination: {
		el: '.page2',
		type: 'bullets',
		clickable: true
	}
});