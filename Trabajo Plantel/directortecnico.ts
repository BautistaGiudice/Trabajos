import { Persona } from './persona'

export class DirectorTecnico extends Persona {
    public nivelDeExperiencia:string

    constructor (edad:number, nombre:string, nivelDeExperiencia:string) {
        super(edad, nombre)
        this.nivelDeExperiencia = nivelDeExperiencia
    }

    public obtenerDetalles() {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Nivel De Experiencia: ${this.nivelDeExperiencia}`
    }
}