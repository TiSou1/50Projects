const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    boxesContainer.classList.toggle('big')
})


function createBoxes(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            const box = document.createElement('div')
            box.classList.add('box')
            //这个的背景位置配合背景的宽度进行一个错位显示
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}

createBoxes()