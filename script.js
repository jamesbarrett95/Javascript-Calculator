const resultsArea = document.querySelector('.results-area')
const buttons = document.querySelectorAll('.button')
const equals = document.querySelector('.equals')
let numbersArray = []

function chainNumbers () {
  numbersArray.push(this.textContent)
  let numbers = numbersArray.join('')
  console.log(numbers);
}
buttons.forEach(button => button.addEventListener('click', chainNumbers))
