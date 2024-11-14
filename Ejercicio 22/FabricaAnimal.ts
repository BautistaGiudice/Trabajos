import { Animal } from "./IAnimal";
import { Perro } from "./Perro";
import { Gato } from "./Gato";
import { Pajaro } from "./Pajaro";

export class FabricaAnimal {
    static crearAnimal(tipo: string): Animal | null {
        switch (tipo.toLowerCase()) {
            case "perro":
                return new Perro();
            case "gato":
                return new Gato();
            case "pajaro":
                return new Pajaro();
            default:
                console.log("Tipo de animal desconocido.");
                return null;
        }
    }
}