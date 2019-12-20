/* global Audio */
function checkVisible (elm) {
  var rect = elm.getBoundingClientRect()
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  )
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0)
}

const chung = document.getElementById('chungus')
const bigmusic = new Audio('chungus.mp3')
const scalemusic = new Audio('scale.mp3')
scalemusic.loop = true
bigmusic.loop = true
window.addEventListener('scroll', e => {
  if (checkVisible(chung)) {
    bigmusic.play()
    scalemusic.pause()
  } else {
    bigmusic.pause()
    scalemusic.play()
  }
})

// Just so it can check if it's there on small screens
if (checkVisible(chung)) {
  bigmusic.play()
} else bigmusic.pause()
