const calendar = new Date()

const day = calendar.getDate()
const week = calendar.getDay()
const weekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const monstNames = monthName[calendar.getMonth()]
const weekNames = weekName[calendar.getDay()]

document.getElementById('day').innerText = day
document.getElementById('month').innerText = monstNames
document.getElementById('week').innerText = weekNames
