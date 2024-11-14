import { ComputadoraBuilder } from "./ComputadoraBuilder";

const computadoraPersonalizada = new ComputadoraBuilder()
    .setProcesador("Intel Core i7")
    .setRAM(16)
    .setAlmacenamiento(512)
    .setTarjetaGrafica("NVIDIA RTX 3060")
    .setSistemaOperativo("Windows 11")
    .build();

computadoraPersonalizada.mostrarEspecificaciones();