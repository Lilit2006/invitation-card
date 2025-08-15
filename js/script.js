const checkBox = document.querySelector('.play-btn')
const audio = document.getElementById('audio')

checkBox.addEventListener('change', function(){
    this.checked ? audio.play() : audio.pause()
})

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image.hidden')

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.1
    })

    images.forEach(image => {
        observer.observe(image)
    })
})