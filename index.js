const valores = [{
    valor : 11,
    nombre : "as"
},{
    valor : 2,
    nombre : "2"
},{
    valor : 3,
    nombre : "3"
},{
    valor : 4,
    nombre : "4"
},{
    valor : 5,
    nombre : "5"
},{
    valor : 6,
    nombre : "6"
},{
    valor : 7,
    nombre : "7"
},{
    valor : 8,
    nombre : "8"
},{
    valor : 9,
    nombre : "9"
},{
    valor : 10,
    nombre : "10"
},{
    valor : 10,
    nombre : "j"
},{
    valor : 10,
    nombre : "q"
},{
    valor : 10,
    nombre : "k"
}
];
const palos = ["picas", "corazones", "treboles", "diamantes"]


let boton = 0;
let primeraCarta = 0;
let segundaCarta = 0;
let valorCarta = 0;
let paloCarta = 0;
let nombreCarta = 0;
let primeraCartaMano = 0 ;
let segundaCartaMano = 0 ;
let primeraCartaManoDealer = 0;
let segundaCartaManoDealer = 0;
let cartaNueva = 0;
let ultimaCarta = 0;
let ultimaRondaCarta = 0;
let cartasMano = 0;
let botonCartaNueva = 0;
let resultadoCartasMano = 0;
let pedirCartaNuevaDealer = 0;
let botonCartaNuevaDealer = 0;
let cartasManoDealer = 0;
let resultadoCartasDealer = 0;
let nuevasCartasDealer = 0;
let nuevasCartasMano = 0;
let botonCartas = 0;
let botonCartasDealer = 0;
let primeraCartaManoDealerHTML = 0;
let segundaCartaManoDealerHTML = 0;
let pedirCartaNuevaDealerHTML = 0;
let usuarioPerdedor = 0;
let usuarioGanador = 0;
let pedirUnaUltimaCarta = 0;
let botonUltimaCartaMano = 0;
let botonUltimaCartaDealer = 0;
let cartaFinalDealer = 0;
let cartaFinalDealerHTML = 0;
let botonPlantarse = 0;
let cartasFinales = 0;
let cartasFinalesDealer = 0;
let botonPlantarseDealer = 0;
let resultadoFinal = 0;


const suma = (a,b) => a + b; 
const sumaMultiple = (a,b,c) => a+b+c;
const resta = (a,b) => a - b;

const mostrarPaginas = async () => {
    try {
        const paginas = await fetch("./paginas.json");
        const contenido = await paginas.json();
        let contenedor = document.getElementById("paginas-juegos");
        contenedor.innerHTML = `<h2>Prueba otros juegos</h2>`
    contenido.forEach((pagina) => {
        let parrafo = document.createElement("div");
        parrafo.innerHTML = `<div id="parrafo-juego">
        <h2 id="pagina-juego">${pagina.juego}</h2>
        <a href =${pagina.pagina}>${pagina.pagina}</a>
        
        <h3>Cantidad de jugadores</h3>
        <p >${pagina.cantidad}</p>
        </div>
`;
        contenedor.append(parrafo);
    });
} catch (error) {
    console.log(error);
}
}

function puntaje(){
    let puntuacion = document.getElementById("ingresar-puntaje")
    puntuacion.innerHTML= `<div id="boton-ingresar">
        <input type="text" id="nombre">
        <button onclick="ingresarPuntuacion()"> Ingrese su nombre </button>
        </div>
        <div id="nombre-correcto-ingresado"></div>
        `  
    mostrarPaginas()
}
function verPuntaje(){
    let verPuntuacion = document.getElementById("ver-puntaje")
    verPuntuacion.innerHTML= `<div id="boton-ver-puntaje">
        <input type="text" id="nombre-puntaje" placeholder="Ingrese su nombre">
        <button onclick="loginNombre()"> Ver su puntaje </button>
        </div>
        `  
}


 function ingresarPuntuacion(){
    let usuariosRegistrados = localStorage.nombresIngresados ? JSON.parse(localStorage.nombresIngresados) : [];
    const puntajesGenerales = {
    nombre : document.getElementById("nombre").value,
    };

    usuariosRegistrados.push(puntajesGenerales);
    localStorage.setItem("nombresIngresados", JSON.stringify(usuariosRegistrados));

    let nombreCorrectoIngresado = document.getElementById("nombre-correcto-ingresado")
    nombreCorrectoIngresado.innerHTML = `¡Puntaje ingresado!`
    let botonIngresar = document.getElementById("boton-ingresar")
    botonIngresar.style.display = `none`
    verPuntaje()

}
function loginNombre(){
    const nombreIngresado = document.getElementById("nombre").value
    if (localStorage.getItem("nombresIngresados")){
        const requisitosNombres = JSON.parse(localStorage.getItem("nombresIngresados"));
        const usuarioBienIngresado = requisitosNombres.filter(user=>{
            return nombreIngresado === user.nombre

        })            
        if (usuarioBienIngresado.length){
            
            let verPuntuacion = document.getElementById("ver-puntaje")
            verPuntuacion.innerHTML= `<div>
            <p> Su puntuacion es de ${usuarioBienIngresado.length} </p>
            </div>

        `  
           if (usuarioBienIngresado.length == 1){
            let nombreCorrectoIngresado = document.getElementById("nombre-correcto-ingresado")
            nombreCorrectoIngresado.innerHTML = `Ese jugador no ha sido ingresado`
            let verPuntuacion = document.getElementById("ver-puntaje")
            verPuntuacion.innerHTML= `<div>
            <p> Su puntuacion es de ${usuarioBienIngresado.length-1} </p>
            </div>`
            let botonIngresar = document.getElementById("boton-ingresar")
            botonIngresar.innerHTML= ``
        } 
        } 
    }

}


