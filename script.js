const img = document.querySelectorAll('.option-user');
let arr = [...img];
const pf = document.querySelector('.container-play-again');
document.body.removeChild(pf);


let playerScore = 0;
let computerScore = 0;

document.querySelector('#points-user').innerHTML = playerScore;
document.querySelector('#points-machine').innerHTML = computerScore;




/*Se genera una opcion aleatoria oara la maquina*/ 
function getComputerChoise () {
    let option =  Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if(option === 1) {
        return "tijera";
    } else if (option === 2) {
        return "papel";
    } else if (option === 3) {
        return "roca";
    }
}

function winUser() {
    document.body.appendChild(pf);
    document.querySelector('.message').innerHTML = '¡Haz ganado la batalla, felicidades! <ion-icon name="trophy-outline"></ion-icon>';
    let btn = document.querySelector('#btn-play-again');
    btn.textContent = 'jugar otra vez';
    btn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#points-machine').innerHTML = computerScore;
        document.querySelector('#points-user').innerHTML = playerScore;
        document.body.removeChild(pf);
    })
}

function loserUser() {
    document.body.appendChild(pf);
    document.querySelector('.message').innerHTML =  '¡Haz sido derrotado! <ion-icon name="sad-outline"></ion-icon>';
    let btn = document.querySelector('#btn-play-again');
    btn.textContent = '¿Revancha?';
    btn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#points-machine').innerHTML = computerScore;
        document.querySelector('#points-user').innerHTML = playerScore;
        document.body.removeChild(pf);
    })
}


/*Se reciben la opcion de cada jugador y retorna un ganador*/ 
function playRound (playerSelection) {
    let computerSelection = getComputerChoise();
    let result = '';
    if ((playerSelection == 'roca' && computerSelection == 'tijera') ||
        (playerSelection == 'tijera' && computerSelection == 'papel') ||
        (playerSelection == 'papel' && computerSelection == 'roca')) {
            document.querySelector('#points-user').innerHTML = playerScore += 1;
            result = '¡Tu ganas esta ronda!';

            if (playerScore == 5) {
                result = '!Haz conseguido la victoria!';
                winUser();
            }

    } else if (playerSelection == computerSelection) {
        result = '¡Empate!';
    } else {
        document.querySelector('#points-machine').innerHTML = computerScore += 1;
        result = '¡Pierdes esta ronda!';

        if (computerScore == 5) {
            result = '!Haz sido derrotado!';
            loserUser();
        }
    }
    
    document.querySelector('#result').textContent = result;
    return
}


arr.forEach(item => {
    item.addEventListener('click', () => {
        console.log(playRound(item.alt));
        
    })
});


//Hacer que la maquina reaccione a los resultados con comentarios 
//Hacer que la maquina mande mensajes de provocacion segun el resultado 
