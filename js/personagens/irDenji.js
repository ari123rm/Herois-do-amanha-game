const falas = document.querySelector("#falas");
const sprites = document.querySelector("#sprites");
const imagem_sprite_Denji = document.querySelector("#sprites img");

const texto_fala = document.querySelector("#textoFala");
const escolhas = document.querySelector("#escolhas");
const escolha_1 = document.querySelector("#escolha-1");
const escolha_2 = document.querySelector("#escolha-2");
const escolha_3 = document.querySelector("#escolha-3");
import {denji} from "../objects.js";
import {jogador} from "../criacao.js";
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
            texto_fala.innerHTML += element;
            escolhas.style.display = "none";
        }, 50 *i);
    });
    setTimeout(() =>{escolhas.style.display = "flex";}, 50 * falaSplit.length);
}
function mudarSprite(valor){
    if(valor >= 0){
    imagem_sprite_Denji.src = `/imagens/denji/sprites/denji_sprite_${valor}.png`;
    }else{
        imagem_sprite_Denji.src = "";
    }
}
function dado(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max)) + 1;
}


// conversando com denji
export function falando_Denji(){
    //aparecendo as falas :D
    falas.style.display = "flex";
    sprites.style.display = "flex";
    //setando reputação
    if(jogador.gender == "F")denji.reputation = 25;
    //primeira interação
    mudarFala("RAN DAM DAM DAM DAM");
    mudarEscolhas("Quem é você??? (Car)","*fugir* (For)",`${denji.nome}??? (Car)`);
    escolha_1.onclick = quemEhVc;
    escolha_2.onclick = fugir;
    escolha_3.onclick = sabiaQuemEra;
}

function quemEhVc(){
    if(jogador().roll("Car") < denji.DT("Sab") && jogador().gender != "F"){
        denji.reputation = -15;
        mudarSprite(7);
        mudarFala("Quem sou eu??? Me diga quem é você ou vou te cortar ao meio!");
        mudarEscolhas(`Foi mal... Sou ${jogador().nome}`,"Eu que vou te cortar! Seu merda!",`Pera... Você é o ${denji.nome}? (Car)`);
        escolha_1.onclick = saudacao;
        escolha_2.onclick = luta;
        escolha_3.onclick = sabiaQuemEra;
    }else{
        denji.reputation = 10;
        mudarSprite(3);
        if(jogador().gender == "F"){ mudarFala(`Deixa eu tirar a Armadura aki... Eu sou ${denji.nome}, e qual o nome dessa gatinha ? *leve sorriso sedutor`) }
        else{mudarFala(`Meu nome é ${denji.nome}, mais conhecido como CHAINSAWMAN, e o seu?`);}
        mudarEscolhas(`Eu sou ${jogador().nome}`,`${denji.nome}...Acho que já ouvi falar...(Car)`,"Então é esse o nome que vai ta na minha aliança?");
        escolha_1.onclick = saudacao;
        escolha_2.onclick = sabiaQuemEra;
        escolha_3.onclick = dandoEmCima;
    }
}

function fugir(){
    if(jogador().roll("For") < denji.DT("For")){
        denji.reputation = -25;
        if(jogador().gender != "F"){
            if(denji.reputation < 15){
                luta();
            }else{
                mudarSprite(4);
                mudarFala(`Ta pensando que vai aonde? Foge não! *${denji.nome} te segurou*`);
                mudarEscolhas("Me solta! *tentar se soltar* (For)","Tava so apostando corrida com você :D","*Lutar");
                escolha_1.onclick = fugir;
                escolha_2.onclick = apostandoCorrida;
                escolha_3.onclick = lutar;
            }            
        }else{
            mudarSprite(2);
            mudarFala(`Porque as gostosas sempre fogem de mim??? *${denji.nome} te segurou*`)
            mudarEscolhas("Me solta! *tentar se soltar* (For)","Tava so apostando corrida com você :D","*Lutar");
                escolha_1.onclick = fugir;
                escolha_2.onclick = apostandoCorrida;
                escolha_3.onclick = lutar;
        }
    }else{
        denji.reputation = -50;
        mudarSprite(-1);
        mudarFala("Você escapou!");
        mudarEscolhas("Sair","Sair","Sair");
        escolha_1.onclick = sair;
        escolha_2.onclick = sair;
        escolha_3.onclick = sair;
    }
}

