const name=document.getElementById("name");
const form = document.querySelector("#form");
const lastname=document.getElementById("lastname");
const texto=document.getElementById("texto");
const boton=document.getElementById("boton");

const name2=document.querySelector("#name");
form.addEventListener('submit',start)
name2.setAttribute("onchange",'console.log(name2.value)');
function start(event){
    event.preventDefault();//*Con esta funcion el navegador no se reinicia
    let final= "Hola mi nombre es "+name.value+" "+lastname.value+". Soy estudiante de la UNACH";
    texto.innerHTML=final;
}
//boton.addEventListener("click",start);

