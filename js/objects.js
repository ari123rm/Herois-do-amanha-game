import { Personagem,Arma,Armadura,Save,Npc } from "./classes.js";
// Armas
const motosserra = new Arma("Motosserra","1d10",100,"For");
const arco = new Arma("Arco","1d8",50,"Dex");
const fuzil = new Arma("Fuzil","2d8",1500,"Dex");
const mao = new Arma("Mão","1d4",0,"For");

export {motosserra,arco,mao,fuzil};

//Armaduras

const roupa = new Armadura("Roupa",10,0,'N');
const couro = new Armadura("Armadura de Couro",12,250,'L');
const ferro = new Armadura("Armadura de Ferro",14,500,'M');
const dima = new Armadura("Armadura de Diamante",16,1500,'P');
const metalGear = new Armadura("MetalGear",18,2000,'P');


export {roupa,couro,ferro,dima,metalGear}

// NPCS
const denji = new Npc("Denji Miyazaki",12,[22,14,16,8,8,10],"M",[motosserra],[roupa]);
const simon = new Npc("Simon Newgate", 12,[14,20,16,8,14,9],"M",[arco],[roupa]);
const john_holly = new Npc("John Holly",10,[16,14,10,11,12,14],"M",[fuzil],[roupa]);


export {denji,simon,john_holly};

