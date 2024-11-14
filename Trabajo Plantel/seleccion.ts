import { Persona } from './persona'
import { Jugador } from './jugador'
import { DirectorTecnico } from './directortecnico'
import { MedicoDeportivo } from './medicodeportivo'
import { IJugador } from './ijugador'

export class Seleccion {
    public jugadores: Jugador[];
    public medicosDeportivos: MedicoDeportivo[];
    public directorTecnico?: DirectorTecnico
    public medicoDeportivo: MedicoDeportivo

    constructor(directorTecnico: DirectorTecnico, medicoDeportivo: MedicoDeportivo) {
        this.jugadores = [];
        this.directorTecnico = directorTecnico;
        this.medicoDeportivo = medicoDeportivo;
        this.medicosDeportivos = []
    }

    agregarJugador(jugador: Jugador): void {
        this.jugadores.push(jugador);
    }

    quitarJugador(numero: number): void {
        this.jugadores = this.jugadores.filter(jugador => jugador.numero !== numero)
    }

    public editarJugador(numero: number, nuevosDatos: Partial<Jugador>): void {
        const jugador = this.jugadores.find(j => j.numero === numero);
        if (jugador) {
            Object.assign(jugador, nuevosDatos);
        } else {
            console.log("No se ha encontrado ningun jugador con este numero.")
        }
    }

    public listarJugadores(): void {
        this.jugadores.forEach(jugador => {
            console.log(jugador.obtenerDetalles());
        });
    }

    getCantJugadores(): number {
        return this.jugadores.length
    }

    getJugadores(): Jugador[] {
        return this.jugadores;
    }

    agregarMedicoDeportivo(medico) {
        this.medicosDeportivos.push(medico)
    }

    removerMedicoDeportivo(id) {
        this.medicosDeportivos = this.medicosDeportivos.filter(medico => medico.id !== id)
    }

    public listarMedicos(): void {
        if (this.jugadores.length > 0) {
            this.medicosDeportivos.forEach(medico => {
                console.log(medico.obtenerDetalles());
            });
        } else {
            console.log("No hay Equipo Medico Deportivo.")
        }
    }

    agregarDt(persona) {
        if (!this.directorTecnico) {
            this.directorTecnico = persona
            console.log("Has agregado correctamente a un Director Tecnico")
        } else {
            console.log("Ya hay un director tecnico.")
        }
    }

    removerDt() {
        if (this.directorTecnico) {
            this.directorTecnico = undefined
            console.log("Has removido correctamente al Director Tecnico.")
        } else {
            console.log("No hay ningun Director Tecnico.")
        }
    }
}