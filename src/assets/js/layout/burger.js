export const burgerFunction = () => {
    const burger = document.querySelector('.header__burger')
    const header__nav = document.querySelector('.header__nav')
    const header__content = document.querySelector('.header__content')
    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        header__nav.classList.toggle('toggled')
        header__content.classList.toggle('white')
    })
}
