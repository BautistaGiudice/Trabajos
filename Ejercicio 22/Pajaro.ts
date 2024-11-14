import { Animal } from "./IAnimal";

export class Pajaro implements Animal {
    hacerSonido(): void {
        console.log("Pío pío");
    }

    mover(): void {
        console.log("El pájaro vuela.");
    }
}