"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
var Perro = /** @class */ (function () {
    function Perro() {
    }
    Perro.prototype.hacerSonido = function () {
        console.log("Guau guau");
    };
    Perro.prototype.mover = function () {
        console.log("El perro corre.");
    };
    return Perro;
}());
exports.Perro = Perro;
