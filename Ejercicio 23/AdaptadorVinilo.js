"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptadorVinilo = void 0;
var AdaptadorVinilo = /** @class */ (function () {
    function AdaptadorVinilo(vinilo) {
        this.vinilo = vinilo;
    }
    AdaptadorVinilo.prototype.reproducir = function () {
        this.vinilo.colocarAguja();
    };
    AdaptadorVinilo.prototype.detener = function () {
        this.vinilo.levantarAguja();
    };
    return AdaptadorVinilo;
}());
exports.AdaptadorVinilo = AdaptadorVinilo;
