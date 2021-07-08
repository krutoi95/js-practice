const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timer = document.querySelector('#time')
const board = document.querySelector('#board')
const timeList = document.querySelector('.time-list')
const colors = ['#87CEFA', '#FFFAFA',
    '#DDA0DD', '#F0E68C', '#FF8C00', '#FF4500', '#FF69B4',
    '#00FF00', '#00008B', '#87CEEB', '#6A5ACD', '#FFFAF0',
    '#FFFF00', '#8B008B', '#228B22', '#00FF7F', ]

let time = 0
let score = 0
let clearTimer = null

startBtn.addEventListener('click', (e) => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = +event.target.dataset.value
        startGame()
    }
})

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        addCircle()
    }
})

function startGame() {
    screens[1].classList.add('up')
    clearTimer = setInterval(decreaseTime, 1000)
    setTime(time)
    addCircle()
}

function decreaseTime() {
    let current = --time
    if (current === 0) {
        finishGame()
    } else {
        setTime(current)
    }
}

function setTime(value) {
    timer.innerHTML = `00:${value < 10 ? `0${value}` : value}`
}

function addCircle() {
    let circle = document.createElement('div')
    circle.classList.add('circle')
    setColor(circle)
    const {height, width} = board.getBoundingClientRect()
    const size = getRandomNumber(10, 40)
    let x = getRandomNumber(0, height - size)
    let y = getRandomNumber(0, width - size)
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    circle.style.height = `${size}px`
    circle.style.width = `${size}px`
    board.append(circle)
}

function finishGame() {
    timer.parentNode.classList.add('hide')
    clearInterval(clearTimer)
    board.innerHTML = `<h2>Ваш Счет: <span class="primary">${score}</span></h2>`

}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    const index = getRandomNumber(0, colors.length - 1)
    console.log(index)
    return colors[index]
}