const container =document.getElementById('container')
const colors = ['rgb(240, 12, 121)','rgb(180, 240, 12)','rgb(12, 240, 137)','rgb(201, 240, 12)','rgb(240, 12, 12)']
const SQUARES =500

for(let i=0; i< SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor (square))
    square.addEventListener('mouseout', () => removeColor (square))
    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background =color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = 'rgb(73, 68, 68)'
    element.style.boxShadow = `0 0 2px #000`

}

function getRandomColor(){
    return colors[Math.floor(Math.random()* colors.length)]
}