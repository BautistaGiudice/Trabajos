"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FabricaAnimal_1 = require("./FabricaAnimal");
var animal1 = FabricaAnimal_1.FabricaAnimal.crearAnimal("perro");
if (animal1) {
    animal1.hacerSonido();
    animal1.mover();
}
var animal2 = FabricaAnimal_1.FabricaAnimal.crearAnimal("gato");
if (animal2) {
    animal2.hacerSonido();
    animal2.mover();
}
var animal3 = FabricaAnimal_1.FabricaAnimal.crearAnimal("pajaro");
if (animal3) {
    animal3.hacerSonido();
    animal3.mover();
}
