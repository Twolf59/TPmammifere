import {MilieuNaturel} from "./milieuNaturel";

export interface Terrestre extends MilieuNaturel {
    respirerHorsDeLeau(): void;
    marcher(): void;
}
