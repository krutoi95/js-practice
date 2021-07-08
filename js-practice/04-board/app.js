const board = document.querySelector('#board')

const numberSquares = 500
const colors = ['#aa85ff', '#2cf7ff', '#18ff93', '#fffc71', '#ffd00b', '#efd1ff', '#ffa0d8',
'coral', 'paleturquoise', '#1d1'  ]

for (let i = 0; i < numberSquares; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () =>
        setColor(square))
    square.addEventListener('mouseleave', () =>
        removeColor(square))
    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px rgba(0,0,2,0.86)`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}