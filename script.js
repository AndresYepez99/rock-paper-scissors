const img = document.querySelectorAll('.option-user'); // array de imagenes
let arr = [...img]; 
const pf = document.querySelector('.container-play-again'); // pantalla final
document.body.removeChild(pf);


let playerScore = 0;
let computerScore = 0;

document.querySelector('#points-user').innerHTML = playerScore;
document.querySelector('#points-machine').innerHTML = computerScore;

//Consultando imagenes de fondo
const imgMachine = document.querySelector('.img-machine');
const imgUser = document.querySelector('.img-user');



//Se genera una opcion aleatoria para la maquina
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
//Si el usuario gana - esta funcion es llmada desde playRound()
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

//Si el usuario gana - esta funcion es llmada desde playRound()
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
        document.querySelector('#result').textContent = '¡Que inicie la batalla!';
        document.body.removeChild(pf);
    })
}


//remover animacion de personajes de fondo


//Se reciben la opcion de cada jugador y retorna un ganador
function playRound (playerSelection) {
    let computerSelection = getComputerChoise();
    let result = '';
    if ((playerSelection == 'roca' && computerSelection == 'tijera') ||
        (playerSelection == 'tijera' && computerSelection == 'papel') ||
        (playerSelection == 'papel' && computerSelection == 'roca')) {
            
            document.querySelector('#points-user').innerHTML = playerScore += 1;
            imgMachine.classList.toggle('animation-machine');
            result = '¡Tu ganas esta ronda!';

            if (playerScore == 5) {
                result = '!Haz conseguido la victoria!';
                winUser();
            }

    } else if (playerSelection == computerSelection) {
        result = '¡Empate!';
    } else {
        document.querySelector('#points-machine').innerHTML = computerScore += 1;
        imgUser.classList.toggle('animation-user');
        result = '¡Pierdes esta ronda!';
        if (computerScore == 5) {
            result = '!Haz sido derrotado!';
            loserUser();
        }
    }
    
    document.querySelector('#result').textContent = result;
    removeAnimation();
    return
}


arr.forEach(item => {
    item.addEventListener('click', () => {
        console.log(playRound(item.alt));
    })
});



//Hacer que la maquina reaccione a los resultados con comentarios 
//Hacer que la maquina mande mensajes de provocacion segun el resultado 
