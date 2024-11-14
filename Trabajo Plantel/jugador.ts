import { Persona } from './persona'

export class Jugador extends Persona{
    public posicion;
    public numero:number;
    private goles:number

    constructor (edad:number, nombre:string, posicion, numero:number, goles:number) {
        super(edad, nombre)
        this.posicion = posicion
        this.numero = numero
        this.goles = goles
    }

    public obtenerDetalles(): string {
        return `Jugador: ${this.nombre}, Edad: ${this.edad}, Posición: ${this.posicion}, Número: ${this.numero}, Goles: ${this.goles}`;
    }

    public anotarGol() {
        return ++this.goles
    }

    public obtenerGoles() {
        return this.goles
    }

    public setGoles(goles:number) {
        this.goles = goles;
    }
}