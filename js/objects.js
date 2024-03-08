import { personagem,arma,save,npc } from "./classes.js";
// Armas
const motosserra = new arma("Motosserra","1d10",100,"For");
const arco = new arma("Arco","1d8",50,"Dex");

// NPCS
const denji = new npc("Denji Miyazaki",15,[22,14,16,8,8,10],"M",[motosserra]);
const simon = new npc("Simon Newgate", 15,[14,20,16,8,14,9],"M",[arco]);



export {denji,simon};