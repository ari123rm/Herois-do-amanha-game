import { Personagem,Arma,Save,Npc } from "./classes.js";
// Armas
const motosserra = new Arma("Motosserra","1d10",100,"For");
const arco = new Arma("Arco","1d8",50,"Dex");
const mao = new Arma("Soco","1d4",0,"For");

export {motosserra,arco,mao};
// NPCS
const denji = new Npc("Denji Miyazaki",12,[22,14,16,8,8,10],"M",[motosserra]);
const simon = new Npc("Simon Newgate", 12,[14,20,16,8,14,9],"M",[arco]);



export {denji,simon};