function cartaManoDealer() {
    carta = valores[Math.floor(Math.random() * valores.length)];
    nombreCarta = Object.values(carta)[1];
    paloCarta = (Math.floor(Math.random() * (palos.length)));
    valorCarta = Object.values(carta)[0];
    return (valorCarta);
}
function cartaMano() {
    carta = valores[Math.floor(Math.random() * valores.length)];
    nombreCarta = Object.values(carta)[1];
    paloCarta = (Math.floor(Math.random() * (palos.length)));
    valorCarta = Object.values(carta)[0];
    return (valorCarta);
}

function plantarse(){
    botonCartaNueva.innerHTML = ""
    botonUltimaCartaMano.innerHTML=""
    botonPlantarse.innerHTML=""

}

    

function ultimaSuma(){
    if((cartasMano!=0&&cartasManoDealer!=0)&&(nuevasCartasMano==0&&nuevasCartasDealer==0&&cartasFinales==0&&cartasFinalesDealer==0)){
        resultadoFinal = resta(cartasMano,cartasManoDealer)
        if(resultadoFinal<=0){
            usuarioPerdedor = document.getElementById("perdedor");
            usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            mostrarPaginas()
        }else if(resultadoFinal>0){
            usuarioGanador = document.getElementById("ganador");
            usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
            usuarioGanador.className = "ganador" 
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            puntaje()
        }
    }
        if((cartasManoDealer!=0&&nuevasCartasMano!=0&&cartasMano!=0)&&(nuevasCartasDealer==0&&cartasFinales==0&&cartasFinalesDealer==0)){
            resultadoFinal = resta(nuevasCartasMano,cartasManoDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
                usuarioGanador.className = "ganador" 
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }else if(resultadoFinal<=0){
             usuarioPerdedor = document.getElementById("perdedor");
            usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            mostrarPaginas()
        }
        }
        if ((cartasManoDealer!=0&&nuevasCartasMano!=0&&nuevasCartasDealer!=0&&cartasMano!=0)&&(cartasFinales==0&&cartasFinalesDealer==0)){
            resultadoFinal = resta(nuevasCartasMano,nuevasCartasDealer)
            if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                mostrarPaginas()
            }else if (resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }
        }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasMano!=0&&nuevasCartasDealer!=0&&cartasFinales!=0)&&(cartasFinalesDealer==0)){
            resultadoFinal = resta(cartasFinales,nuevasCartasDealer)
            if(resultadoFinal>0){
            usuarioGanador = document.getElementById("ganador");
            usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
            usuarioGanador.className = "ganador" 
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            puntaje()}
        else if(resultadoFinal<=0){
            usuarioPerdedor = document.getElementById("perdedor");
            usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                mostrarPaginas()
        }
    }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasMano!=0&&nuevasCartasDealer!=0&&cartasFinales!=0&&cartasFinalesDealer!=0)){
            resultadoFinal = resta(cartasFinales,cartasFinalesDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            } else if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                mostrarPaginas()
            }
        }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasMano!=0&&cartasFinales!=0)&&(nuevasCartasDealer==0&&cartasFinalesDealer==0)){
            resultadoFinal = resta(cartasFinales,cartasManoDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            } else if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                mostrarPaginas()
            }
        }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasDealer!=0)&&(nuevasCartasMano==0&&cartasFinales==0&&cartasFinalesDealer==0)){
            resultadoFinal = resta(cartasMano,nuevasCartasDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }else if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                mostrarPaginas()
            }
        }
        if((cartasMano!=0&&cartasManoDealer!=0&&nuevasCartasDealer!=0&&cartasFinalesDealer!=0)&&(nuevasCartasMano==0&&cartasFinales==0)){
            resultadoFinal = resta(cartasMano,cartasFinalesDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }else if(resultadoFinal<=0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                mostrarPaginas()
            }
        }
        if((cartasMano!=0&&nuevasCartasMano!=0&&cartasManoDealer!=0&&nuevasCartasDealer!=0&&cartasFinalesDealer!=0)&&(cartasFinales==0)){
            resultadoFinal = resta(nuevasCartasMano,cartasFinalesDealer)
            if(resultadoFinal>0){
                usuarioGanador = document.getElementById("ganador");
                usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
                usuarioGanador.className = "ganador"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                puntaje()
            }else if(resultadoFinal<0){
                usuarioPerdedor = document.getElementById("perdedor");
                usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
                usuarioPerdedor.className = "perdedor"
                botonCartaNuevaDealer.innerHTML = ``
                botonCartasDealer.innerHTML = ``
                botonPlantarse.innerHTML = ""
                botonPlantarseDealer.innerHTML = ""
                botonPlantarse.innerHTML=""
                botonCartaNueva.innerHTML=""
                botonUltimaCartaMano.innerHTML=""
                botonUltimaCartaDealer.innerHTML=""
                mostrarPaginas()
            }
        }
    
    }

