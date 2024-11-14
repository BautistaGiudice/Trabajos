"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vinilo = void 0;
var Vinilo = /** @class */ (function () {
    function Vinilo() {
    }
    Vinilo.prototype.colocarAguja = function () {
        console.log("Aguja colocada en el vinilo, comienza la reproducción.");
    };
    Vinilo.prototype.levantarAguja = function () {
        console.log("Aguja levantada del vinilo, reproducción detenida.");
    };
    return Vinilo;
}());
exports.Vinilo = Vinilo;
