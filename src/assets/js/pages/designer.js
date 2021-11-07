// LAYOUTS
import { burgerFunction } from '../layout/burger'
import { headerCategory } from '../layout/headerCategory'

window.addEventListener('load', () => {
	burgerFunction()
	headerCategory()
})

// HERO SWIPER
// import Swiper, { Navigation, Pagination } from 'swiper'
// Swiper.use([Navigation, Pagination])


// // production - slider
// const alsoInterestingSwiper = new Swiper('.homecategory__slider__container', {
// 	slidesPerView: 1,
// 	breakpoints: {
// 			700: {
// 					slidesPerView: 3
// 			},
// 			1025: {
// 					slidesPerView: 4
// 			}
// 	},
// 	navigation: {
// 			nextEl: '.homecategory__slider__nav__right',
// 			prevEl: '.homecategory__slider__nav__left',
// 			disabledClass: 'disabled'
// 	},
// })