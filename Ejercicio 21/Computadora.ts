import { ComputadoraBuilder } from "./ComputadoraBuilder";

export class Computadora {
    private procesador?: string;
    private ram?: number;
    private almacenamiento?: number;
    private tarjetaGrafica?: string;
    private sistemaOperativo?: string;

    constructor(builder: ComputadoraBuilder) {
        this.procesador = builder.procesador;
        this.ram = builder.ram;
        this.almacenamiento = builder.almacenamiento;
        this.tarjetaGrafica = builder.tarjetaGrafica;
        this.sistemaOperativo = builder.sistemaOperativo;
    }

    // Método para mostrar las especificaciones de la computadora
    public mostrarEspecificaciones(): void {
        console.log(`Procesador: ${this.procesador}`);
        console.log(`RAM: ${this.ram} GB`);
        console.log(`Almacenamiento: ${this.almacenamiento} GB`);
        console.log(`Tarjeta Grafica: ${this.tarjetaGrafica}`);
        console.log(`Sistema Operativo: ${this.sistemaOperativo}`);
    }
}