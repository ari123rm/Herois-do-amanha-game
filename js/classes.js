class personagem{
    #nick;
    #level;
    #genero;
    #CA;
    #hp;
    #forca;
    #destreza;
    #constituicao;
    #inteligencia;
    #sabedoria;
    #carisma;
    #inventario
    constructor(anick,alevel,atributos,agenero,ainventario){
        this.#nick = anick;
        this.#level = alevel;
        this.#forca = atributos[0];
        this.#destreza = atributos[1];
        this.#constituicao = atributos[2];
        this.#inteligencia = atributos[3];
        this.#sabedoria = atributos[4];
        this.#carisma = atributos[5];
        this.#genero = agenero;
        this.#CA = 10 + this.modDex;
        this.#hp = 10 + this.modCon;
        this.#inventario = ainventario;
    }

    get nome(){
        return this.#nick;
    }
    set nome(anick){
        this.#nick = anick;
    }

    get lvl(){
        return this.#level;
    }
    set lvl(alvl){
        this.#level = alvl;
    }

    set for(afor){
        this.#forca = aforca; 
    }
    set dex(adex){
        this.#destreza = adex;
    }
    set con(acon){
        this.#constituicao = acon; 
    }
    set int(aint){
        this.#inteligencia = aint;
    }
    set sab(asab){
        this.#sabedoria = asab; 
    }
    set car(acar){
        this.#carisma = acar;
    }
    set vida(ahp){
        this.#hp = ahp;
    }
    set inv(ainv){
        this.#inventario.push(ainv);
    }

    get modFor(){
        return Math.floor((this.#forca-10)/2);
    }
    get modDex(){
        return Math.floor((this.#destreza-10)/2);
    }
    get modCon(){
        return Math.floor((this.#constituicao-10)/2);
    }
    get modInt(){
        return Math.floor((this.#inteligencia-10)/2);
    }
    get modSab(){
        return Math.floor((this.#sabedoria-10)/2);
    }
    get modCar(){
        return Math.floor((this.#carisma-10)/2);
    }
    get gender(){
        return this.#genero;
    }
    get armor(){
        return this.#CA;
    }
    get vida(){
        return this.#hp;
    }
    get inv(){
        return this.#inventario;
    }


    DT(atribute){
        switch(atribute){
            case "For":
                return 8 + this.modFor + Math.floor(this.lvl / 2 );
                break;
            case "Dex":
                return 8 + this.modDex + Math.floor(this.lvl / 2 );
                break;
            case "Con":
                return 8 + this.modCon + Math.floor(this.lvl / 2 );
                break;
            case "Int":
                return 8 + this.modInt + Math.floor(this.lvl / 2 );
                break;
            case "Sab":
                return 8 + this.modSab + Math.floor(this.lvl / 2 );
                break;       
            case "Car":
                return 8 + this.modCar + Math.floor(this.lvl / 2 );
                break;
        }
    }
    roll(atribute){
        let dado = Math.floor(Math.random() * (20)) + 1;
        console.log(dado);
        switch(atribute){
            case "For":
                return  dado + this.modFor + Math.floor(this.lvl / 2 );
                break;
            case "Dex":
                return dado + this.modDex + Math.floor(this.lvl / 2 );
                break;
            case "Con":
                return dado + this.modCon + Math.floor(this.lvl / 2 );
                break;
            case "Int":
                return dado + this.modInt + Math.floor(this.lvl / 2 );
                break;
            case "Sab":
                return dado + this.modSab + Math.floor(this.lvl / 2 );
                break;       
            case "Car":
                return dado+ this.modCar + Math.floor(this.lvl / 2 );
                break;
        }
    }
    getMod(modificador){
        switch(modificador){
            case"For":
                return this.modFor;
            case"Dex":
                return this.modDex;
            case"Con":
                return this.modCon;
            case"Int":
                return this.modInt;
            case"Sab":
                return this.modSab;
            case"Car":
                return this.modCar;
        }

    }
    
    bater(indexItem){
        return this.inv[indexItem].rollDamage() + this.getMod(this.inv[indexItem].attribute);
    }

}

class arma{

    #tipo;
    #dano;
    #valor;
    #atributo;

    constructor(atipo,adano,avalor,aatributo){
        this.#tipo = atipo;
        this.#dano = adano;
        this.#valor = avalor;
        this.#atributo = aatributo;
    }
    get type(){
        return this.#tipo;
    }
    set type(atipo){
        this.#tipo = atipo;
    }

    get damage(){
        return this.#dano;
    }
    set damage(adano){
        this.#dano = adano;
    }

    get value(){
        return this.#valor;
    }
    set value(avalor){
        this.#valor = avalor;
    }

    get attribute(){
        return this.#atributo;
    }
    set attribute(aatributo){
        this.#atributo = aatributo;
    }

    rollDamage(){
        let daninho = this.damage.split("d");
        let roll = 0;
        for(let i = 0; i < daninho[0];i++){
            roll += dado(daninho[1]);
        }
        return roll;
    }
}

class npc extends personagem{
    #reputacao
    constructor(anick,alevel,atributos,agenero,ainv){
        super(anick,alevel,atributos,agenero,ainv);
        this.#reputacao =  50;
    }
    get reputation(){
        return this.#reputacao;
    }
    set reputation(rep){
        this.#reputacao += rep;
    }

}
class save extends personagem{
    #progresso
    constructor(anick,alevel,atributos,agenero,ainv){
        super(anick,alevel,atributos,agenero,ainv);
        this.#progresso = [];
    }
    get progress(){
        return this.#progresso;
    }
    set progress(npc){
        this.#progresso.push(npc);
    }
}

export {personagem,arma,save,npc};
function dado(max) {
    return Math.floor(Math.random() * (max)) + 1;
}