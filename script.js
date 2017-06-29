const resultsArea = document.querySelector('.results-area')
const buttons = document.querySelectorAll('.button')
const equals = document.querySelector('.button-equals')
const clearAllButton = document.querySelector('.button-clear-all')
const clearEntryButton = document.querySelector('.button-clear-entry')
let chainedNumbers = []
let equalsState = false

function displayNumbers (chainedNumbers) {
  resultsArea.innerHTML = chainedNumbers.join('')
}

function clearAll () {
  chainedNumbers.length = 0
  resultsArea.innerHTML = 0
}

function clearEntry () {

}

function evaluateNumbers () {
  equalsState = true
  const evaluation = chainedNumbers.join('')
  const finalResult = eval(evaluation)
  resultsArea.innerHTML = finalResult
}

function chainNumbers () {
  // If any number is pressed after the equals sign, then start a new calculation
  if (equalsState && this.dataset.button !== 'operator') {
    clearAll()
    resultsArea.innerHTML = this.textContent
    equalsState = false
  }
  chainedNumbers.push(this.textContent)
  displayNumbers(chainedNumbers)
  equalsState = false
}

buttons.forEach(button => button.addEventListener('click', chainNumbers))
equals.addEventListener('click', evaluateNumbers)
clearAllButton.addEventListener('click', clearAll)
clearEntryButton.addEventListener('click', clearEntry)
