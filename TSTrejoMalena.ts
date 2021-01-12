import {Suma} from './suma'
import {Resta} from './resta'



const operacion= (x: number, y: number, op:string): Promise<any>=>{
    return new Promise<number>(resolve=>{
            switch(op){
                case "suma":
                    let suma= new Suma (x, y)
                    resolve(suma.resultado())
                  
                    break;
                case "resta":
                    let resta= new Resta (x, y)
                    resolve(resta.resultado())
                    
                    break;
                default:
                    return 'la operacion no es válida'
                    break;
            }
          
    })
}

const operaciones= async (array: Array<Array<any>>): Promise<any>=>{

    for (let i=0; i<array.length; i++){

        let valores: number[]=array[i].slice(0, -1);
        let op: string=array[i].pop()
        let [x, y]= valores
        let result: number=  await operacion (x, y, op)
        console.log(result)

     
       }
}


console.log(operaciones([[1,4,'suma'],[1,54,'resta'],[1,67,'suma']]))






/** 
*!proyecto de typescript que utilice clases, dynamic import, Promises, async await, funciones flecha y tipado en todos sus módulos. 

**operacion recibirá dos números y un string con el nombre de la operación a efectuar entre ellos: 'suma' ó 'resta' y cargará dinámicamente un módulo para realizar dicho cálculo

**operaciones llamará a operacion con los casos de prueba, representando sus salidas.

**operacion deberá devolver el resultado a operaciones **a través de una promesa**

**Los cálculos habilitados estarán definidos en archivos separados empleando clases donde los argumentos de entrada se guardarán en propiedades instancia privadas y tendrán un método 'resultado' que hará efectiva la operación. 


function delay(milliseconds: number, count: number): Promise<number> {
    return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
}

// async function always returns a Promise
async function dramaticWelcome(): Promise<void> {
    console.log("Hello");

    for (let i = 0; i < 5; i++) {
        // await is converting Promise<number> into number
        const count: number = await delay(500, i);
        console.log(count);
    }

    console.log("World!");
}

dramaticWelcome();

*/