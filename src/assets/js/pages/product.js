// LAYOUTS
import { burgerFunction } from '../layout/burger'
import { headerCategory } from '../layout/headerCategory'

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
		clickable: true,
	},
})

// NICE SELECTS
const size_id = document.querySelector('[name="size_id"]')
const color_id = document.querySelector('[name="color_id"]')
console.log(size_id)
console.log(color_id)

const setSizeId = (val) => {
	size_id.value = val
	console.log(size_id)
}
const setColorId = (val) => {
	color_id.value = val
	console.log(color_id)
}

const productpage__info__price_span = document.querySelector(
	'.productpage__info__price span'
)
const updatePricer = (price) => {
	productpage__info__price_span.innerText = price
}
;[...document.querySelectorAll('.ns')].forEach((ns) => {
	// toggler
	ns.addEventListener('click', () => {
		ns.classList.toggle('toggled')
		// if (!ns.classList.contains('toggled')) {
		// }
	})

	// inner functions
	let select = ns.querySelector('select')
	let ns_ul = ns.querySelector('ul')

	;[...select.querySelectorAll('option')].forEach((option) => {
		let newLi = document.createElement('li')
		newLi.innerText = option.innerText
		newLi.dataset.value = option.value
		if (option.dataset.price) {
			newLi.dataset.price = option.dataset.price
		}
		if (option.selected) newLi.classList.add('active')
		ns_ul.appendChild(newLi)
		newLi.addEventListener(
			'click',
			() => {
				select.value = option.value
				ns_ul.querySelector('li.active').classList.remove('active')
				newLi.classList.add('active')
				// ns.classList.remove('toggled')
				if (option.dataset.price) {
					updatePricer(option.dataset.price)
				}
				console.log(option.value)
				if (select.getAttribute('name') === 'size') {
					setSizeId(option.value)
					// size_id.value = option.value
				}
				if (select.getAttribute('name') === 'colors') {
					setColorId(option.value)
					// size_id.value = option.value
				}
			},
			true
		)
	})

	ns_ul.style.setProperty('--height', ns_ul.scrollHeight + 'px')
})

// DETAILS TOGGLER
;[...document.querySelectorAll('.productpage__details__each')].forEach(
	(detaileach) => {
		detaileach.style.setProperty('--height', detaileach.scrollHeight + 'px')
		let heading = detaileach.querySelector('h2')
		heading.addEventListener('click', () => {
			detaileach.classList.toggle('toggled')
		})
	}
)

// ALSO INTERESTING - slider
const alsoInterestingSwiper = new Swiper('.homecategory__slider__container', {
	slidesPerView: 1,
	breakpoints: {
		700: {
			slidesPerView: 3,
		},
		1025: {
			slidesPerView: 4,
		},
	},
	navigation: {
		nextEl: '.homecategory__slider__nav__right',
		prevEl: '.homecategory__slider__nav__left',
		disabledClass: 'disabled',
	},
})

// MODAL FUNCTIONALITY
// caller
const productpage__info__link = document.querySelector(
	'.productpage__info__link'
)

const ordermodal = document.querySelector('.ordermodal')
const ordermodal__bg = document.querySelector('.ordermodal__bg')
const ordermodal__X = document.querySelector('.ordermodal__X')

const orderModalToggler = (show = true) => {
	if (show) {
		ordermodal__bg.classList.add('toggled')
		ordermodal.classList.add('toggled')
	} else {
		ordermodal__bg.classList.remove('toggled')
		ordermodal.classList.remove('toggled')
	}
}

productpage__info__link.addEventListener('click', () => {
	orderModalToggler()
})
ordermodal__bg.addEventListener('click', () => {
	orderModalToggler(false)
})
ordermodal__X.addEventListener('click', () => {
	orderModalToggler(false)
})

// VALIDATIONS
const nameChecker = (el, onInput = false, atleast = 5) => {
	let val = el.value
	if (onInput) {
		if (val === '') {
			el.classList.add('invalid')
			el.classList.remove('invalid-shown')
		} else if (val.length < atleast) {
			el.classList.add('invalid')
			el.classList.add('invalid-shown')
		} else {
			el.classList.remove('invalid')
			el.classList.remove('invalid-shown')
		}
	} else {
		if (val === '') {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.remove('invalid-shown')
		} else if (val.length < atleast) {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.add('invalid-shown')
		} else {
			el.parentElement.classList.remove('invalid')
			el.parentElement.classList.remove('invalid-shown')
		}
	}
}

const emailChecker = (el, onInput = false) => {
	let val = el.value
	let ifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val)
	if (onInput) {
		if (val === '') {
			el.classList.add('invalid')
			el.classList.remove('invalid-shown')
		} else if (!ifEmail) {
			el.classList.add('invalid')
			el.classList.add('invalid-shown')
		} else {
			el.classList.remove('invalid')
			el.classList.remove('invalid-shown')
		}
	} else {
		if (val === '') {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.remove('invalid-shown')
		} else if (!ifEmail) {
			el.parentElement.classList.add('invalid')
			el.parentElement.classList.add('invalid-shown')
		} else {
			el.parentElement.classList.remove('invalid')
			el.parentElement.classList.remove('invalid-shown')
		}
	}
}

const orderfirstname = document.getElementById('orderfirstname')
const orderlastname = document.getElementById('orderlastname')
const orderemail = document.getElementById('orderemail')
const ordertel = document.getElementById('ordertel')

orderfirstname.addEventListener('change', () => {
	nameChecker(orderfirstname, false, 2)
})
orderlastname.addEventListener('change', () => {
	nameChecker(orderlastname, false, 2)
})
orderemail.addEventListener('change', () => {
	emailChecker(orderemail, false)
})
ordertel.addEventListener('change', () => {
	nameChecker(ordertel, false)
})

ordermodal.addEventListener('submit', (e) => {
	nameChecker(orderfirstname, false, 2)
	nameChecker(orderlastname, false, 2)
	emailChecker(orderemail, false)
	nameChecker(ordertel, false)

	if (ordermodal.querySelectorAll('.invalid')[0]) {
		e.preventDefault()
		ordermodal.querySelectorAll('.invalid').forEach((each) => {
			each.classList.add('invalid-shown')
		})
	}
})

const orderresult = document.querySelector('.orderresult')
const orderresult__bg = document.querySelector('.orderresult__bg')
const orderresult__X = document.querySelector('.orderresult__X')

const orderresultToggler = (show = true) => {
	if (show) {
		orderresult__bg.classList.add('toggled')
		orderresult.classList.add('toggled')
	} else {
		orderresult__bg.classList.remove('toggled')
		orderresult.classList.remove('toggled')
	}
}

orderresult__bg.addEventListener('click', () => {
	orderresultToggler(false)
})
orderresult__X.addEventListener('click', () => {
	orderresultToggler(false)
})

if (showorderresult === true) {
	orderresultToggler()
}
