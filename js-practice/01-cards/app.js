const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
    slide.onclick = event => {
        const target = event.target
        if (target.classList.contains('active')) {
          return target.classList.remove('active')
        }
        clearActiveClasses()
        target.classList.add('active')
    }
})

function clearActiveClasses() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}



