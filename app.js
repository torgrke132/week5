const userChoiceMenu = document.querySelector('#userChoice');
const playBtn = document.querySelector('#playBtn');
const output = document.querySelector('#output');

playBtn.addEventListener('click', () => {
    //1 - Rock, 2 - Paper, 3 - Scissors
    const randomNum = Math.floor(Math.random() * 3) + 1; //1 - 3
    let cpuChoice = '';

    switch(randomNum) {
        case 1: 
            cpuChoice = 'rock';
            break;
        case 2: 
            cpuChoice = 'paper';
            break;
        case 3:
            cpuChoice = 'scissors';
            break;
        default:
            cpuChoice = 'rock';
            break;
    }

    console.log(`cpuChoice:  ${cpuChoice}`);

    const userChoice = userChoiceMenu.value;
    
    if(cpuChoice === userChoice) {
        output.innerHTML = `It's a tie! You both chose ${userChoice}`;
    } else if (cpuChoice === 'rock' && userChoice === 'paper') {
        output.innerHTML = `Congratulations! You win! Paper beats rock!`;
    } else if (cpuChoice === 'rock' && userChoice === 'scissors') {
        output.innerHTML = `Sorry, you lose! Rock beats scissors`;
    } else if (cpuChoice === 'paper' && userChoice === 'rock') {
        output.innerHTML = `Sorry, you lose! Paper beats rock!`;
    } else if (cpuChoice === 'paper' && userChoice === 'scissors') {
        output.innerHTML = `Congratulations! You win! Scissors beat paper!`;
    } else if (cpuChoice === 'scissors' && userChoice === 'paper') {
        output.innerHTML = `Sorry, you lose! Scissors beat paper!`;;
    } else if (cpuChoice === 'scissors' && userChoice === 'rock') {
        output.innerHTML = `Congratulations! You win! Rock beats scissors.`;
    }


});