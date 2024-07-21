const key = document.querySelectorAll('.key')

function playSound() {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
  
  if (!audio) return             /// stop the function from running all together
  
  audio.currentTime = 0          /// riwind to the start
  audio.play()
  
  key.classList.add('playing')
}

function mouseClick() {
  const keyClick = this.attributes[0].value
  const audio = document.querySelector(`audio[data-key="${keyClick}"]`)

  if (!audio) return

  audio.currentTime = 0 
  audio.play()

  this.classList.add('playing')
}
//

function removeTransition(event) {
  if (event.propertyName !== 'transform') return      ///  skip it if it's not transform
  this.classList.remove('playing')
}

key.forEach(key => key.addEventListener('transitionend', removeTransition))
key.forEach(key => key.addEventListener('click', mouseClick))

window.addEventListener('keydown', playSound)