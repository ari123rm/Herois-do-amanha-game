const falas = document.querySelector("#falas");
const sprites = document.querySelector("#sprites");
const imagem_sprite_Denji = document.querySelector("#sprites img");

const texto_fala = document.querySelector("#textoFala");
const escolhas = document.querySelector("#escolhas");
const escolha_1 = document.querySelector("#escolha-1");
const escolha_2 = document.querySelector("#escolha-2");
const escolha_3 = document.querySelector("#escolha-3");
import { personagem } from "../classes.js";
import protagonista from "../criacao.js";
let reputation_denji;
const jogador = protagonista[protagonista.length - 1];
//ficha do denji
const denji = new personagem("Denji Miyazaki",15,[10,10,10,10,10,10],"M");
//funções auxiliares
function mudarEscolhas(t1,t2,t3){
    escolha_1.innerText = t1;
    escolha_2.innerText = t2;
    escolha_3.innerText = t3;
}
function mudarFala(fala){
    const falaSplit = fala.split('');
    texto_fala.innerText = "";
    
    falaSplit.forEach((element,i) => {
          setTimeout( () => {
            texto_fala.innerHTML+= element;
            escolhas.style.display = "none";
        }, 50 *i);
    });
    setTimeout(() =>{escolhas.style.display = "flex";}, 50 * falaSplit.length);
}
function mudarSprite(valor){
    imagem_sprite_Denji.src = `/imagens/denji/sprites/denji_sprite_${valor}.png`;
}
function dado(max) {
    min = Math.ceil(1);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max)) + 1;
}

// conversando com denji
export function falando_Denji(){
    //aparecendo as falas :D
    falas.style.display = "flex";
    sprites.style.display = "flex";
    //setando reputação
    if(protagonista[0].gender == "F"){
        reputation_denji = 75;
    }else{
        reputation_denji = 50;
    }
    //primeira interação
    mudarFala("VRUMMM VRUMMMM");
    mudarEscolhas("Quem é você??? (Car)","*fugir* (For)",`${denji.nome}??? (Car)`);
    escolha_1.onclick = quemEhVc;
    escolha_2.onclick = fugir;
    escolha_3.onclick = sabiaQuemEra;
}

function quemEhVc(){
    if(jogador.roll("Car") < denji.DT("Car") && jogador.gender != "F"){
        reputation_denji -= 15 ;
        mudarFala("Quem sou eu??? Me diga quem é você ou vou te cortar ao meio!");
        mudarEscolhas(`Foi mal... Sou ${jogador.nome}`,"Eu que vou te cortar! Seu merda!",`Pera... Você é o ${denji.nome}? (Car)`);
        escolha_1.onclick = saudacao;
        escolha_2.onclick = luta;
        escolha_3.onclick = sabiaQuemEra;
    }else{
        reputation_denji += 15;
        mudarSprite(3);
        mudarFala(`Eu sou ${denji.nome}, mais conhecido como CHAINSAWMAN, e o seu?`);
        mudarEscolhas(`Eu sou ${jogador.nome}`,`${denji.nome}...Acho que já ouvi falar...(Car)`,"Então é esse o nome que vai ta na minha aliança?");
        escolha_1.onclick = saudacao;
        escolha_2.onclick = sabiaQuemEra;
        escolha_3.onclick = dandoEmCima;
    }
}

function fugir(){
    if(jogador.roll("For") < denji.DT("For")){
        reputation_denji -= 25;
        if(jogador.gender != "F"){
            if(reputation_denji < 15){
                luta();
            }else{
                mudarSprite(4);
                mudarFala(`Ta pensando que vai aonde? Foge não! *${denji.nome} te segurou*`);
                mudarEscolhas("Me solta! *tentar se soltar* (For)","Tava so apostando corrida com você :D","")
            }
        }else{
            
        }
    }else{

    }
}

function sabiaQuemEra(){
    
    
}
function saudacao(){
    
    
}
function dandoEmCima(){
    
    
}
function luta(){
    
    
}