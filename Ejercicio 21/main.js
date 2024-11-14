"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComputadoraBuilder_1 = require("./ComputadoraBuilder");
var computadoraPersonalizada = new ComputadoraBuilder_1.ComputadoraBuilder()
    .setProcesador("Intel Core i7")
    .setRAM(16)
    .setAlmacenamiento(512)
    .setTarjetaGrafica("NVIDIA RTX 3060")
    .setSistemaOperativo("Windows 11")
    .build();
computadoraPersonalizada.mostrarEspecificaciones();
