// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if(listaAmigos.includes(nombre)) {
        return alert(`${nombre} ya fue agregado a la lista.`);
    }
    if(listaAmigos.length >= 5) {
        return alert("No se pueden agregar más amigos a la lista.");
    }
    listaAmigos.push(nombre); 
    asignarTextoElemento("#listaAmigos", construirListaAmigos());
}

function construirListaAmigos() {
    let lista = "<ul>";
    for(let i = 0; i < listaAmigos.length; i++) {
        lista += "<li>" + (i+1) +". " + listaAmigos[i] + "</li>";
    }
    lista += "</ul>";
    return lista;
}

function sortearAmigo() {
    if(listaAmigos.length == 0) {
        return alert("No hay amigos en la lista.");
    }
    let indice = Math.floor(Math.random() * listaAmigos.length);
    asignarTextoElemento("#resultado", "El amigo secreto es: " + listaAmigos[indice]);
    
    // quitar el amigoSorteado de la lista
    listaAmigos.splice(indice, 1);
    asignarTextoElemento("#listaAmigos", construirListaAmigos());
}

function reinicio(){
    listaAmigos = [];
    asignarTextoElemento("#listaAmigos", "");
    asignarTextoElemento("#resultado", "");
    return alert("Lista de amigos reiniciada.");
}

function testing() {
    console.log(listaAmigos);
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

