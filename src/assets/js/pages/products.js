// LAYOUTS
import { burgerFunction } from '../layout/burger'
import { headerCategory } from '../layout/headerCategory'

window.addEventListener('load', () => {
	burgerFunction()
	headerCategory()
})



// FILTER SELECTS
let filtersForm = document.querySelector('.filters__form')
let allfiltersDiv = document.querySelector('.filters__form__allfilters')
const tabSwitcher = () => {
    let activeToggleElement = document.querySelector('.filters__list__item.toggled')
    if (!activeToggleElement) {
        allfiltersDiv.removeAttribute('data-filterid')
        filtersForm.classList.remove('toggled')
    } else {
        filtersForm.classList.add('toggled')
        allfiltersDiv.dataset.filterid = activeToggleElement.dataset.filterid
    }
}
;[...document.querySelectorAll('.filters__list__item')].forEach((item) => {
	item.addEventListener('click', () => {
		if (item.classList.contains('toggled')) {
			item.classList.remove('toggled')
		} else {
			;[...document.querySelectorAll('.filters__list__item')].forEach(
				(inneritem) => inneritem.classList.remove('toggled')
			)
			item.classList.add('toggled')
		}
        tabSwitcher()
	})
})



;[...document.querySelectorAll('.filters__form__container')].forEach(
	(filter) => {
		let select = filter.querySelector('select')
		let eachbox = filter.querySelector('.filters__form__each')
        let isMultiple = select.multiple
        let isColorSelect = select.id === 'colorselect'
        if (isColorSelect) eachbox.classList.add('color')
        if (isMultiple) eachbox.classList.add('multiple')
		;[...select.querySelectorAll('option')].forEach((option) => {
			let optionDiv = document.createElement('div')

			optionDiv.classList.add('filters__form__each__option')
			if (option.selected) optionDiv.classList.add('active')

			optionDiv.dataset.value = option.value
            if (isColorSelect) optionDiv.style.setProperty('--color', option.dataset.color)
			optionDiv.innerText = option.innerText
			eachbox.appendChild(optionDiv)


			if (isMultiple) {
				optionDiv.addEventListener('click', () => {
					select.querySelector(
						`option[value="${optionDiv.dataset.value}"]`
					).selected = !select.querySelector(
						`option[value="${optionDiv.dataset.value}"]`
					).selected
					optionDiv.classList.toggle('active')
				})
			} else {
				optionDiv.addEventListener('click', () => {
					select.value = optionDiv.dataset.value
					let activeBefore = eachbox.querySelector(
						'.filters__form__each__option.active'
					)
					if (!!activeBefore) activeBefore.classList.remove('active')
					optionDiv.classList.add('active')
				})
			}
		})
	}
)
