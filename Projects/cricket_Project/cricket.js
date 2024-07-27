let computerChoice;
let resultMsg;
let score = {
    win: 0,
    lost: 0,
    tie: 0,
};
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
        score.tie++;
    }
    else if (userChoice == 'bat' && compChoice == 'ball') {
        resultMsg = `user won`;
        score.win++;
    }
    else if (userChoice == 'bat' && compChoice == 'stump') {
        resultMsg = 'computer won';
        score.lost++;
    }
    else if (userChoice == 'ball' && compChoice == 'bat') {
        resultMsg = 'computer won';
        score.lost++;
    }
    else if (userChoice == 'ball' && compChoice == 'stump') {
        resultMsg = `user won`;
        score.win++;
    }
    else if (userChoice == 'stump' && compChoice == 'bat') {
        resultMsg = `user won`;
        score.win++;
    }
    else if (userChoice == 'stump' && compChoice == 'ball') {
        resultMsg = 'computer won';
        score.lost++;
    }
    alert(`You have chosen to ${userChoice} and computer has chosen to ${compChoice} and
     
    ${resultMsg}
     
    Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`);
}