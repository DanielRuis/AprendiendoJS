//alert("Que hace??");

//? Vamos a hcer que nuestro codigo lea nuestro html

const typeH1 = document.querySelector("h1");//*Almacenamos lo que haya en la etiqueta h1 en una variable
const typeP = document.querySelector("p");
const Text= document.querySelector("#texto")
const principal=document.querySelector(".principal");//*Almacenamos lo que haya en la etiqueta main en una variable
//?Imprimimos a todas nuestras variables
console.log({
    typeH1,
    typeP,
    Text
});
typeH1.innerHTML="Dano <span>Ruis<span>";//*es muy inseguro
typeP.innerText="Cambio a teto más seguro <span>pero no cambia las etiquetas <span>";
//?Para consultar los atributos de una etiqueta podemos hacerlos con Variable.getAttribute
console.log(typeH1.getAttribute("id"));
//?Para modificar los atributos de una etiqueta usamos Variable.setAttribute([el atributo],[Nuevo nombre])
typeH1.setAttribute("id", "SuperTitulo");
console.log(typeH1.getAttribute("id"));//*Imprimimos
//?Tambien hay un metodo pero para las clases
typeH1.classList.add("Titulo");//*Agregamos una clase
console.log(typeH1.getAttribute("class"));
//?Si queremos saber si nuestra clase posee lo que buscamos usamos contains
console.log(typeH1.classList.contains("Titulo"));
console.log(typeH1.classList.contains("itulo"));
Text.placeholder="Dano";

const img=document.createElement("img");
img.setAttribute("src","https://www.muycomputer.com/wp-content/uploads/2022/12/iPhone-5c-1000x600.jpg");
img.setAttribute("width","400");
principal.append(img);