const menu = document.querySelector('.container')
const lineTop = document.querySelector('.line_1')
const lineCenter = document.querySelector('.line_2')
const lineBottom = document.querySelector('.line_3')

menu.addEventListener('click', () => {
    lineTop.classList.toggle('top');
    lineCenter.classList.toggle('center');
    lineBottom.classList.toggle('bottom');
})