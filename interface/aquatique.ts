import {MilieuNaturel} from "./milieuNaturel";

export interface Aquatique extends MilieuNaturel {
    respirerSousEau(): void;
    nager(): void;
}
