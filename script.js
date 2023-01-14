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

/*Se reciben la opcion de cada jugador y retorna un ganador*/ 
function playRound (playerSelection, computerSelection) {

    /*console.log("Jugador:" + playerSelection + " --- " + "Maquina:" + computerSelection);*/
    if(playerSelection === "roca" && computerSelection === "roca") {
        return "¡Empate!"
    } else if (playerSelection === "tijera" && computerSelection === "tijera") {
        return "¡Empate!"
    } else if (playerSelection === "papel" && computerSelection === "papel") {
        return "¡Empate!"
    } else if (playerSelection === "roca" && computerSelection === "tijera") {
        return "¡Tu ganas!"
    } else if (playerSelection === "tijera" && computerSelection === "papel") {
        return "¡Tu ganas!"
    } else if (playerSelection === "papel" && computerSelection === "roca") {
        return "¡Tu ganas!"
    } else {
        return "¡Tu pierdes!"
    }  
}


const computerSelection = getComputerChoise(); //Guarda el valor retornado por la funcion 

/*Inicia el juego con la ayuda de la funcion playRound() y asigna la puntiacion para defnir un ganador*/
function game () {
    let jugador = 0;
    let maquina = 0;
    for(let i = 0; i < 3; i++) {      
        let usOpcion = prompt("¿roca, papel o tijera?");
        let result = playRound(usOpcion, computerSelection);
        
        if (result === "¡Tu ganas!") {
            jugador++;
        } else if (result === "¡Tu pierdes!") {
            maquina++;
        }
        console.log(result);
    }

    console.log(jugador);
    console.log(maquina);

    if (jugador > maquina) {
        return "Felicidades, eres el ganador!";
    } else if (jugador < maquina) {
        return "La maquina gana!";
    }  else {
        return "Es un empate";
    }
}

console.log(game());