function sabiaQuemEra(){
    if(jogador().roll("Car") < denji.DT("Sab") && jogador().gender != 'F'){
        mudarSprite(4)
        mudarFala("E COMO CARALHOS VOCÊ SABIA MEU NOME??? MORRA SEU ESQUISITO!")
        mudarEscolhas("*lutar", "CALMA CARA! EU SEI DO DESENHO LA", "RELAXA! VOCÊ NÃO É UM HERÓI DO AMANHÃ????");
        escolha_1.onclick = luta;
        escolha_2.onclick = anime;
        escolha_3.onclick = herois;
    }else{
        if(jogador().gender == 'F'){
            mudarSprite(5);
            mudarFala(". . . . . . . . . . . . . . . . . \n Acho que me apaixonei UwU que gatinha ein");
            mudarEscolhas("Eu tambêm <3 \n *se aproximar para beijo","Sem querer magoar, mas... não","Ta maluco? Eu sou homem!");
            escolha_1.onclick = beijo;
            escolha_2.onclick = rejeitado;
            escolha_3.onclick = virouHomem;
        }else{
            mudarSprite(6)
            mudarFala("Uau você me conhece :) Mas . . . . . . . como?");
            mudarEscolhas("Não posso esquecer o sorriso mais lindo do mundo UwU", "Do desenho lá", "Do melhor RPG do mundo Heróis do Amanhã");
            escolha_1.onclick = dandoEmCima;
            escolha_2.onclick = anime;
            escolha_3.onclick = herois;
        }
    }
}
function saudacao(){

    if(jogador().gender == 'F'){
        mudarSprite(6);
        mudarFala(`${jogador().nome}. . . . . Acho que vai ficar bonito na certidão de casamento da gente`);
        mudarEscolhas("Esquisito","*Fugir","Melhor ainda na certidão de nascimento do nosso filho");
        escolha_1.onclick = deuFora;
        escolha_2.onclick = fugir;
        escolha_3.onclick = dandoEmCima;
    }
}

//mecanica de luta
const barraHP = document.querySelector("#barraHP div");
function luta(){
    let x1 = true;

        mudarSprite(7);
        if(denji.vida >= denji.lvl*(10 + denji.modCon)*0.7)mudarFala("HAHAHAHAHA VAI SER UMA MARAVILHA TE CORTAR AO MEIO");
        if(denji.vida < denji.lvl*(10 + denji.modCon)*0.7 && denji.vida >= denji.lvl*(10 + denji.modCon)*0.4)mudarFala("SEU MALDITO VOU TE CORTARRRRRRRRRRRRRR");
        if(denji.vida < denji.lvl*(10 + denji.modCon)*0.4)mudarFala("Arf Arf Arf, Você é até forte, mas vai APANHAR HAHAHHAHAHAHAHA");
        mudarEscolhas(`Bater com ${jogador().inv[0].type}`,"*fugir(For)","*esquivar(Dex)");
        escolha_1.onclick = bater;
        escolha_2.onclick = fugir;
        escolha_3.onclick = esquivar;
}
function bater(){
    let valorDado = dado(20);
    if(valorDado + jogador().getMod(jogador().inv[0].attribute) + Math.floor(jogador().lvl/2) >= denji.armor){
        if(valorDado == 20){
            denji.vida -= jogador().inv[0].rollDamage() + jogador().inv[0].rollDamage() + jogador().getMod(jogador().inv[0].attribute)
            console.log(denji.vida)
        }else{
            denji.vida -= 1* jogador().inv[0].rollDamage() + jogador().getMod(jogador().inv[0].attribute)
            console.log(denji.vida)
        }
        if(denji.vida >= denji.lvl*(10 + denji.modCon)*0.7){
            switch(dado(6)){
                case 1:
                    mudarFala("MORRA LIXO!")
                    break;
                case 2:
                    mudarFala("FRACO!")
                    break;
                case 3:
                    mudarFala("MORRA!")
                    break;
                case 4:
                    mudarFala("TA FRACO EIN?")
                    break;
                case 5:
                    mudarFala("TA FACIL EIN!")
                    break;
                case 6:
                    mudarFala("RAN DAM DAM DAM DAM")
                    break;
            }
        }
            if(denji.vida < denji.lvl*(10 + denji.modCon)*0.7 && denji.vida >= denji.lvl*(10 + denji.modCon)*0.4){
                switch(dado(6)){
                    case 1:
                        mudarFala("AGORA SIM!")
                        break;
                    case 2:
                        mudarFala("VEM PRA CIMA!")
                        break;
                    case 3:
                        mudarFala("NEWBA!")
                        break;
                    case 4:
                        mudarFala("TOMA ESSA!")
                        break;
                    case 5:
                        mudarFala("VOU TE AMASSAR!")
                        break;
                    case 6:
                        mudarFala("*barulhos de motosserra")
                        break;
                }
            }
        if(denji.vida < denji.lvl*(10 + denji.modCon)*0.4){
            switch(dado(6)){
                case 1:
                    mudarFala("NÃO VOU DESISTIR")
                    break;
                case 2:
                    mudarFala("MALDITO!")
                    break;
                case 3:
                    mudarFala("FILHO DA...")
                    break;
                case 4:
                    mudarFala("CARALHO")
                    break;
                case 5:
                    mudarFala("Arf Arf Arf")
                    break;
                case 6:
                    mudarFala("*ele ta cansado")
                    break;
            }
        }
            if(denji.vida <= 0){
            alert("DENJI MORREU");
        }
    }else{
        mudarFala("*Você Errou");
    }
}
function esquivar(){

}