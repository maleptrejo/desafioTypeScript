class Resta{

    private _valor1: number;
    private _valor2: number;
 
    constructor(valor1:number, valor2:number){
        this._valor1=valor1;
        this._valor2=valor2;
    }
 
    resultado(){
        return this._valor1-this._valor2;
    }
 }

 export {Resta}