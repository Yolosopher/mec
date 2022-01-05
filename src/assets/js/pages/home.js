// LAYOUTS
import { burgerFunction } from '../layout/burger'
import { headerCategory } from '../layout/headerCategory'

window.addEventListener('load', () => {
	burgerFunction()
	headerCategory()
})

// HERO SWIPER
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
Swiper.use([Navigation, Pagination, Autoplay])
const heroSwiper = new Swiper('.hero__slider__container', {
	slidesPerView: 1,
	spaceBetween: 20,
	// loop: [...document.querySelectorAll('.hero__slider__container .swiper-slide')].length > 2,
	speed: 700,
	autoplay: {
		disableOnInteraction: false,
		delay: 6000,
	},
	// loop: true,
	breakpoints: {
		1025: {
			centeredSlides: true,
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: '.hero__slider__nav__right',
		prevEl: '.hero__slider__nav__left',
		disabledClass: 'disabled',
	},
	clickable: true,
	pagination: {
		el: '.hero__slider__pagination',
		type: 'bullets',
		bulletClass: 'hero__slider__pagination__bullet',
		bulletActiveClass: 'active',
		clickable: true,
	},
})

const categorySwiper = new Swiper('.homecategory__slider__container', {
	slidesPerView: 'auto',
	// breakpoints: {
	// 	700: {
	// 		slidesPerView: 2,
	// 	},
	// 	1025: {
	// 		slidesPerView: 4,
	// 	},
	// },
	navigation: {
		nextEl: '.homecategory__slider__nav__right',
		prevEl: '.homecategory__slider__nav__left',
		disabledClass: 'disabled',
	},
})

const weekOfferSwiper = new Swiper('.weekoffer__slider__container', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.weekoffer__slider__nav__right',
		prevEl: '.weekoffer__slider__nav__left',
		disabledClass: 'disabled',
	},
})

const blogSwiper = new Swiper('.homeblog__slider__container', {
	slidesPerView: 1,
	breakpoints: {
		700: {
			slidesPerView: 2,
		},
		1025: {
			slidesPerView: 3,
		},
		1920: {
			slidesPerView: 4,
		},
	},
	navigation: {
		nextEl: '.homeblog__slider__nav__right',
		prevEl: '.homeblog__slider__nav__left',
		disabledClass: 'disabled',
	},
})
