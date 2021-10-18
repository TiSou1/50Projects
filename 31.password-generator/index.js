const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const randonFunc = {
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol,
}

clipboardEl.addEventListener('click',()=>{
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    //选中textarea中的文本
    textarea.select()
    //拷贝当前选中的内容到剪贴板
    document.execCommand('copy')
    //移出textarea元素
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click',()=>{
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})


function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword = ''
    const typeCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => {
       
     return   Object.values(item)[0]
    })

    if(typeCount === 0){
        return ''
    }

    //根据密码的长度,循环随机调用字符生成函数
    for(let i= 0; i< length; i += typeCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randonFunc[funcName]()
        })
    }


    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword
} 

//fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
//a的Unicode为97
function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

//A的Unicode为65
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

//0的 Unicode为49
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}