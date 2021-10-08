const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerHTML = '0'
    let target = counter.getAttribute('data-target')
    

    const updateCounter = ()=>{
        const c = +counter.innerHTML
        const increment = target / 200
        if(c < target){
            counter.innerHTML = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,10)
        }else{
            counter.innerHTML = target
        }
    }
    updateCounter()
})