const resultsArea = document.querySelector('.results-area')
const buttons = document.querySelectorAll('.button')
const equals = document.querySelector('.button-equals')
const percent = document.querySelector('.button-percent')
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
  const reversedTemp = chainedNumbers.reverse()
  let previousRemoved
  for (var i = 0; i < reversedTemp.length; i++) {
    if (reversedTemp[i] === '/' || reversedTemp[i] === '*' || reversedTemp[i] === '+' || reversedTemp[i] === '-') {
      previousRemoved = reversedTemp.splice(reversedTemp.indexOf(reversedTemp[i]) + 1, reversedTemp.length)
      break
    }
  }
  chainedNumbers = previousRemoved.reverse()
  displayNumbers(chainedNumbers)
}

function evaluatePercentage () {

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
percent.addEventListener('click', evaluatePercentage)
clearAllButton.addEventListener('click', clearAll)
clearEntryButton.addEventListener('click', clearEntry)
