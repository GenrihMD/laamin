import './components/TopMenu/TopMenu.js'
import './components/TopMenu/MenuItem.js'
import './components/TheLaamin.js'

const theLaamin = document.getElementsByTagName('the-laamin').item(0);

document.addEventListener('laamin:draw', () => {
    theLaamin.dispatchEvent(new Event('draw'))
})

document.addEventListener('laamin:clear', () => {
    theLaamin.dispatchEvent(new Event('clear'))
})