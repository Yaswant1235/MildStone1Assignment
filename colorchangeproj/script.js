const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'pink', '#fff', 'green']

body.style.backgroundColor = 'violet';
button.addEventListener('click', changedB)

function changedB() {
    const colorIndex = parseInt(Math.random() * color.length)
    body.style.backgroundColor = color[colorIndex];
}