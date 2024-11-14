import { Vinilo } from "./Vinilo";
import { ReproductorMusica } from "./iReproductorMusica";
export class AdaptadorVinilo implements ReproductorMusica {
    private vinilo: Vinilo;

    constructor(vinilo: Vinilo) {
        this.vinilo = vinilo;
    }

    reproducir(): void {
        this.vinilo.colocarAguja();
    }

    detener(): void {
        this.vinilo.levantarAguja();
    }
}