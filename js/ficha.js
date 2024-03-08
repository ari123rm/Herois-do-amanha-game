const inv_nome = document.querySelector("#inv-nome");

const inv_atributos = document.querySelector("#inv-atributos");
const inv_for = document.querySelector("#inv-for");
const inv_dex = document.querySelector("#inv-dex");
const inv_con = document.querySelector("#inv-con");
const inv_int = document.querySelector("#inv-int");
const inv_sab = document.querySelector("#inv-sab");
const inv_car = document.querySelector("#inv-car");

const inv_CA = document.querySelector("#inv-CA");
const inv_HP = document.querySelector("#inv-HP");
const inv_LVL = document.querySelector("#inv-LVL");
const inv_GEN = document.querySelector("#inv-GEN");

const inv_itens = document.querySelector("#inv-itens");
const inv_arma = document.querySelector("#inv-arma");

//funções auxiliares
function escrevendo(html,texto){
    html.innerText = texto;
}
function maisMenos(valor){
    if(valor > 0) return "+" + valor;
    return valor;
}
//importando dados do jogador
import {jogador} from "./criacao.js";

export function criarFicha(){
    escrevendo(inv_nome,jogador().nome);
    escrevendo(inv_CA,jogador().armor);
    escrevendo(inv_HP,jogador().vida);
    escrevendo(inv_LVL,jogador().lvl);

        escrevendo(inv_for,maisMenos(jogador().modFor));
        escrevendo(inv_dex,maisMenos(jogador().modDex));
        escrevendo(inv_con,maisMenos(jogador().modCon));
        escrevendo(inv_int,maisMenos(jogador().modInt));
        escrevendo(inv_sab,maisMenos(jogador().modSab));
        escrevendo(inv_car,maisMenos(jogador().modCar));

    //muda a cor com o genero
    if(jogador().gender == "F") inv_GEN.style.color = "red";
    if(jogador().gender == "M") inv_GEN.style.color = "blue";
        escrevendo(inv_GEN,jogador().gender);
}