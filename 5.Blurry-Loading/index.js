//同时改变百分比和blur的值

const bg = document.querySelector('.bg')
const text = document.querySelector('.loading-text')

let timer = setInterval(bluring,30)

let num = 0
function bluring(){
    num++
    if(num > 99){
        clearInterval(timer)
    }
    text.innerText = `${num}%`
    //每次降低0.1
    text.style.opacity = scale(num, 0, 100, 1, 0)
    // console.log(scale(num, 0, 100, 30, 0))//每次降低0.3
    bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`
}

//定义一个处理函数
const scale = (num, in_min, in_max, out_min, out_max)=>{
    //第一块(num - in_min)逐渐变大 第二块(out_max - out_min) 为负值   第三块 (in_max -in_min)负值(大)
    return ((num - in_min) * (out_max - out_min)) / (in_max -in_min) + out_min
}

//10 * (-30) / 100  -3 + 30 = 33
//20 * (-30) / 100   -6 + 30 = 24