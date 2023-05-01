//filter

var objetos=[
    {name:"Mac air m1", precio:20000},
    {name:"Mac pro m2", precio:30000},
    {name:"Mac pro 14 pul", precio:50000}
]
//?Aqui filtramos datos segun un requerimiento
var objetoconFiltro=objetos.filter(function(articulo){
    return articulo.precio<=40000
});

//map
//?Aqui nos ayuda a mapear todo el contenido y lo almacena en un nuevo array
var nomObjetos=objetos.map(function(objeto){
    return objeto.name;
});

for (objeto of nomObjetos){
    console.log(objeto);
}

//find
//?Valida si existe la mac pro m2
var existObjetos=objetos.find(function(objeto){
    return objeto.name === "Mac pro m2"
})
for (objeto of existObjetos){
    console.log(objeto);
}

//for each
objetos.forEach(function(objeto){
    console.log("Hay en inventario: "+objeto.name);
});

//some
//?Regresa un solo verdadero o falso

var objeto_varato=objetos.some(function(objeto){
    return objeto.precio <=40000;
});
