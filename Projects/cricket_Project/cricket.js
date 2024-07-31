let resultMsg;
let score;
let scoreStr = localStorage.getItem('Score');
resetStore(scoreStr);

function resetStore(scoreStr) {
    // if there's a score existing in localstorage then 'score' will be updated according to scoreStr and if score is not existing then 'score' will be updated with null values.
    score = scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    };

    score.displayResult = function () {
        return ` Won:${score.win} , Lost:${score.lost} , Tie:${score.tie}`;
    };
    showResult();
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

function finalResult(userChoice, compChoice) {
    if (userChoice == compChoice) {
        resultMsg = `It's a tie. 😐`;
        score.tie++;
    }
    else if (userChoice == 'bat' && compChoice == 'ball') {
        resultMsg = `user won 😄`;
        score.win++;
    }
    else if (userChoice == 'bat' && compChoice == 'stump') {
        resultMsg = 'computer won 😢';
        score.lost++;
    }
    else if (userChoice == 'ball' && compChoice == 'bat') {
        resultMsg = 'computer won 😢';
        score.lost++;
    }
    else if (userChoice == 'ball' && compChoice == 'stump') {
        resultMsg = `user won 😄`;
        score.win++;
    }
    else if (userChoice == 'stump' && compChoice == 'bat') {
        resultMsg = `user won 😄`;
        score.win++;
    }
    else if (userChoice == 'stump' && compChoice == 'ball') {
        resultMsg = 'computer won 😢';
        score.lost++;
    }
    showResult(userChoice, compChoice, resultMsg);
}

function showResult(userChoice, compChoice, resultMsg) {
    localStorage.setItem('Score', JSON.stringify(score));
    document.querySelector('#user-move').innerText =
        userChoice ? `You have chosen to ${userChoice}` : '';
    document.querySelector('#computer-move').innerText =
        compChoice ? `computer has chosen to ${compChoice}` : '';
    document.querySelector('#result').innerText =
        resultMsg ? resultMsg : '';

    document.querySelector('#score-display').innerText =
        score.displayResult();
    bottomCont(score.win, score.lost);
}


function bottomCont(wins, loss) {
    let container1 = document.querySelector('#container');
    if (wins % 5 == 0 && wins != 0 && wins > loss) {
        container1.classList.remove('js-noCelebration');
        container1.classList.add('js-celebration');

    }
    else {
        container1.classList.remove('js-celebration');
        container1.classList.add('js-noCelebration');
    }
}