"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato() {
    }
    Gato.prototype.hacerSonido = function () {
        console.log("Miau");
    };
    Gato.prototype.mover = function () {
        console.log("El gato salta.");
    };
    return Gato;
}());
exports.Gato = Gato;
