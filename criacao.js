import { personagem,arma } from "./classes.js";

const nick = document.querySelector("#nickname")
const diminuirAtributo = document.querySelectorAll(".diminuirAtributo");
const aumentarAtributo = document.querySelectorAll(".aumentarAtributo");
const valorAtributo = document.querySelectorAll(".valorAtributo");
const points = document.querySelector("#pontos de atributos");

let diminuirButao = diminuirAtributo;
diminuirAtributo.forEach(butao => {
    butao.onclick = () =>{
        valorAtributo[diminuirButao.indexOf(butao)].value -= 1;
    }
});

aumentarAtributo.forEach(butao=> {
    butao.onclick = () =>{
        valorAtributo[aumentarAtributo.indexOf(butao)].value += 1;
    }
});


