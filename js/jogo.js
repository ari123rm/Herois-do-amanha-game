const jogo = document.querySelector("#jogo");
const mapa = document.querySelector("#inicio-mapa");
const falas = document.querySelector("#falas");
const sprites = document.querySelector("#sprites");


import {jogador} from "./criacao.js";


//abrindo inventario
import { criarFicha } from "./ficha.js";
let mapaAnterior,falaAberto;
const abrir_inventario = document.querySelector("#abrir-inventario"); 
const inventario = document.querySelector("#inventario");
function salvar_mapaAnterior(mapinha){
    switch(mapinha){
        case "Mapa":
            mapaAnterior = "/imagens/mapaHerois2020.png";
            break;
        case "Denji":
            mapaAnterior = "/imagens/denji/apartamentoDenji.png";
            break;


        default:
            mapaAnterior = "/imagens/mapaHerois2020.png";
            break;
    }
}
function abrindo_inventario (){
    if(inventario.style.display == "flex"){
        inventario.style.display = "none";
        if(mapaAnterior == "/imagens/mapaHerois2020.png") {
            mapa.style.display = "flex";
        }
        if(falaAberto){
            falas.style.display = "flex";
            sprites.style.display = "flex";
            falaAberto = false;
        }
        jogo.style.backgroundImage = `url(${mapaAnterior})`;

    }else{
        inventario.style.display = "flex";
        mapa.style.display = "none";
        if(mapaAnterior == undefined) salvar_mapaAnterior("Mapa");
        if(falas.style.display == "flex" || sprites.style.display == "flex"){
            falas.style.display = "none";
            sprites.style.display = "none";
            falaAberto = true;
        }
        jogo.style.backgroundImage = "url(/imagens/fichaHerois.png)";
        criarFicha();
    }
}   
abrir_inventario.onclick = abrindo_inventario;

//Indo para Denji
import { falando_Denji } from "/js/personagens/irDenji.js";
const irDenji = document.querySelector("#irPara_Denji");
function indoParaDenji(){
    mapa.style.display = "none";
    jogo.style.backgroundImage = "url(/imagens/denji/apartamentoDenji.png)";
    salvar_mapaAnterior("Denji");
    falando_Denji();
}
irDenji.onclick = indoParaDenji;