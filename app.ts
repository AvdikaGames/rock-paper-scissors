const resultDisplay = document.querySelector('#result') as HTMLDivElement;
const choicesDisplay = document.querySelector('#choices') as HTMLDivElement;
const AIchoiceDisplay = document.querySelector('#AIChoice') as HTMLDivElement;
const choices = ['rock', 'paper', 'scissors'];

const handleClick = (e: MouseEvent) => {
  let randomNum = Math.floor(Math.random() * choices.length);
  AIchoiceDisplay!.innerHTML = "Computer Choise: " + choices[randomNum];
  getResults((e.target! as HTMLElement).innerHTML, choices[randomNum]);
}

choices.forEach(choice => {
  const button = document.createElement('button') as HTMLButtonElement;
  button.innerHTML = choice;
  button.addEventListener('click', handleClick);
  choicesDisplay!.appendChild(button);
})

const getResults = (userChoice: string, computerChoice: string) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay!.innerHTML = "YOU WIN!"
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay!.innerHTML = "YOU LOSE!"
      break
    case 'paperpaper':
    case 'scissorsscissors':
    case 'rockrock':
    resultDisplay!.innerHTML = "ITS A DRAW!"
    break
  }
}
