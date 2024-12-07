
/*Objetivo del ejercicio:
- escribir la traducción de una palabra de alemán a español
- Sólo hay dos intentos
*/


function traducir(){

let intentos = 2; 
let identificar = true; 

do{
    //instrucción
    let palabra = prompt("Traduce 'der Hund' al español (Sólo tienes 2 intentos)");
    
    // si cancela o no escribe nada
    if(palabra == null || palabra ==""){
        alert("Noch einmal / Intenta de nuevo");
        break; 
    }

    //si la respuesta es correcta
    if(palabra === "el perro" && intentos > 0){ 
        alert("Gut gemacht!/ ¡Bien hecho!");
        identificar = false; //rompe, si la respuesta es correcta y si es falsa, resta intentos
    }else{
        intentos--; 
    if(intentos > 0){ 
        alert("Falsch!/¡Incorrecto! Te quedan" + intentos + " intentos.");
    }else{
        alert("Has superado el número de intentos. La respuesta correcta es 'el perro'");
        break;
    } 
    }
} while(identificar);

}
traducir()

 


   
 






