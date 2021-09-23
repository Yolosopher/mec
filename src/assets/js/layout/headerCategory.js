export const headerCategory = () => {
	const categoryPlus = document.querySelector('header .products i')
	const products = document.querySelector('.header li.products')
	const content = products.querySelector('.content')
    const setHeight = () => {
        content.style.setProperty('--height', content.scrollHeight + 'px')
    }
	categoryPlus.addEventListener('click', () => {
        setHeight()
		products.classList.toggle('toggled')
		if (products.classList.contains('toggled')) {
			setTimeout(() => {
				content.style.display = 'grid'
			}, 100)
		} else {
            if (window.innerWidth > 1024) {
                content.style.display = 'none'
            }
		}
	})
}
