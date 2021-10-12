const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')


let acticeSlide = 0

rightBtn.addEventListener('click',()=>{
    acticeSlide++

    if(acticeSlide > slides.length - 1){
        acticeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})


leftBtn.addEventListener('click',()=>{
    acticeSlide--
    if(acticeSlide < 0){
        acticeSlide = slides.length - 1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody(){
    body.style.backgroundImage = slides[acticeSlide].style.backgroundImage
}

function setActiveSlide(){
    slides.forEach(slide => slide.classList.remove('active'))

    slides[acticeSlide].classList.add('active')
}