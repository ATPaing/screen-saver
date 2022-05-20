const startBtn = document.getElementById('startBtn')
const secondInputField =  document.getElementById('secondInputField')
const screenSaver = document.getElementById('screenSaver')
const mainScreen = document.getElementById('mainScreen')
let seconds = undefined
let isStarted = false

window.addEventListener('load' , () => {
  secondInputField.value = 0
})

secondInputField.addEventListener('input', () => {
  seconds = parseInt(secondInputField.value)
  if(seconds < 0){
    secondInputField.value = 0
  }
})

startBtn.addEventListener('click', runScreenSaver)
function runScreenSaver(){

    isStarted = true
  
    const myInterval = setInterval(() => {
      
      if(secondInputField.value > 0){
         secondInputField.value--
      }
     
      
    }, 1000)
    
    setTimeout(() => {
      clearInterval(myInterval)
      screenSaver.classList.remove('display-none')
      screenSaver.classList.add('background-color-black')
      mainScreen.classList.add('display-none')
      seconds = parseInt(secondInputField.value)
      isStarted = false
    }, (seconds + 1) * 1000)
  
    startBtn.removeEventListener('click', runScreenSaver)
  
}

startBtn.addEventListener('mousedown', () => {
  startBtn.style.transform = 'scale(0.9)'
})

startBtn.addEventListener('mouseup', () => {
  startBtn.style.transform = 'scale(1)'
})

document.addEventListener('mousemove', () => {
  if(isStarted){
    return
  }
  screenSaver.classList.add('display-none')
  screenSaver.classList.remove('background-color-black')
  mainScreen.classList.remove('display-none')
  startBtn.addEventListener('click', runScreenSaver)

})