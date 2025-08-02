//Ctrl + F Buscar en el codigo
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

//let numeroSecreto= generarNumeroSecreto();
//let intentos= 1;
let numeroSecreto= 0;
let intentos= 0;
let listaNumerosSorteados =[];
let numeroMaximo= 10;


console.log(numeroSecreto);


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
 
function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);

    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${ (intentos==1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');


    } else {
        //El usuario no acerto

        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor')
        } else {
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos ++;
        limpiarCaja();


    }
    return;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja= document.querySelector('#valorUsuario');
    //valorCaja.value = ' ';
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10+1);
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');

    } else{
           //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    //console,log(`Número Generado: $ {numeroGenerado}`)
    }

}


function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número de 1 a ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;


}

function reiniciarJuego(){
    //Limpiar la Caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
     //Generar el número aleatorio
     //Inicializar el número de intentos
    condicionesIniciales();
    //Desahabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

  //let numeroDeUsuario = document.querySelector('input');
    //alert('Click desde el botón');
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario===numeroSecreto);