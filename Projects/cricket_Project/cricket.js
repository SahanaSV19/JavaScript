let computerChoice;
let resultMsg;
let score;
let scoreStr = localStorage.getItem('Score');
resetStore(scoreStr);

function resetStore(scoreStr) {
    // if there's a score existing in localstorage then 'score' will be updated according to scoreStr and if score is not existing then 'score' will be updated with null values.
    score = JSON.parse(scoreStr) || {
        win: 0,
        lost: 0,
        tie: 0,
    };

    score.displayResult = function () {
        return `No of matches Won:${this.win}, Lost:${this.lost}, Tie:${this.tie}`;
    };
}
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
    showResult(userChoice, compChoice, resultMsg, score);
}

function showResult(userChoice, compChoice, resultMsg, score) {
    localStorage.setItem('Score', JSON.stringify(score));
    alert(`You have chosen to ${userChoice} and computer has chosen to ${compChoice} and
     
    ${resultMsg}
     
    ${score.displayResult()}`);
}