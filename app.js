const pedra = document.querySelector(".btn-jogada");
const papel = document.querySelector('[data-jogada="Papel"]');
const tesoura = document.querySelector('[data-jogada="Tesoura"]');

const pontoseu = document.querySelector("#placarJogador");
const pontospc = document.querySelector("#placarComputador");

const msg = document.querySelector("#mensagemResultado");

const res = document.querySelector(".Res");

let pontos_eu = 0;
let pontos_pc = 0;

const faz_jogada = (e, num) => {
    let num_pc = Math.floor(Math.random()*3)+1;

    if(num === 1 && num_pc === 2){
        pontos_pc++;
        res.textContent = "O computador Ganhou!"
    } else if(num === 1 && num_pc === 3){
        pontos_eu++;
        res.textContent = "Voce ganhou!";
    } else if(num === 2 && num_pc === 3){
        pontos_pc++;
        res.textContent = "O computador Ganhou!"
    } else if(num === 2 && num_pc === 1){
        pontos_eu++;
        res.textContent = "Voce ganhou!";
    } else if(num === 3 && num_pc === 1){
        pontos_pc++;
        res.textContent = "O computador Ganhou!"
    } else if(num === 3 && num_pc === 2){
        pontos_eu++;
        res.textContent = "Voce ganhou!";
    } else {
        res.textContent = "Empate!";
    }
    
    if (num_pc === 1) {
        msg.textContent = "O computador escolheu pedra!"
    } else if (num_pc === 2) {
        msg.textContent = "O computador escolheu papel!"
    } else {
        msg.textContent = "O computador escolheu tesoura!"
    }

    pontospc.textContent = pontos_pc;
    pontoseu.textContent = pontos_eu;
}

/*
botao.addEventListener("click", (e) => {});
botao.addEventListener("click", nome_funcao);
*/

pedra.addEventListener("click", (e) => faz_jogada(e, 1));
papel.addEventListener("click", (e) => faz_jogada(e, 2));
tesoura.addEventListener("click", (e) => faz_jogada(e, 3));
