import { Persona } from './persona'
import { plantel } from './plantel'

export class MedicoDeportivo extends Persona{
    public especialidad:string
    public id:number

    constructor(edad:number, nombre:string, especialidad, id:number) {
        super(edad, nombre)
        this.id = id
        this.especialidad = especialidad
    }

    obtenerDetalles():string {
        return `Nombre: ${this.nombre}, Edad: ${this.edad}, Especialidad: ${this.especialidad}, ID: ${this.id}`
    }
}