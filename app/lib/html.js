export function t(str) {
    const temp = document.createElement('template')
    temp.innerHTML = str
    return temp.content
}