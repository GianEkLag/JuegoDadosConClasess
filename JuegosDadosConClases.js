//Juegos de dados con clases
//Gian Abdiel Ek Huerta
// Version 1.1


//clase jugador
class jugador{
    #nombre;
    #caraDado1;
    #caraDado2;

    constructor(nombre){
        this.#nombre = nombre
        this.#caraDado1 = 0
        this.#caraDado2 = 0
    }
    getNombre() {
        return this.#nombre
    }
    setNombre(Nombre){
        this.#nombre = nombre
    }

    getcaradado1(){
        return this.#caraDado1
    }
    setcaradado1(caraDado1){
        this.#caradado1 = caraDado1
    }
    getcaradado2(){
        return this.#caraDado2
    }
    setcaradado2(){
        this.#caradado2 = caraDado2
    }
}   

//Clase juego dado
class JuegoDado{
    numeroDeJuego
    jugador1
    jugador2
    GanadorDePartida = ""
    constructor (numeroDeJuego, jug1, jug2){
        this.numeroDeJuego = numeroDeJuego
        this.jugador1 = jug1
        this.jugador2 = jug2

    }
    tirarDados(){
        this.jugador1.setcaraDado1(Math.round((Math.random()* 5)+ 1))
        this.jugador1.setcaraDado2(Math.round((Math.random()* 5)+ 1))
        this.jugador2.setcaraDado1(Math.round((Math.random()* 5)+ 1))
        this.jugador1.setcaraDado2(Math.round((Math.random()* 5)+ 1))
    }
    Ganador(){
        if (((this.jugador1.getcaraDado1() + this.jugador1.getcaraDado2()) == 7)
            && ((this.jugador2.getcaraDado1() + this.jugador2.getcaraDado2()) != 7))
            return this.jugador1.getNombre()
        else if (((this.jugador2.getcaraDado1() + this.jugador2.getcaraDado2()) == 7)
            && ((this.jugador1.getcaraDado1() + this.jugador2.getcaraDado2()) != 7))
            return this.jugador2.getNombre()
        else return null;
    }
    
}
//Clase de torneo de los dados
class TorneoDados{
    jugadas = new Array()
    #juegosGanadosJugador1
    #juegosGanadosJugador2

    setJuegosGanadosJugador1(jugad1){
        this.#juegosGanadosJugador1 = jugad1
    } 
    getJuegosGanadosJugador1(){
        return this.#juegosGanadosJugador1
    }
    setJuegosGanadosJugador2(jugad2){
        this.#juegosGanadosJugador2 = jugad2
    } 
    getJuegosGanadosJugador2(){
        return this.#juegosGanadosJugador2
    }

    //donde inicia el torneo
    hacer(jug1, jug2){
        console.log("HA COMENZADO EL TORNEO!! "+ jug1.getNombre()+ " Y "+ jug2.getNombre())
        this.#juegosGanadosJugador1 = 0
        this.#juegosGanadosJugador2 = 0
    }

    //Proceso del juego de las rondas
    Game(){
        let miniVictorias = 3
        let k = 1
        let winer = false
        let textoGanador = ""

        do{
            let partida = new JuegoDado(k, jug1, jug2)
            partida.tirarDados()
            let ganador = partida.determinaGanador()

            //Verificacion del ganador
            if (ganador === jug1.getNombre()){
                this.#juegosGanadosJugador1++
                textoGanador = jug1.getNombre()
            }
            if (ganador === jug2.getNombre()){
                this.#juegosGanadosJugador2++
                textoGanador = jug2.getNombre()
            }
            if (ganador === null){
                textoGanador = "EMPATE"
            }

            partida.GanadorDePartida = textoGanador

            this.jugadas.push(partida)

            if (this.#juegosGanadosJugador1 === miniVictorias || this.#juegosGanadosJugador2 === miniVictorias){
                winer = true
            }
            k++
                
        }while (winer === false)
    }
    resultado(){
        if (this.#juegosGanadosJugador1 === 3){
            return jug1.getNombre()
        }else{
            return jug2.getNombre()
        }

    }
    
}
//Proporcionamos las rondas ganadas de los jugadores

let jug1 = new jugador("Mario")
let jug2 = new jugador("Juan")
let ronda1 = new TorneoDados()
ronda1.jugar()
let array = ronda1.jugadas

for (let i = 0; i < array.length; i++){
    console.log("Ganador de la partida: "+ (i+1)+ "Es: "+ array[i].GanadorDePartida)
}
console.log("El Ganador de la partida es: "+ ronda1.resultado())
