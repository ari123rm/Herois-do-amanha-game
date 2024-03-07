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

const inv_itens = document.querySelector("#inv-itens");
const inv_arma = document.querySelector("#inv-arma");

//funções auxiliares
function escrevendo(html,texto){
    html.innerText = texto;
}
//importando dados do jogador
import { jogador } from "./jogo.js";

export function criarFicha(){
    escrevendo(inv_nome,jogador.nome);
    escrevendo(inv_for,jogador.modFor);
    escrevendo(inv_dex,jogador.modDex);
    escrevendo(inv_con,jogador.modCon);
    escrevendo(inv_int,jogador.modInt);
    escrevendo(inv_sab,jogador.modSab);
    escrevendo(inv_car,jogador.modCar);
    escrevendo(inv_CA,jogador.armor);
    escrevendo(inv_HP,jogador.vida);
}