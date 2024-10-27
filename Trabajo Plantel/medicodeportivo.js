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
exports.MedicoDeportivo = void 0;
var persona_1 = require("./persona");
var MedicoDeportivo = /** @class */ (function (_super) {
    __extends(MedicoDeportivo, _super);
    function MedicoDeportivo(edad, nombre, especialidad, id) {
        var _this = _super.call(this, edad, nombre) || this;
        _this.id = id;
        _this.especialidad = especialidad;
        return _this;
    }
    MedicoDeportivo.prototype.obtenerDetalles = function () {
        return "Nombre: ".concat(this.nombre, ", Edad: ").concat(this.edad, ", Especialidad: ").concat(this.especialidad, ", ID: ").concat(this.id);
    };
    return MedicoDeportivo;
}(persona_1.Persona));
exports.MedicoDeportivo = MedicoDeportivo;
