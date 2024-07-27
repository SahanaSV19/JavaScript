let computerChoice;
let resultMsg;
function generateComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber >= 0 && randomNumber <= 1) {
        return 'bat';
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return 'ball';
    }
    else {
        return 'stump';
    }

}

function finalResult(userChoice, compChoice, resultMsg) {
    if (userChoice == compChoice) {
        resultMsg = `It's a tie.`;
    }
    else if (userChoice == 'bat' && compChoice == 'ball') {
        resultMsg = `user won`;
    }
    else if (userChoice == 'bat' && compChoice == 'stump') {
        resultMsg = 'computer won';
    }
    else if (userChoice == 'ball' && compChoice == 'bat') {
        resultMsg = 'computer won';
    }
    else if (userChoice == 'ball' && compChoice == 'stump') {
        resultMsg = `user won`;
    }
    else if (userChoice == 'stump' && compChoice == 'bat') {
        resultMsg = `user won`;
    }
    else if (userChoice == 'stump' && compChoice == 'ball') {
        resultMsg = 'computer won';
    }
    alert(`You have chosen to ${userChoice} and computer has chosen to ${compChoice} and ${resultMsg}`);
}