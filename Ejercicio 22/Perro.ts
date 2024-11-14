import { Animal } from "./IAnimal";

export class Perro implements Animal {
    hacerSonido(): void {
        console.log("Guau guau");
    }

    mover(): void {
        console.log("El perro corre.");
    }
}