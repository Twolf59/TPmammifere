import {Animal} from "../interface/animal"

export abstract class Mammifere implements Animal {
     _dateNaissance: Date;
     _nom: string;
     _poids: number;

     constructor(dateNaissance: Date, nom: string, poids: number) {
        this._dateNaissance = dateNaissance;
        this._nom = nom;
        this._poids = poids;
    }

    /**
     * Donne le nom
     * @Return nom: string
     */
    get nom(): string {
        return this._nom;
    }

    /**
     * Set le nom
     * @param value: string
     */
    set nom(value: string) {
        this._nom = value;
    }

    /**
     * Donne le poids
     */
    get poids(): number {
        return this._poids;
    }

    /**
     * Set un poids
     * @param value: number
     */
    set poids(value: number) {
        this._poids = value;
    }

    /**
     * Donne la date de naissance
     * @Return date: Date
     */
    get dateNaissance(): Date {
        return this._dateNaissance;
    }

    /**
     * Set la date de naissance
     * @param value
     */
    set dateNaissance(value: Date) {
        this._dateNaissance = value;
    }

    /**
     * Déduire l'âge du mammifère par rapport à sa date de naissance
     */
    age(): void {
         let naissance: Date = this.dateNaissance;
         let aujourdhui: Date = new Date();
         let age = aujourdhui.getFullYear() - naissance.getFullYear();

         console.log(age + " ans");
    }

    /**
     * Afficher toutes les informations du Mammifère
     */
    afficher(): void {
        console.log(`
            Nom: ${this.nom},
            Date de naissance : ${this.dateNaissance},
            Poids : ${this.poids} Kg`);
    }

}
