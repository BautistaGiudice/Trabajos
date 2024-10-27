"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(edadPersona, nombrePersona) {
        this.nombre = nombrePersona;
        this.edad = edadPersona;
    }
    Persona.prototype.obtenerDetalles = function () {
        return ("Nombre: ".concat(this.nombre, " && 'Edad: ").concat(this.edad));
    };
    return Persona;
}());
exports.Persona = Persona;
