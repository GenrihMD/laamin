import './components/TopMenu/TopMenu.js'
import './components/TopMenu/MenuItem.js'
import './components/TheLaamin.js'

document.addEventListener('laamin:re', () => {
    document.getElementsByTagName('the-laamin').item(0).dispatchEvent(new Event('draw'))
})