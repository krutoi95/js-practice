const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener("dragstart", dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('drop', dragdrop)
}
function dragstart (event)  {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend (event)  {
    event.target.classList.remove('hide')
    event.target.classList.remove('hold')
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragover(event) {
    event.preventDefault()
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}