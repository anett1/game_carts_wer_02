const game = {
    userChoice: '',
    computerChoice: '',
   }

   const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
   }

let sentencesDraws=['"Re­mis to podwójne zwycięstwo."', '"Remis to motywacja do ciągłej gry."'];
let sentencesWins=['"Tylko ci, którzy wierzą w wygraną wygrywają."', '"Teraz jesteś zwycięzcą."'];
let sentencesLosses=['"Nie poddawaj się, graj dalej."', '"Przegrana to motywacja do dalszej gry."', '"Wygrywanie to nie wszystko, ale chęć wygrania TAK."'];

function sentences(result){
    if(result==='draws'){
        sentencesChoiceDraws=sentencesDraws[(Math.floor(Math.random() * sentencesDraws.length))];
        document.querySelector('.score blockquote').textContent=sentencesChoiceDraws
        //console.log(sentencesChoiceDraws)

    } else if(result==='wins'){
        sentencesChoiceWins=sentencesWins[(Math.floor(Math.random() * sentencesWins.length))];
        document.querySelector('.score blockquote').textContent=sentencesChoiceWins
        //console.log(sentencesChoiceWins)
        

    } else if(result==='losses'){
        sentencesChoiceLosses=sentencesLosses[(Math.floor(Math.random() * sentencesLosses.length))];
        document.querySelector('.score blockquote').textContent=sentencesChoiceLosses
        //console.log(sentencesChoiceLosses)
    }

}
let papier =document.querySelector('[data-choice="papier"] .choice p');
let kamień=document.querySelector('[data-choice="kamień"] .choice p');
let nożyczki =document.querySelector('[data-choice="nożyczki"] .choice p');

const userChoice=[...document.querySelectorAll('.selection .photos')];

function ChoiceIcons(){
    if(game.userChoice==="papier"){
        if(game.computerChoice==="papier"){
            document.querySelector('[data-choice="papier"] .choice p').innerHTML='<i class="fas fa-user"> </i><i class="fas fa-robot"></i>'
        } else if (game.computerChoice==="kamień"){
            document.querySelector('[data-choice="papier"] .choice p').innerHTML='<i class="fas fa-user"></i>'
            document.querySelector('[data-choice="kamień"] .choice p').innerHTML='<i class="fas fa-robot"></i>'
        } else if (game.computerChoice==="nożyczki"){
            document.querySelector('[data-choice="papier"] .choice p').innerHTML='<i class="fas fa-user"></i>'
            document.querySelector('[data-choice="nożyczki"] .choice p').innerHTML='<i class="fas fa-robot"></i>'
        }
    } else if(game.userChoice==="kamień"){
        if(game.computerChoice==="kamień"){
            document.querySelector('[data-choice="kamień"] .choice p').innerHTML='<i class="fas fa-user"> </i><i class="fas fa-robot"></i>'
        } else if (game.computerChoice==="papier"){
            document.querySelector('[data-choice="kamień"] .choice p').innerHTML='<i class="fas fa-user"></i>'
            document.querySelector('[data-choice="papier"] .choice p').innerHTML='<i class="fas fa-robot"></i>'
        }  else if (game.computerChoice==="nożyczki"){
            document.querySelector('[data-choice="kamień"] .choice p').innerHTML='<i class="fas fa-user"></i>'
            document.querySelector('[data-choice="nożyczki"] .choice p').innerHTML='<i class="fas fa-robot"></i>'
        }
    } else if(game.userChoice==="nożyczki"){
        if(game.computerChoice==="nożyczki"){
            document.querySelector('[data-choice="nożyczki"] .choice p').innerHTML='<i class="fas fa-user"> </i><i class="fas fa-robot"></i>'
        } else if (game.computerChoice==="papier"){
            document.querySelector('[data-choice="nożyczki"] .choice p').innerHTML='<i class="fas fa-user"></i>'
            document.querySelector('[data-choice="papier"] .choice p').innerHTML='<i class="fas fa-robot"></i>'
        }  else if (game.computerChoice==="kamień"){
            document.querySelector('[data-choice="nożyczki"] .choice p').innerHTML='<i class="fas fa-user"></i>'
            document.querySelector('[data-choice="kamień"] .choice p').innerHTML='<i class="fas fa-robot"></i>'
        }
    }
}

function checkResult(player, computer) {
    if (player === computer) {
     return 'draws'
    } else if ((player === "papier" && computer === "kamień") || (player === "kamień" && computer === "nożyczki") || (player === "nożyczki" && computer === "papier")) {
     return 'wins'
    } else {
     return 'losses'
    }
   }


function publishResult(result) {
    document.querySelector('.counter .numbers span').textContent = ++gameSummary.numbers
   
    if (result === 'draws') {
     document.querySelector('.counter .draws span').textContent = ++gameSummary.draws
     document.querySelector('[data-summary="who-win"]').innerHTML = `<i class="fas fa-handshake"></i>   TYM RAZEM REMIS`
   
    } else if (result === 'wins') {
     document.querySelector('.counter .wins span').textContent = ++gameSummary.wins
     document.querySelector('[data-summary="who-win"]').innerHTML = `<i class="fas fa-smile"></i>   WYGRAŁEŚ GRATULACJE`
   
    } else if (result === 'losses') {
     document.querySelector('.counter .losses span').textContent = ++gameSummary.losses
     document.querySelector('[data-summary="who-win"]').innerHTML = `<i class="fas fa-sad-tear"></i>   PRZYKRO MI`
    }
   }
function endGame(){
    game.computerChoice=''
    game.computerChoice=''
}

function computerChoice(){
    let computerChoice=userChoice[(Math.floor(Math.random() * userChoice.length))].dataset.choice;
    return computerChoice;
}

function startGame(){
    papier.innerHTML=''
    kamień.innerHTML=''
    nożyczki.innerHTML=''

    game.userChoice=this.dataset.choice;
    userChoice.forEach(user => user.style.innerHTML = "");
    //console.log(game.userChoice)
    game.computerChoice = computerChoice();
    //console.log(game.computerChoice)
    ChoiceIcons()
    const gameResult = checkResult(game.userChoice, game.computerChoice);
    publishResult(gameResult)
    sentences(gameResult)
    endGame()
}
function resetGame() {
    document.querySelector('.score blockquote').textContent = '';
    document.querySelector('[data-summary="who-win"]').innerHTML = '<span style="font-weight: bold; font-size: 1.8rem; line-height: 1;  color: rgb(242, 109, 61);">CZAS<br>NA<br>CHWILĘ<br>RELAKSU</span></span>';
    document.querySelector('.counter .numbers span').textContent = 0;
    document.querySelector('.counter .draws span').textContent = 0
    document.querySelector('.counter .wins span').textContent = 0
    document.querySelector('.counter .losses span').textContent = 0
    gameSummary.numbers = 0;
    gameSummary.wins = 0;
    gameSummary.losses = 0
    gameSummary.draws = 0
   
   
}
userChoice.forEach(user=>user.addEventListener('click', startGame));
document.querySelector('.reset').addEventListener('click', resetGame);