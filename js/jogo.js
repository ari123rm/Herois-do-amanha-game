const jogo = document.querySelector("#jogo");
const mapa = document.querySelector("#inicio-mapa");




//abrindo inventario
const abrir_inventario = document.querySelector("#abrir-inventario"); 
function abrindo_inventario (){

}
//Indo para Denji
import { falando_Denji } from "/js/personagens/irDenji.js";
const irDenji = document.querySelector("#irPara_Denji");
function indoParaDenji(){
    mapa.style.display = "none";
    jogo.style.backgroundImage = "url(/imagens/denji/apartamentoDenji.png)";
    falando_Denji();
}
irDenji.onclick = indoParaDenji;