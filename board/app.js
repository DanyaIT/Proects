const board = document.querySelector('#board')
const SQUEARS = 500
const arr = ['#209cff','#68e0cf','#ff85e4','#84fab0']
for (let i = 0; i<SQUEARS; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)
    
    square.addEventListener('mouseover', setColor)
    

    square.addEventListener('mouseleave', removeColor)
    
}

function setColor(event){
    const element = event.target
    const colors = ramdomColors()
    element.style.background = colors
    element.style.boxShadot = `0 0 2px ${colors}, 0 0 10px ${colors}`
}
function removeColor(event){
    const element = event.target
    element.style.background = 'rgb(59, 58, 55)'
    element.style.boxShadot = `0  0 2px #000`
}


function ramdomColors(element){
    return arr [Math.floor((Math.random() * arr.length))]
    
}

