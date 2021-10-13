const canvas = document.getElementById('canvas')
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearEl = document.getElementById('clear')

const ctx = canvas.getContext('2d')

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x, y
//鼠标移入并按左键
canvas.addEventListener('mousedown',e=>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})
//松开鼠标左键的时候
canvas.addEventListener('mouseup',e=>{
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove',e=>{
    if(isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCirlce(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

//调用canvas的方法进行划线

function drawCirlce(x, y){
    ctx.beginPath()
    ctx.arc(x, y, size, 0 , Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2){
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

//控制线的粗细
function updateSizeOnScreen(){
    sizeEl.innerText = size
}

increaseBtn.addEventListener('click',()=>{
    console.log('....')
    size += 5
    if(size > 50){
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click',()=>{
    size -= 5
    if(size < 5){
        size = 5
    }
    updateSizeOnScreen()
})

colorEl.addEventListener('change',e=>(
    color = e.target.value
))

//清空面板 在给定矩形内清空一个矩形： 左上角 右上角 宽度 高度  四个参数
clearEl.addEventListener('click',()=>ctx.clearRect(0, 0, canvas.width, canvas.height))
