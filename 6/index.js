const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)


checkBoxes()

function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    console.log(triggerBottom)
    boxes.forEach(box => {
        //返回元素的大小及其相对于视口的位置。
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop)

        if(boxTop < triggerBottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    }) 
}