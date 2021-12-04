// set the date
let countdownDate = new Date('Sep 22, 2022 0:0:0').getTime() //my birhday

// Update the countdown evey second
let x = setInterval(function () {
  // get today's date and time
  let now = new Date().getTime()

  // find the how many days till the setted date (set, 22)
  let distance = countdownDate - now

  // calculate days, hours, minutes and seconds
  let day = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  let sec = Math.floor((distance % (1000 * 60)) / 1000)

  // ajust visually
  day = day < 10 ? '0' + day : day
  hrs = hrs < 10 ? '0' + hrs : hrs
  min = min < 10 ? '0' + min : min
  sec = sec < 10 ? '0' + sec : sec

  // display on page
  document.querySelector(
    '#countdown'
  ).innerHTML = `${day} : ${hrs} : ${min} : ${sec}`

  // when the countdow's gonna be finished
  if (distance < 0) {
    clearInterval(x)
    document.querySelector('#countdown').innerHTML = 'tempo expirou'
  }
})
