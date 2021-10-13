const emptys = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')


fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

for (const empty of emptys) {
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

//开始拖拽
function dragStart(){
    this.className += ' hold'
    setTimeout(()=>this.className = 'invisible',0)
}

//拖拽结束
function dragEnd(){
    this.className = 'fill'
}

function dragOver(e){
    e.preventDefault()
}

//拖拽离开 离后样式恢复默认
function dragLeave(){
    this.className = 'empty'
}

//拖拽进入
function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}