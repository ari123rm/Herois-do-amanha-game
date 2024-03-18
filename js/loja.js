import {guns,armors} from "./objects.js";
import { jogador } from "./criacao.js";
import { leave } from "./jogo.js";


const armasLoja = document.querySelectorAll(".loja-itens-armas");
const armadurasLoja = document.querySelectorAll(".loja-itens-armaduras");

const armasImagens = document.querySelectorAll(".loja-itens-armas .loja-itens-imagens");
const armadurasImagens = document.querySelectorAll(".loja-itens-armaduras .loja-itens-imagens");

const armasNome = document.querySelectorAll(".loja-itens-armas .loja-itens-nome");
const armadurasNome = document.querySelectorAll(".loja-itens-armaduras .loja-itens-nome");

const armasValue = document.querySelectorAll(".loja-itens-armas .loja-itens-value");
const armadurasValue = document.querySelectorAll(".loja-itens-armaduras .loja-itens-value");

const lojaSair = document.querySelector("#loja-sair");
lojaSair.onclick = leave;
//funções auxiliares





//função principal
export function criarLoja(){
    armasImagens.forEach((element,index) => {
        element.src = `/imagens/loja/itens/${guns[index].type}.png`;
    });
    armadurasImagens.forEach((element,index) => {
        element.src = `/imagens/loja/itens/${armors[index].name}.png`;
    });
    armasNome.forEach((element,index) =>{
        element.innerText = guns[index].type;
    })
    armadurasNome.forEach((element,index) =>{
        element.innerText = armors[index].name;
    })
    armasValue.forEach((element,index) =>{
        element.innerText = `${guns[index].value}$ | ${guns[index].damage} | ${guns[index].attribute}`;
    })
    armadurasValue.forEach((element,index) =>{
        element.innerText = `${armors[index].value}$ | ${armors[index].protecao} | ${armors[index].type}`;
    })
}







