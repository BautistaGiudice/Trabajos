"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion(directorTecnico, medicoDeportivo) {
        this.jugadores = [];
        this.directorTecnico = directorTecnico;
        this.medicoDeportivo = medicoDeportivo;
        this.medicosDeportivos = [];
    }
    Seleccion.prototype.agregarJugador = function (jugador) {
        this.jugadores.push(jugador);
    };
    Seleccion.prototype.quitarJugador = function (numero) {
        this.jugadores = this.jugadores.filter(function (jugador) { return jugador.numero !== numero; });
    };
    Seleccion.prototype.editarJugador = function (numero, nuevosDatos) {
        var jugador = this.jugadores.find(function (j) { return j.numero === numero; });
        if (jugador) {
            Object.assign(jugador, nuevosDatos);
        }
        else {
            console.log("No se ha encontrado ningun jugador con este numero.");
        }
    };
    Seleccion.prototype.listarJugadores = function () {
        this.jugadores.forEach(function (jugador) {
            console.log(jugador.obtenerDetalles());
        });
    };
    Seleccion.prototype.getCantJugadores = function () {
        return this.jugadores.length;
    };
    Seleccion.prototype.getJugadores = function () {
        return this.jugadores;
    };
    Seleccion.prototype.agregarMedicoDeportivo = function (medico) {
        this.medicosDeportivos.push(medico);
    };
    Seleccion.prototype.removerMedicoDeportivo = function (id) {
        this.medicosDeportivos = this.medicosDeportivos.filter(function (medico) { return medico.id !== id; });
    };
    Seleccion.prototype.listarMedicos = function () {
        if (this.jugadores.length > 0) {
            this.medicosDeportivos.forEach(function (medico) {
                console.log(medico.obtenerDetalles());
            });
        }
        else {
            console.log("No hay Equipo Medico Deportivo.");
        }
    };
    Seleccion.prototype.agregarDt = function (persona) {
        if (!this.directorTecnico) {
            this.directorTecnico = persona;
            console.log("Has agregado correctamente a un Director Tecnico");
        }
        else {
            console.log("Ya hay un director tecnico.");
        }
    };
    Seleccion.prototype.removerDt = function () {
        if (this.directorTecnico) {
            this.directorTecnico = undefined;
            console.log("Has removido correctamente al Director Tecnico.");
        }
        else {
            console.log("No hay ningun Director Tecnico.");
        }
    };
    return Seleccion;
}());
exports.Seleccion = Seleccion;
