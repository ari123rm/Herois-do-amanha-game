import { personagem,arma } from "./classes.js";


const nick = document.querySelector("#nickname")
const diminuirAtributo = document.querySelectorAll(".diminuirAtributo");
const aumentarAtributo = document.querySelectorAll(".aumentarAtributo");
const valorAtributo = document.querySelectorAll(".valorAtributo");
const points = document.querySelector("#pontos-de-atributos");
const modificadores = document.querySelectorAll(".modAtributo");
//função para diminuir o valor do atributo

const diminuirFor = document.querySelector("#diminuirFor");
const diminuirDex = document.querySelector("#diminuirDex");
const diminuirCon = document.querySelector("#diminuirCon");
const diminuirInt = document.querySelector("#diminuirInt");
const diminuirSab = document.querySelector("#diminuirSab");
const diminuirCar = document.querySelector("#diminuirCar");
function diminuir_Atributo(index){
    if(parseInt(valorAtributo[index].innerText) >8 && parseInt(points.innerText) >= 0){

        valorAtributo[index].innerText = parseInt(valorAtributo[index].innerText) - 1 ;
        modificadores[index].innerText = Math.floor((parseInt(valorAtributo[index].innerText) - 10)/2);
        if(parseInt(valorAtributo[index].innerText) >= 13){
            points.innerText = parseInt(points.innerText) + 2;
        }else{
            points.innerText = parseInt(points.innerText) + 1;
        }

    }
}

diminuirFor.onclick = () =>{
    diminuir_Atributo(0);
}
diminuirDex.onclick = () =>{
    diminuir_Atributo(1);
}
diminuirCon.onclick = () =>{
    diminuir_Atributo(2);
}
diminuirInt.onclick = () =>{
    diminuir_Atributo(3);
}
diminuirSab.onclick = () =>{
    diminuir_Atributo(4);
}
diminuirCar.onclick = () =>{
    diminuir_Atributo(5);
}

//função para aumentar o valor do atributo

    const aumentarFor = document.querySelector("#aumentarFor");
    const aumentarDex = document.querySelector("#aumentarDex");
    const aumentarCon = document.querySelector("#aumentarCon");
    const aumentarInt = document.querySelector("#aumentarInt");
    const aumentarSab = document.querySelector("#aumentarSab");
    const aumentarCar = document.querySelector("#aumentarCar");
    function aumentar_Atributo(index){
        if(parseInt(valorAtributo[index].innerText) < 15 && parseInt(points.innerText) > 0){
            valorAtributo[index].innerText = parseInt(valorAtributo[index].innerText) + 1 ;
            modificadores[index].innerText = Math.floor((parseInt(valorAtributo[index].innerText) - 10)/2);
            if(Math.floor((parseInt(valorAtributo[index].innerText) - 10)/2) > 0){
                modificadores[index].innerText = "+" + modificadores[index].innerText;
            }
            if(parseInt(valorAtributo[index].innerText) > 13){
                points.innerText = parseInt(points.innerText) - 2;
            }else{
                points.innerText = parseInt(points.innerText) - 1;
            }
        }
    }
    
    aumentarFor.onclick = () =>{
        aumentar_Atributo(0);
    }
    aumentarDex.onclick = () =>{
        aumentar_Atributo(1);
    }
    aumentarCon.onclick = () =>{
        aumentar_Atributo(2);
    }
    aumentarInt.onclick = () =>{
        aumentar_Atributo(3);
    }
    aumentarSab.onclick = () =>{
        aumentar_Atributo(4);
    }
    aumentarCar.onclick = () =>{
        aumentar_Atributo(5);
    }

//função para criar o personagem jogavel

const atributoPrincipal = document.querySelector("#atributoPrincipal");
const atributoSecundario = document.querySelector("#atributoSecundario");

const criar_prota = document.querySelector("#criar-prota");

function build_prota(){
    if(atributoPrincipal.value != "selecionePricipal" && atributoSecundario.value != "selecionePricipal"  && nick.value != ""){
        if(atributoPrincipal.value != atributoSecundario.value){
                if(parseInt(points.innerText) == 0){
                let atributos = [];
                for(let i=0;i<6;i++){
                    atributos.push(parseInt(valorAtributo[i].innerText));
                }
                atributos[atributoPrincipal.value] =atributos[atributoPrincipal.value] +2;
                atributos[atributoSecundario.value] =atributos[atributoSecundario.value] +1;
                
                const protagonista = new personagem(nick.value,1,atributos);
                console.log(protagonista);
            }else{
                alert("Use todos os pontos de atributos!")
            }
        }else{
            alert("Atributo PRINCIPAL não pode ser igual ao SECUNDARIO!");
        }
    }else{
        alert("Preencha todos os campos!");
    }
}   
criar_prota.onclick = build_prota;
