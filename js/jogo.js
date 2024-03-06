const jogo = document.querySelector("#jogo");
const mapa = document.querySelector("#inicio-mapa");
const irDenji = document.querySelector("#irPara_Denji");

//Indo para Denji
import { falando_Denji } from "/js/personagens/irDenji.js";

function indoParaDenji(){
    mapa.style.display = "none";
    jogo.style.backgroundImage = "url(/imagens/denji/apartamentoDenji.png)";
    falando_Denji();
}
irDenji.onclick = indoParaDenji;