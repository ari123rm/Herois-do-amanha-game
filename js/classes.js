class personagem{
    constructor(anick,alevel,atributos){
        this.nick = anick;
        this.level = alevel;
        this.forca = atributos[0];
        this.destreza = atributos[1];
        this.constituicao = atributos[2];
        this.inteligencia = atributos[3];
        this.sabedoria = atributos[4];
        this.carisma = atributos[5];
    }

    get nome(){
        return this.nick;
    }
    set nome(anick){
        this.nick = anick;
    }

    get lvl(){
        return this.level;
    }
    set lvl(alvl){
        this.level = alvl;
    }

    set for(afor){
        this.forca = aforca; 
    }
    set dex(adex){
        this.destreza = adex;
    }
    set con(acon){
        this.constituicao = acon; 
    }
    set int(aint){
        this.inteligencia = aint;
    }
    set sab(asab){
        this.sabedoria = asab; 
    }
    set car(acar){
        this.carisma = acar;
    }


    get modFor(){
        return Math.floor((this.forca-10)/2);
    }
    get modDex(){
        return Math.floor((this.destreza-10)/2);
    }
    get modCon(){
        return Math.floor((this.constituicao-10)/2);
    }
    get modInt(){
        return Math.floor((this.inteligencia-10)/2);
    }
    get modSab(){
        return Math.floor((this.sabedoria-10)/2);
    }
    get modCar(){
        return Math.floor((this.carisma-10)/2);
    }
}

class arma{
    constructor(atipo,adano,avalor,aatributo){
        this.tipo = atipo;
        this.dano = adano;
        this.valor = avalor;
        this.atributo = aatributo;
    }
    get type(){
        return this.tipo;
    }
    set type(atipo){
        this.tipo = atipo;
    }

    get damage(){
        return this.dano;
    }
    set damage(adano){
        this.dano = adano;
    }

    get value(){
        return this.valor;
    }
    set value(avalor){
        this.valor = avalor;
    }

    get attribute(){
        return this.atributo;
    }
    set attribute(aatributo){
        this.atributo = aatributo;
    }    
}

export {personagem,arma};