import { Persona } from './persona'
import { Jugador } from './jugador'
import { DirectorTecnico } from './directortecnico'
import { MedicoDeportivo } from './medicodeportivo'
import { IJugador } from './ijugador'
import { Seleccion } from './seleccion'


let messi:Jugador = new Jugador(38, 'Messi', 'delantero', 38, 250)
let curandero:MedicoDeportivo = new MedicoDeportivo(29, 'Roberto', 'Masajista', 1)
let director:DirectorTecnico = new DirectorTecnico(45, 'Diego', 'Intermedia')
let plantel:Seleccion = new Seleccion(director, curandero)


plantel.agregarJugador(messi)
plantel.agregarMedicoDeportivo(curandero)
plantel.listarJugadores()

export { plantel }