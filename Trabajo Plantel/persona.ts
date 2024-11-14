export class Persona {
    public nombre:string;
    public edad:number;

    constructor (edadPersona:number, nombrePersona:string) {
        this.nombre = nombrePersona
        this.edad = edadPersona
    }

    obtenerDetalles() {
        return (`Nombre: ${this.nombre} && 'Edad: ${this.edad}`)
    }
}