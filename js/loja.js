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
const lojaDinheiro = document.querySelector("#loja-dinheiro-value");


const lojaButtonArmas = document.querySelectorAll(".loja-itens-armas .loja-button-compraVenda");
const lojaButtonArmaduras= document.querySelectorAll(".loja-itens-armaduras .loja-button-compraVenda");

const compraVenda = document.querySelector("#loja-vender");
lojaSair.onclick = leave;
//funções auxiliares





//função principal
export function criarLoja(){
    armasImagens.forEach((element,index) => {
        element.src = `./imagens/loja/itens/${guns[index].type}.png`;
    });
    armadurasImagens.forEach((element,index) => {
        element.src = `./imagens/loja/itens/${armors[index].name}.png`;
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
    lojaDinheiro.innerText = jogador().dinheiro;

    lojaButtonArmas.forEach((element,index) =>{
        element.onclick = () =>{
            compraVendaArma(index);
        }
    })
    lojaButtonArmaduras.forEach((element,index) =>{
        element.onclick = () =>{
            compraVendaArmadura(index);
        }
    })

}

function buscarArma(array,item){
    array.forEach((element) =>{
        if(element.type === item.type){
            
            return true;
        }
    })
    return false;
}
function buscarArmadura(array,item){
    array.forEach((element) =>{
        if(element.name === item.name){
            return true;
        }
    })
    return false;
}
function remover(array,item){
    array.forEach((element,index) => {
        if(element == item){
            array.splice(index,1);
        }
    });
}

function compraVendaArma(index){
    if(!compraVenda.checked ){
    if(jogador().dinheiro >= guns[index].value ){
        jogador().dinheiro -= guns[index].value;
        jogador().inv.push(guns[index]);
        alert(`${guns[index].type} comprado com sucesso!`);
    }else{
        alert("Saldo insuficiente");
    }
    }else{
   
        if(buscarArma(jogador().inv,guns[index])){
            jogador().dinheiro += guns[index].value;
            remover(jogador().inv,guns[index]);
            alert(`${guns[index].type} vendido com sucesso!`);
        }else{
            alert("Item não pertence ao inventario")
        }
 
    }
    lojaDinheiro.innerText = jogador().dinheiro;
}
function compraVendaArmadura(index){
    if(!compraVenda.checked ){
    if(jogador().dinheiro >= armors[index].value ){
        jogador().dinheiro -= armors[index].value;
        jogador().invArmaduras.unshift(armors[index]);
        alert(`${armors[index].name} comprado com sucesso!`);
    }else{
        alert("Saldo insuficiente");
    }
    }else{
   
        if(buscarArmadura(jogador().invArmaduras,armors[index])){
            jogador().dinheiro += armors[index].value;
            remover(jogador().invArmaduras,armors[index]);
            alert(`${armors[index].name} vendido com sucesso!`);
        }else{
            alert("Item não pertence ao inventario")
        }
 
    }
    lojaDinheiro.innerText = jogador().dinheiro;
}







