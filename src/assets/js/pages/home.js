// LAYOUTS
import { burgerFunction } from '../layout/burger';
import { headerCategory } from '../layout/headerCategory';

window.addEventListener('load', () => {
    burgerFunction()
    headerCategory()
})


// HERO SWIPER
import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
const heroSwiper = new Swiper('.hero__slider__container', {
	slidesPerView: 1,
	spaceBetween: 10,
    navigation: {
        nextEl: '.hero__slider__nav__right',
        prevEl: '.hero__slider__nav__left',
        disabledClass: 'disabled'
    },
    pagination: {
        el: '.hero__slider__pagination',
        type: 'bullets',
        bulletClass: 'hero__slider__pagination__bullet',
        bulletActiveClass: 'active',
        clickable: true
    },
})


const categorySwiper = new Swiper('.homecategory__slider__container', {
    slidesPerView: 1.0373,
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1025: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: '.homecategory__slider__nav__right',
        prevEl: '.homecategory__slider__nav__left',
        disabledClass: 'disabled'
    },
})

const weekOfferSwiper = new Swiper('.weekoffer__slider__container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.weekoffer__slider__nav__right',
        prevEl: '.weekoffer__slider__nav__left',
        disabledClass: 'disabled'
    },
})