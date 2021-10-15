const nav = document.querySelector('.nav')

window.addEventListener('scroll',fixNav)


function fixNav(){
    //HTMLElement.offsetHeight 是一个只读属性，它返回该元素的像素高度，高度包含该元素的垂直内边距和边框，且是一个整数。
    //滚动条距离顶部的距离大于 nav高度+150时  吸顶
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active')
    } else  {
        nav.classList.remove('active')
    }
}