const start = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const time_list = document.querySelector('.time-list')
const timeGame = document.querySelector('#time')
const board = document.querySelector('.board')
let score = 0;
const arr = ['#209cff','#68e0cf','#ff85e4','#84fab0'];
start.addEventListener('click', (event)=>{
    event.preventDefault()
    screens[0].classList.add('up')
})

time_list.addEventListener('click', (event)=>{
    if(event.target.classList.contains('time-btn')){
        screens[1].classList.add('up')
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
}
})
   
board.addEventListener('click', (event)=>{
    if(event.target.classList.contains('circle')){
        score ++
        event.target.remove()
        createRanomCirles ()
    }
})



function startGame(){
    timeGame.innerHTML = `00:${time}`
    setInterval(reduceTime,1000)
    createRanomCirles ()
    
}


function reduceTime (){
    if (time === 0){
        finishGame()
    }else {
        let current = --time
        if(current <10){
            current = `0${current}`
        }
        timeGame.innerHTML = `00:${current}`
    }
    
}
    function finishGame (){
        timeGame.parentNode.classList.add('hide')
        board.innerHTML = `<h1>Счет:<span class = 'primary'> ${score}</span></h1>`
        reload()
}

function createRanomCirles (){
   const circle = document.createElement('div')
   const size =  crateRandomIndex(5,75)
   const {width,height} = board.getBoundingClientRect()
   const x = crateRandomIndex(0, width-size)
   const y = crateRandomIndex(0, height-size)
   circle.classList.add('circle')
   circle.style.width = `${size}px`
   circle.style.height = `${size}px`
   circle.style.top = `${y}px`
   circle.style.left = `${x}px`
   circle.style.background = colorRandom()
   board.append(circle)
}

function crateRandomIndex(max,min){
    return Math.round(Math.random() * (max-min)+min)

}

function colorRandom(){
    return arr[Math.floor(Math.random() * arr.length)]   
}

function reload(){
setTimeout(function(){
	location.reload();
}, 2000)
}
