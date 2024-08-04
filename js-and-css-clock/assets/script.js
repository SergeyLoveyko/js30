const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

const deg = 6

function setDate() {
  const now = new Date()

  const hours = now.getHours() * 30
  const mins = now.getMinutes() * deg
  const seconds = now.getSeconds() * deg

  hourHand.style.transform = `rotate(${hours + (mins / 12)}deg)`
  minHand.style.transform = `rotate(${mins}deg)`
  secondHand.style.transform = `rotate(${seconds}deg)`

  console.log( seconds, mins, hours );
}

setInterval(setDate, 1000)