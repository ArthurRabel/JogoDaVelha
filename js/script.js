const button = document.querySelector('#butãoIO'); //butão começar/recomeçar
const S = document.querySelectorAll('.material-icons'); // Espaço das alternativas
const divPs = document.querySelector('#SectionVisor')
const p1 = document.querySelector('#p1'); 
const p2 = document.querySelector('#p2'); 
let contador = 0;
let win = 0;

const Game = function(){
    const spaceModification = (event) => {
        if (win == 0) {
            if(event.target.innerText != `radio_button_unchecked` && event.target.innerText != `close`){
                contador++
                let jogador = contador % 2;

                if(jogador == 0){
                    event.target.innerText = `radio_button_unchecked`;
                    event.target.style.fontSize = `calc(26px + 9vw)`;
                    event.target.value = 0;
                }else{
                    event.target.innerText = `close`;
                    event.target.value = 1;
                }

                if( ((S[0].value == S[1].value) && (S[1].value == S[2].value) && (S[1].value != undefined )) || ((S[3].value == S[4].value) && (S[4].value == S[5].value) && (S[4].value != undefined )) || ((S[6].value == S[7].value) && (S[7].value == S[8].value) && (S[7].value != undefined )) ){
                    if(jogador == 0){
                        player2Win();
                    }else{
                        player1Win();
                    }
                }if( ((S[0].value == S[3].value) && (S[3].value == S[6].value) && (S[3].value != undefined )) || ((S[1].value == S[4].value) && (S[4].value == S[7].value) && (S[4].value != undefined )) || ((S[2].value == S[5].value) && (S[5].value == S[8].value) && (S[5].value != undefined ))){
                    if(jogador == 0){
                        player2Win();
                    }else{ 
                        player1Win();
                    }
                }if( ((S[0].value == S[4].value) && (S[4].value == S[8].value) && (S[4].value != undefined )) || ((S[2].value == S[4].value) && (S[4].value == S[6].value) && (S[4].value != undefined )) ){
                    if(jogador == 0){
                        player2Win();
                    }else{ 
                        player1Win();
                    }
                }if( contador == 9 && win != 1){
                        velha();
                }
            }
        }
    }

    function velha(){
        p2.style.display = "none";
        p1.innerText = "Empate"
        divPs.style.justifyContent = "center";
        win++
    }
    function player1Win(){
        p2.style.display = "none";
        p1.innerText = "Player 1 venceu"
        divPs.style.justifyContent = "center";
        win++
    }
    function player2Win(){
        p2.style.display = "none";
        p1.innerText = "Player 2 venceu"
        divPs.style.justifyContent = "center";
        win++
    }

    if(button.value == "Começar"){
        S.forEach(elemento => {elemento.addEventListener('click', spaceModification, true)});
        button.value = "Recomeçar";
    }else{
        location.reload();
    }
}
    
button.addEventListener("click", Game);