function imprimir(i){
    console.log("Hola mundo, soy el mensaje: "+i);
}
for(var i=0;i<3;i++){
    imprimir(i);
}

var alumnos=["daniel","adrian","erick","eduardo"]
function imprimir2(alumno){
    console.log("Hola mundo, soy el alumno: "+alumno);
}
//?Aqui obtengo el index de cada uno de los mienbros de mi arreglo
for (var x in alumnos){
    imprimir2(alumnos[x]);
}
//?Aqui obtengo todo lo que este en mi arreglo
for (var alumno of alumnos){
    imprimir2(alumno);
}
alumno.le