// LAYOUTS
import { burgerFunction } from '../layout/burger';
import { headerCategory } from '../layout/headerCategory';

window.addEventListener('load', () => {
    burgerFunction()
    headerCategory()
})


// image swiper
import Swiper, { Navigation, Pagination } from 'swiper'

Swiper.use([Navigation, Pagination])

const imageSwiper = new Swiper('.productpage__slider__container', {
	slidesPerView: 1,
	spaceBetween: 10,
    pagination: {
        el: '.productpage__slider__pagination',
        type: 'bullets',
        bulletClass: 'productpage__slider__pagination__bullet',
        bulletActiveClass: 'active',
        clickable: true
    },
})

