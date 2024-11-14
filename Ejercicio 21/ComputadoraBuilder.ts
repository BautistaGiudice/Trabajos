import { Computadora } from "./Computadora";

export class ComputadoraBuilder {
    public procesador?: string;
    public ram?: number;
    public almacenamiento?: number;
    public tarjetaGrafica?: string;
    public sistemaOperativo?: string;

    setProcesador(procesador: string): ComputadoraBuilder {
        this.procesador = procesador;
        return this;
    }

    setRAM(ram: number): ComputadoraBuilder {
        this.ram = ram;
        return this;
    }

    setAlmacenamiento(almacenamiento: number): ComputadoraBuilder {
        this.almacenamiento = almacenamiento;
        return this;
    }

    setTarjetaGrafica(tarjetaGrafica: string): ComputadoraBuilder {
        this.tarjetaGrafica = tarjetaGrafica;
        return this;
    }

    setSistemaOperativo(sistemaOperativo: string): ComputadoraBuilder {
        this.sistemaOperativo = sistemaOperativo;
        return this;
    }

    build(): Computadora {
        return new Computadora(this);
    }
}