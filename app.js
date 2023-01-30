
const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');
const AIchoiceDisplay = document.querySelector('#AIChoice');
const choices = ['rock', 'paper', 'scissors'];

const handleClick = (e) => {
  let randomNum = Math.floor(Math.random() * choices.length);
  AIchoiceDisplay.innerHTML = "Computer Choise: " + choices[randomNum];
  getResults(e.target.innerHTML, choices[randomNum]);
}

choices.forEach(choice => {
  const button = document.createElement('button');
  button.innerHTML = choice;
  button.addEventListener('click', handleClick);
  choicesDisplay.appendChild(button);
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = "YOU WIN!"
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = "YOU LOSE!"
      break
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
    resultDisplay.innerHTML = "ITS A DRAW!"
    break
  }
}
