const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const button = document.getElementById('button');
const color = document.querySelector('.color');
const box = document.querySelector('.box'); 

button.addEventListener('click', () => {
    let hexColor = '#';
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    box.style.backgroundColor = hexColor
})

const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}