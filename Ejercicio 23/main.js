"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AdaptadorVinilo_1 = require("./AdaptadorVinilo");
var Vinilo_1 = require("./Vinilo");
var miVinilo = new Vinilo_1.Vinilo();
var reproductor = new AdaptadorVinilo_1.AdaptadorVinilo(miVinilo);
reproductor.reproducir();
reproductor.detener();
