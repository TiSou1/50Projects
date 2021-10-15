


const button = document.querySelector('#button')
const toasts = document.getElementById('toasts')


const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click',() => createNoticefication())

function createNoticefication(message = null, type = null){
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    //这里可以限制一下toasts的子元素个数
    // if(toasts.children.length >= 1){
    //     toasts.children[0].remove()
    //     return
    // }
    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)

}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}