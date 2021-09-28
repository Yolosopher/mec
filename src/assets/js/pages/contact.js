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
					input_div_and_select.querySelector('.holder').innerText = option.innerText
				}
				// ns.classList.remove('toggled')
			},
			true
		)
	})

	ns_ul.style.setProperty('--height', ns_ul.scrollHeight + 'px')
})






// MODAL FUNCTIONALITY
// caller
const contactpage__info__leavemsg = document.querySelector('.contactpage__info__leavemsg')

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


contactpage__info__leavemsg.addEventListener('click', () => {
    orderModalToggler()
})
ordermodal__bg.addEventListener('click', () => {
    orderModalToggler(false)
})
ordermodal__X.addEventListener('click', () => {
    orderModalToggler(false)
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

const orderfirstname = document.getElementById('orderfirstname')
const orderlastname = document.getElementById('orderlastname')
const ordertel = document.getElementById('ordertel')

orderfirstname.addEventListener('change', () => {
	nameChecker(orderfirstname, false, 2)
})
orderlastname.addEventListener('change', () => {
	nameChecker(orderlastname, false, 2)
})
ordertel.addEventListener('change', () => {
	nameChecker(ordertel, false)
})

ordermodal.addEventListener('submit', e => {
	nameChecker(orderfirstname, false, 2)
    nameChecker(orderlastname, false, 2)
    nameChecker(ordertel, false)

	if (ordermodal.querySelectorAll('.invalid')[0]) {
		e.preventDefault()
		ordermodal.querySelectorAll('.invalid').forEach((each) => {
			each.classList.add('invalid-shown')
		})
	}
})


// contact form
const contactfirstname = document.getElementById('contactfirstname')
const contactlastname = document.getElementById('contactlastname')
const contactemail = document.getElementById('contactemail')
const contactsubject = document.getElementById('contactsubject')
const contactpage__form = document.querySelector('.contactpage__form')

contactfirstname.addEventListener('change', () => {
	nameChecker(contactfirstname, false, 2)
})
contactlastname.addEventListener('change', () => {
	nameChecker(contactlastname, false, 2)
})
contactemail.addEventListener('change', () => {
	emailChecker(contactemail, false)
})
contactsubject.addEventListener('change', () => {
	nameChecker(contactsubject, false, 2)
})

contactpage__form.addEventListener('submit', e => {
	nameChecker(contactfirstname, false, 2)
    nameChecker(contactlastname, false, 2)
    emailChecker(contactemail, false)
    nameChecker(contactsubject, false, 2)

	if (contactpage__form.querySelectorAll('.invalid')[0]) {
		e.preventDefault()
		contactpage__form.querySelectorAll('.invalid').forEach((each) => {
			each.classList.add('invalid-shown')
		})
	}
})