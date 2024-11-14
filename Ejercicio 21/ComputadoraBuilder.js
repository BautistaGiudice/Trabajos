"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputadoraBuilder = void 0;
var Computadora_1 = require("./Computadora");
var ComputadoraBuilder = /** @class */ (function () {
    function ComputadoraBuilder() {
    }
    ComputadoraBuilder.prototype.setProcesador = function (procesador) {
        this.procesador = procesador;
        return this;
    };
    ComputadoraBuilder.prototype.setRAM = function (ram) {
        this.ram = ram;
        return this;
    };
    ComputadoraBuilder.prototype.setAlmacenamiento = function (almacenamiento) {
        this.almacenamiento = almacenamiento;
        return this;
    };
    ComputadoraBuilder.prototype.setTarjetaGrafica = function (tarjetaGrafica) {
        this.tarjetaGrafica = tarjetaGrafica;
        return this;
    };
    ComputadoraBuilder.prototype.setSistemaOperativo = function (sistemaOperativo) {
        this.sistemaOperativo = sistemaOperativo;
        return this;
    };
    ComputadoraBuilder.prototype.build = function () {
        return new Computadora_1.Computadora(this);
    };
    return ComputadoraBuilder;
}());
exports.ComputadoraBuilder = ComputadoraBuilder;
