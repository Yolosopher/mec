// LAYOUTS
import { burgerFunction } from '../layout/burger'
import { headerCategory } from '../layout/headerCategory'

window.addEventListener('load', () => {
	burgerFunction()
	headerCategory()
})

// NICE SELECTS
;[...document.querySelectorAll('.ns')].forEach((ns) => {
	// toggler
	if (!!ns.closest('.input-div.select')) {
		// ns.closest('.input-div.select').classList.toggle('toggled')
		ns.closest('.input-div.select').addEventListener('click', () => {
			ns.classList.toggle('toggled')
			// if (!ns.classList.contains('toggled')) {
			// }
			ns.closest('.input-div.select').classList.toggle('toggled')
		})
	} else {
		ns.closest('.input-div.select').addEventListener('click', () => {
			ns.classList.toggle('toggled')
		})
	}

	// inner functions
	let select = ns.querySelector('select')
	let ns_ul = ns.querySelector('ul')
	let input_div_and_select = ns_ul.closest('.input-div.select')

	;[...select.querySelectorAll('option')].forEach((option) => {
		let newLi = document.createElement('li')
		newLi.innerText = option.innerText
		newLi.dataset.value = option.value
		if (option.selected) newLi.classList.add('active')
		ns_ul.appendChild(newLi)
		newLi.addEventListener(
			'click',
			() => {
				select.value = option.value
				ns_ul.querySelector('li.active').classList.remove('active')
				newLi.classList.add('active')
				if (!!input_div_and_select) {
					input_div_and_select.querySelector('.holder').innerText =
						option.innerText
				}
				// ns.classList.remove('toggled')
			},
			true
		)
	})

	ns_ul.style.setProperty('--height', ns_ul.scrollHeight + 'px')
})


// VALIDATIONS
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


// register form
const registerfirstname = document.getElementById('registerfirstname')
const registerlastname = document.getElementById('registerlastname')
const registertel = document.getElementById('registertel')
const registeremail = document.getElementById('registeremail')
const registerbehance = document.getElementById('registerbehance')
const registerdribbble = document.getElementById('registerdribbble')

const registerpage__form = document.querySelector('.registerpage__form')

registerfirstname.addEventListener('change', () => {
	nameChecker(registerfirstname, false, 2)
})
registerlastname.addEventListener('change', () => {
	nameChecker(registerlastname, false, 2)
})
registertel.addEventListener('change', () => {
	nameChecker(registertel, false)
})
// registeremail.addEventListener('change', () => {
// 	emailChecker(registeremail, false)
// })
// registerbehance.addEventListener('change', () => {
// 	nameChecker(registerbehance, false, 5)
// })
// registerdribbble.addEventListener('change', () => {
// 	nameChecker(registerdribbble, false, 5)
// })

registerpage__form.addEventListener('submit', (e) => {
	nameChecker(registerfirstname, false, 2)
	nameChecker(registerlastname, false, 2)
	nameChecker(registertel, false)
	// emailChecker(registeremail, false)
	// nameChecker(registerbehance, false, 5)
	// nameChecker(registerdribbble, false, 5)

	if (registerpage__form.querySelectorAll('.invalid')[0]) {
		e.preventDefault()
		registerpage__form.querySelectorAll('.invalid').forEach((each) => {
			each.classList.add('invalid-shown')
		})
	}
})
const offersent = document.querySelector('.orderresult')
const offersent__bg = document.querySelector('.orderresult__bg')
const offersent__X = document.querySelector('.orderresult__X')


// 
const offersentToggler = (show = true) => {
	if (show) {
		offersent__bg.classList.add('toggled')
		offersent.classList.add('toggled')
	} else {
		offersent__bg.classList.remove('toggled')
		offersent.classList.remove('toggled')
	}
}

offersent__bg.addEventListener('click', () => {
	offersentToggler(false)
})
offersent__X.addEventListener('click', () => {
	offersentToggler(false)
})


if (showoffersent === true) {
	offersentToggler()
}
