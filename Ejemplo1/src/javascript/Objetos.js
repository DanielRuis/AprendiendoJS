//?Crear un solo carro
var carro={
    marca: "Ford",
    modelo: "Mustang",
    year: 2018,
    encender: function(){
        console.log("Encendiendo auto");
    },
    detalleCarro: function(){
        console.log('Este auto es un '+this.marca)
    }
}
console.log(carro.modelo)
carro.encender();
carro.detalleCarro();

//?crear muchos carros

function carro1(marca,modelo,year){
    this.marca = marca
    this.modelo = modelo
    this.year = year

}
//?instanciamos un nuevo carro
miCarro=new carro1("Porsche","911",2020);
esposaCarro=new carro1("Aston Martin","DBX",2021);
console.log(miCarro.modelo);//*Imprimimos
console.log(esposaCarro.modelo);//*Imprimimos
var Lista=[]
function addCarro(){
    for(var i=0;i<3;i++){
        var marca=prompt("Ingrea la marca");
        var modelo=prompt("Ingrea el modelo");
        var year=prompt("Ingrea el año");
        Lista.push(new carro1(marca,modelo,year))
    }
}
function imprimir(Lista){
    for(carro of Lista){
        console.log(carro.modelo);
    }
}

