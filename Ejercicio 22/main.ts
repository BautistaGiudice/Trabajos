import { FabricaAnimal } from "./FabricaAnimal";

const animal1 = FabricaAnimal.crearAnimal("perro");
if (animal1) {
    animal1.hacerSonido();
    animal1.mover();
}

const animal2 = FabricaAnimal.crearAnimal("gato");
if (animal2) {
    animal2.hacerSonido();
    animal2.mover();
}

const animal3 = FabricaAnimal.crearAnimal("pajaro");
if (animal3) {
    animal3.hacerSonido();
    animal3.mover();
}