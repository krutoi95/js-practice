const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

const sideBar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const container = document.querySelector('.container')
const height = container.clientHeight
const countSlide = mainSlide.querySelectorAll('div').length
let position = 0
sideBar.style.top = `-${300}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        if (position < countSlide - 1) {
            position++
        } else {
            position = 0
        }
    } else if (direction === 'down') {
        position--
        if (position < 0) {
            position = countSlide - 1
        }
    }
    mainSlide.style.transform = `translateY(${-height * position}px)`
    sideBar.style.transform = `translateY(${height * position}px)`
}