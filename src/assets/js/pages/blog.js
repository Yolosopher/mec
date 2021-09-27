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


// blog - slider
const blogSwiper = new Swiper('.homeblog__slider__container', {
    slidesPerView: 1,
    breakpoints: {
        700: {
            slidesPerView: 2
        },
        1025: {
            slidesPerView: 3
        },
        1920: {
            slidesPerView: 4
        }
    },
    navigation: {
        nextEl: '.homeblog__slider__nav__right',
        prevEl: '.homeblog__slider__nav__left',
        disabledClass: 'disabled'
    },
})


// production - slider
const alsoInterestingSwiper = new Swiper('.homecategory__slider__container', {
    slidesPerView: 1,
    breakpoints: {
        700: {
            slidesPerView: 3
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