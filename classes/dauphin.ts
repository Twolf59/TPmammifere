import {Mammifere} from "./mammifere";
import {Aquatique} from "../interface/aquatique";

export class Dauphin extends Mammifere implements Aquatique {

    constructor(dateNaissance: Date, nom: string, poids: number) {
        super(dateNaissance, nom, poids);
    }

    /**
     * Faire retenir la respiration du dauphin
     */
    retenirRespiration(): void {
        console.log("retiens respiration");
    }

    /**
     * Faire cliquetter le dauphin
     */
    cliquetter(): void {
        console.log("clic");
    }

    /**
     * Faire nager le dauphin
     */
    nager(): void {
        console.log("Le dauphin nage");
    }

    /**
     * Faire repirer le dauphin sous l'eau
     */
    respirerSousEau(): void {
        console.log("Le dauphin respire sous l'eau");
    }

}
