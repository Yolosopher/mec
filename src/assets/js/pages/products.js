// LAYOUTS
import { burgerFunction } from '../layout/burger';
import { headerCategory } from '../layout/headerCategory';

window.addEventListener('load', () => {
    burgerFunction()
    headerCategory()
})

;[...document.querySelectorAll('.filters__list__item')].forEach(item => {
    item.addEventListener('click', () => {
        if (item.classList.contains('toggled')) {
            item.classList.remove('toggled')
        } else {
            ;[...document.querySelectorAll('.filters__list__item')].forEach(inneritem => inneritem.classList.remove('toggled'))
            item.classList.add('toggled')
        }
    })
})

;[...document.querySelectorAll('.filters__form__container')].forEach(filter => {
    let select = filter.querySelector('select')
    let eachbox = filter.querySelector('.filters__form__each')
    ;[...select.querySelectorAll('option')]
})