"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugador = void 0;
var persona_1 = require("./persona");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(edad, nombre, posicion, numero, goles) {
        var _this = _super.call(this, edad, nombre) || this;
        _this.posicion = posicion;
        _this.numero = numero;
        _this.goles = goles;
        return _this;
    }
    Jugador.prototype.obtenerDetalles = function () {
        return "Jugador: ".concat(this.nombre, ", Edad: ").concat(this.edad, ", Posici\u00F3n: ").concat(this.posicion, ", N\u00FAmero: ").concat(this.numero, ", Goles: ").concat(this.goles);
    };
    Jugador.prototype.anotarGol = function () {
        return ++this.goles;
    };
    Jugador.prototype.obtenerGoles = function () {
        return this.goles;
    };
    Jugador.prototype.setGoles = function (goles) {
        this.goles = goles;
    };
    return Jugador;
}(persona_1.Persona));
exports.Jugador = Jugador;
