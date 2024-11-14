"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadora = void 0;
var Computadora = /** @class */ (function () {
    function Computadora(builder) {
        this.procesador = builder.procesador;
        this.ram = builder.ram;
        this.almacenamiento = builder.almacenamiento;
        this.tarjetaGrafica = builder.tarjetaGrafica;
        this.sistemaOperativo = builder.sistemaOperativo;
    }
    Computadora.prototype.mostrarEspecificaciones = function () {
        console.log("Procesador: ".concat(this.procesador));
        console.log("RAM: ".concat(this.ram, " GB"));
        console.log("Almacenamiento: ".concat(this.almacenamiento, " GB"));
        console.log("Tarjeta Gr\u00E1fica: ".concat(this.tarjetaGrafica));
        console.log("Sistema Operativo: ".concat(this.sistemaOperativo));
    };
    return Computadora;
}());
exports.Computadora = Computadora;
