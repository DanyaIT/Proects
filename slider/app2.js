const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sidebars = document.querySelector('.sidebar')
const mainSlides = document.querySelector('.main-slide')
const sladesDivCount = mainSlides.querySelectorAll('div').length
const container = document.querySelector('.container')

sidebars.style.top= `-${(sladesDivCount-1)*100}vh`

let sladeIndexCount = 0

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp'){
        changeSlides('up')
    }else if (event.key === 'ArrowDown'){
        changeSlides('down')
        console.log(event.key)
    }
})



upButton.addEventListener('click',()=>{
    changeSlides('up')
})

downButton.addEventListener('click',()=>{
    changeSlides('down')
})

function changeSlides(direction){
    if (direction === 'up'){
        sladeIndexCount++
        if (sladeIndexCount === sladesDivCount){
            sladeIndexCount = 0
        }
    } else if (direction === 'down'){
        sladeIndexCount--
        if(sladeIndexCount<0){
            sladeIndexCount = sladesDivCount-1
        }
    }
    const height = container.clientHeight

    sidebars.style.transform = `translateY(${height*sladeIndexCount}px)`
    mainSlides.style.transform = `translateY(-${height*sladeIndexCount}px)`
}