function PlantarseDealer(){
    
    botonCartaNueva.innerHTML = ""
    botonUltimaCartaMano.innerHTML=""
    botonPlantarse.innerHTML=""
    botonPlantarseDealer.innerHTML=""
    botonCartaNuevaDealer.innerHTML=""
    botonUltimaCartaDealer.innerHTML=""
    ultimaSuma()

}


let iniciarSimulador = document.getElementById("boton-iniciar");
iniciarSimulador.addEventListener("click", simulador);


function pedirCarta(){
    primeraCartaMano = cartaMano()
    
    primeraCarta = document.getElementById("imagenes-primera-carta-mano")
    primeraCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
    <p id="primera-carta-player"> Su primera carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
    `
    }
    function pedirSegundaCarta(){
        
        segundaCartaMano = cartaMano()
        segundaCarta = document.getElementById("imagenes-segunda-carta-mano")
        segundaCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p id="segunda-carta-player"> Su segunda carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
        cartasMano = suma(parseFloat(primeraCartaMano), parseFloat(segundaCartaMano));
        resultadoCartasMano = document.getElementById("resultado-suma-mano")
        resultadoCartasMano.innerHTML=`Sus cartas suman ${cartasMano}
        <p id="player">`;
        
        if (cartasMano===21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonCartasDealer.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonCartas.innerHTML=""
            puntaje()
          }else if(cartasMano>21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonCartasDealer.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonCartas.innerHTML=""
            mostrarPaginas()
          }
           else {
           
          botonCartas.innerHTML = ""
        botonCartasDealer = document.getElementById("boton-pedir-dealer");
        botonCartasDealer.innerHTML = `<button>Pedir cartas dealer</button>`
        botonCartasDealer.addEventListener("click", pedirCartaDealer)
        botonCartasDealer.addEventListener("click", pedirSegundaCartaDealer)
    }
     }     
     function pedirCartaDealer() {
        primeraCartaManoDealer= cartaManoDealer()

            primeraCartaManoDealerHTML = document.getElementById("imagenes-primera-carta-dealer")
            primeraCartaManoDealerHTML.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p id="primera-carta-deal"> La primera carta del dealer es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `}
        function pedirSegundaCartaDealer(){
            segundaCartaManoDealer = cartaManoDealer()
            segundaCartaManoDealerHTML = document.getElementById("imagenes-segunda-carta-dealer")
            segundaCartaManoDealerHTML.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p id="segunda-carta-deal"> La segunda carta del dealer es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
        cartasManoDealer = suma(parseFloat(primeraCartaManoDealer), parseFloat(segundaCartaManoDealer));
        resultadoCartasDealer = document.getElementById("resultado-suma-dealer")
        resultadoCartasDealer.innerHTML=`Las cartas del dealer sumar ${cartasManoDealer}`  
        botonCartasDealer.innerHTML= ""
        if(cartasManoDealer===21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonCartasDealer.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonCartas.innerHTML=""
            mostrarPaginas()
        } else if (cartasManoDealer>21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonCartasDealer.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonCartas.innerHTML=""
        }
        else{
            
            botonCartaNueva = document.getElementById("boton-pedir-nueva")
            botonCartaNueva.innerHTML = `<button>Pedir carta nueva</button>`;
            botonCartaNueva.addEventListener("click", pedirCartaNueva)
            botonPlantarse = document.getElementById("boton-plantarse")
            botonPlantarse.innerHTML = `<button> plantarse </button>`
            botonPlantarse.addEventListener("click", plantarse)
            botonPlantarseDealer = document.getElementById("boton-plantarse-dealer")
            botonPlantarseDealer.innerHTML = `<button> El dealer se planta (Finaliza el juego)</button>`
            botonPlantarseDealer.addEventListener("click", () =>{
                Swal.fire({
                    background : "#10A2B0" ,
                    title: '¿El dealer se planta?',
                    footer : `(Esto finaliza el juego)`,
                    showDenyButton: true,
                    confirmButtonText: 'El dealer se plantó',
                    denyButtonText: `Seguir jugando`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                        PlantarseDealer()
                    } else if (result.isDenied) {
                      Swal.fire('Seguimos jugando!', '', 'success')
                    }
                  })
            }
            )
            botonCartaNuevaDealer = document.getElementById("boton-pedir-carta-nueva-dealer");
            botonCartaNuevaDealer.innerHTML = `<button>Pedir carta nueva dealer</button>`
            botonCartaNuevaDealer.addEventListener("click", cartaDealerRondaDos)

        }

    }
    function pedirCartaNueva (){
        cartaNueva = cartaMano()
        
        let pedirCartaNueva = document.getElementById("imagenes-nueva-carta-mano")
        pedirCartaNueva.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p id="tercera-carta-player"> Su tercera carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
        botonCartaNueva.innerHTML = ""
    nuevasCartasMano = sumaMultiple(parseFloat(primeraCartaMano), parseFloat(segundaCartaMano), parseFloat(cartaNueva));
    resultadoCartasMano = document.getElementById("resultado-suma-mano")
    resultadoCartasMano.innerHTML=`Sus cartas ahora suman ${nuevasCartasMano}`;
        if(nuevasCartasMano>21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            mostrarPaginas()
         
    }else if(nuevasCartasMano==21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            puntaje()
    }
    else {
        botonPlantarse = document.getElementById("boton-plantarse")
        botonPlantarse.innerHTML = `<button> Plantarse </button>`
        botonPlantarse.addEventListener("click", plantarse)
        botonUltimaCartaMano = document.getElementById("boton-pedir-ultima");
        botonUltimaCartaMano.innerHTML = `<button>Pedir ultima carta</button>`;
        botonUltimaCartaMano.addEventListener("click", pedirUltimaCarta);
    }
    }
    function cartaDealerRondaDos (){
        pedirCartaNuevaDealer = cartaManoDealer()
        pedirCartaNuevaDealerHTML = document.getElementById("imagenes-nueva-carta-dealer")
        pedirCartaNuevaDealerHTML.innerHTML = `<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p id="tercera-carta-deal"> La tercera carta del dealer es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `
        nuevasCartasDealer = suma(parseFloat(cartasManoDealer), parseFloat(pedirCartaNuevaDealer));
    resultadoCartasDealer = document.getElementById("resultado-suma-dealer")
        resultadoCartasDealer.innerHTML=`El dealer ahora suma ${nuevasCartasDealer}`  
        botonCartaNuevaDealer.innerHTML= "";
        if(nuevasCartasDealer>21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            puntaje()
        }
        else if(nuevasCartasDealer===21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            mostrarPaginas()
        }
        else{
            botonUltimaCartaDealer = document.getElementById("boton-pedir-ultima-carta-dealer");
            botonUltimaCartaDealer.innerHTML = `<button>Pedir ultima carta dealer</button>`
            botonUltimaCartaDealer.addEventListener("click", ultimaCartaDealer)
            botonPlantarseDealer = document.getElementById("boton-plantarse-dealer")
            botonPlantarseDealer.innerHTML=`<button> El dealer se planta (termina el juego) </button>`
            botonPlantarseDealer.addEventListener("click", () =>{
                Swal.fire({
                    background : "#10A2B0" ,
                    title: '¿El dealer se planta?',
                    footer : `(Esto finaliza el juego)`,
                    showDenyButton: true,
                    confirmButtonText: 'El dealer se plantó',
                    denyButtonText: `Seguir jugando`,
                  }).then((result) => {
                    if (result.isConfirmed) {
                        PlantarseDealer()
                    } else if (result.isDenied) {
                      Swal.fire('Seguimos jugando!', '', 'success')
                    }
                  })
            }
            )
    }
    }
    function pedirUltimaCarta(){
        pedirUnaUltimaCarta = cartaMano()
    ultimaCarta = document.getElementById("imagenes-ultima-carta-mano")
    ultimaCarta.innerHTML=`<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
    <p id="ultima-carta-player"> Su ultima carta es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
    `

    botonUltimaCartaMano.innerHTML=""
    cartasFinales = suma(parseFloat(nuevasCartasMano),(pedirUnaUltimaCarta));
    resultadoCartasMano = document.getElementById("resultado-suma-mano")
    resultadoCartasMano.innerHTML=`la suma final de sus cartas ahora es ${cartasFinales}`;
    if(cartasFinales>21){
        usuarioPerdedor = document.getElementById("perdedor")
        usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
        usuarioPerdedor.className = "perdedor"
        botonCartaNuevaDealer.innerHTML = ``
        botonUltimaCartaDealer.innerHTML = ``
        botonCartasDealer.innerHTML = ``
        botonPlantarse.innerHTML = ""
        botonPlantarseDealer.innerHTML=""
        mostrarPaginas()
    }else if(cartasFinales<=21){
        ultimaSuma()
    }
    else{
        botonUltimaCartaDealer = document.getElementById("boton-pedir-ultima-carta-dealer");
        botonUltimaCartaDealer.innerHTML = `<button>Pedir ultima carta dealer</button>`
        botonUltimaCartaDealer.addEventListener("click", ultimaCartaDealer)
    }
    }
    function ultimaCartaDealer(){
        cartaFinalDealer = cartaManoDealer()
        cartaFinalDealerHTML = document.getElementById("imagenes-ultima-carta-dealer")
        cartaFinalDealerHTML.innerHTML = `<img src="./imagenes_cartas/${nombreCarta}${palos[paloCarta]}.png" alt="carta">
        <p id="ultima-carta-deal"> La ultima carta del dealer es ${nombreCarta} de ${palos[paloCarta]} (valor : ${valorCarta})</p>
        `

        botonUltimaCartaDealer.innerHTML=""
        cartasFinalesDealer = suma(parseFloat(nuevasCartasDealer), (cartaFinalDealer))
        resultadoCartasDealer = document.getElementById("resultado-suma-dealer")
        resultadoCartasDealer.innerHTML=`Las cartas finales del dealer suman ${cartasFinalesDealer}`
        if(cartasFinalesDealer>21){
            usuarioGanador = document.getElementById("ganador")
            usuarioGanador.innerHTML = "<h2>Usted ha ganado</h2>";
            usuarioGanador.className = "ganador"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            puntaje()
        }else if(cartasFinalesDealer==21){
            usuarioPerdedor = document.getElementById("perdedor")
            usuarioPerdedor.innerHTML = "<h2>Usted ha perdido</h2>"
            usuarioPerdedor.className = "perdedor"
            botonCartaNuevaDealer.innerHTML = ``
            botonCartasDealer.innerHTML = ``
            botonPlantarse.innerHTML = ""
            botonPlantarseDealer.innerHTML = ""
            botonPlantarse.innerHTML=""
            botonCartaNueva.innerHTML=""
            botonUltimaCartaMano.innerHTML=""
            botonUltimaCartaDealer.innerHTML=""
            mostrarPaginas()
        }else{
            ultimaSuma()
        }

    }
function simulador(){
    iniciarSimulador.innerHTML=""
    iniciarSimulador.removeEventListener("click",simulador)
    iniciarSimulador.style.marginTop = null;
    iniciarSimulador.style.border = null;
    iniciarSimulador.style.borderRadius = null;
    boton = document.getElementById("boton")
    boton.style.display = "none"
    botonCartas = document.getElementById("boton-pedir");
    botonCartas.innerHTML = `<button>Pedir cartas</button>`;
    botonCartas.addEventListener("click", pedirCarta)
    botonCartas.addEventListener("click", pedirSegundaCarta)

} 