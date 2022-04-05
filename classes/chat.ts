 import {Mammifere}  from './mammifere';
 import {Terrestre} from "../interface/terrestre";

export class Chat extends Mammifere implements Terrestre {

    constructor(dateNaissance: Date, nom: string, poids: number) {
        super(dateNaissance, nom, poids);
    }

    /**
     * Faire miauler le chat
     */
    miauler(){
        console.log("le chat miaule");
    }

    /**
     * Faire marcher le chat
     */
    marcher(): void {
        console.log("le chat marche");
    }

    /**
     * Faire respirer hors de l'eau
     */
    respirerHorsDeLeau(): void {
        console.log("le chat respire");
    }

}
