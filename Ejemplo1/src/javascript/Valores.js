var edad=22;//*Declaramos una variable de tipo int pero este tipo ya no se usa
let name="Daniel Eduardo";//*Declaramos una variable de tipo String
const month=05;//* Declaramos una constante de tipo int
const day=22;

//?Trabajo con funciones

//*Funciones declarativas
function miFuncion(){

    console.log("Hola mundo");
}

miFuncion();

//*Funciones de Expresion
var Funcion2 = function(){
    return "Tengo hambre"

}

console.log(Funcion2());


//*Funciones con parametros
var Funcion3 = function(a,b){
    return a+b;
}
console.log(Funcion3(5,10));

//*Funcion de practica
function saludo(name){
    return "Hola "+name;
}
console.log(saludo("Daniel"));

function miData(name, edad){
    console.log('Hola mi nombre es '+name+', y tengo una edad de '+edad);
}

