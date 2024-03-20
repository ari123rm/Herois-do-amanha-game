const saves = document.querySelectorAll(".saves");
const saveNome = document.querySelectorAll(".save-nome");
const display_criacao = document.querySelector("#criacao-de-personagem");
const display_jogo = document.querySelector("#jogo");

import { teste } from "./objects.js";
const savesRecebidos = [teste,undefined,undefined,undefined];
savesRecebidos.forEach((element,index) =>{
    saveNome[index].innerText = element!=undefined? element.nome : "NOVO PERSONAGEM";
});


export let carregado;
function carregarJogo(index){
    if(savesRecebidos[index] != undefined){
        protagonista.push(savesRecebidos[index]);
        carregado = true;
    }else{
        carregado = false;
    }
}

saves.forEach((element,index) =>{
    element.onclick = ()=>{
        carregarJogo(index);
    }
})