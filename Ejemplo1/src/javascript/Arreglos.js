var frutas=["sandia","platano","manzana"]
console.log(frutas.indexOf("manzana"))//Nos dice la posición de manzana 
frutas.push("mandarina")//agrega algo al ultimo
var i=0;
while(i<frutas.length){
    console.log(frutas[i]);
    i++;
}
console.log("-----------");
i=0;
frutas.pop()//borra el ultimo
while(i<frutas.length){
    console.log(frutas[i]);
    i++;
}
console.log("-----------");
i=0;
frutas.unshift("tacos")//agrega algo al inicio
while(i<frutas.length){
    console.log(frutas[i]);
    i++;
}
console.log("-----------");
i=0;
frutas.shift()//Borra al primero
while(i<frutas.length){
    console.log(frutas[i]);
    i++;
}


