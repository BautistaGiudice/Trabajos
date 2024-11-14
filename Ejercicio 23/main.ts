import { AdaptadorVinilo } from "./AdaptadorVinilo";
import { ReproductorMusica } from "./iReproductorMusica";
import { Vinilo } from "./Vinilo";

const miVinilo = new Vinilo();
const reproductor: ReproductorMusica = new AdaptadorVinilo(miVinilo);

reproductor.reproducir();
reproductor.detener();