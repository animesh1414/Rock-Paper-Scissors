let userScore = 0
let computerScore = 0
const userScore_show = document.getElementById('user-score')
const computerScore_show = document.getElementById('computer-score')
const scoreBoard_show = document.querySelector('.score-board')
const result_show = document.querySelector('.result>p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getComputerChoice() {
    const computerChoices = ["r", "p", "s"]
    const randNum = Math.floor(Math.random() * 3)
    return computerChoices[randNum]
}

function convertToWord(letter) {
    if (letter == 'r') return "Rock"
    if (letter == 'p') return "Paper"
    if (letter == 's') return "Scissors"
}

function win(user, computer) {
    const elementUser = document.getElementById(user)
    const elementComp = document.getElementById(computer)
    userScore++;
    userScore_show.innerHTML = userScore
    computerScore_show.innerHTML = computerScore
    result_show.innerHTML = `${convertToWord(user)} beats ${convertToWord(computer)}!! You Win!🔥`
    elementUser.classList.add('green-glow')
    elementComp.classList.add('red-glow')
    setTimeout(() => {
        elementUser.classList.remove('green-glow')
        elementComp.classList.remove('red-glow')
    }, 300)
}

function lose(user, computer) {
    const elementUser = document.getElementById(user)
    const elementComp = document.getElementById(computer)
    computerScore++
    userScore_show.innerHTML = userScore
    computerScore_show.innerHTML = computerScore
    result_show.innerHTML = `${convertToWord(user)} loses to ${convertToWord(computer)}!! You Lost! 💩`
    elementUser.classList.add('red-glow')
    elementComp.classList.add('green-glow')
    setTimeout(() => {
        elementUser.classList.remove('red-glow')
        elementComp.classList.remove('green-glow')
    }, 300)
}

function draw(user, computer) {
    const elementUser = document.getElementById(user)
    result_show.innerHTML = `${convertToWord(user)} equals ${convertToWord(computer)}!! Draw! 📍📍`
    elementUser.classList.add('gray-glow')
    setTimeout(() => {
        elementUser.classList.remove('gray-glow')
    }, 300)
}

function getWinner(userChoice) {
    const computerChoice = getComputerChoice()

    switch (userChoice + computerChoice) {
        //!win cases
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice)
            break
        //!loose cases
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice)
            break
        //!draw cases
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break
    }
}

function main() {
    rock_div.addEventListener('click', () => {
        getWinner("r")
    })

    paper_div.addEventListener('click', () => {
        getWinner("p")
    })

    scissors_div.addEventListener('click', () => {
        getWinner("s")
    })
}

main()


