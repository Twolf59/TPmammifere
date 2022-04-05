"use strict";
exports.__esModule = true;
exports.Mammifere = void 0;
var Mammifere = /** @class */ (function () {
    function Mammifere(dateNaissance, nom, poids) {
        this._dateNaissance = dateNaissance;
        this._nom = nom;
        this._poids = poids;
    }
    Object.defineProperty(Mammifere.prototype, "nom", {
        /**
         * Donne le nom
         * @Return nom: string
         */
        get: function () {
            return this._nom;
        },
        /**
         * Set le nom
         * @param value: string
         */
        set: function (value) {
            this._nom = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mammifere.prototype, "poids", {
        /**
         * Donne le poids
         */
        get: function () {
            return this._poids;
        },
        /**
         * Set un poids
         * @param value: number
         */
        set: function (value) {
            this._poids = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mammifere.prototype, "dateNaissance", {
        /**
         * Donne la date de naissance
         * @Return date: Date
         */
        get: function () {
            return this._dateNaissance;
        },
        /**
         * Set la date de naissance
         * @param value
         */
        set: function (value) {
            this._dateNaissance = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Déduire l'âge du mammifère par rapport à sa date de naissance
     */
    Mammifere.prototype.age = function () {
        var naissance = this.dateNaissance;
        var aujourdhui = new Date();
        var age = aujourdhui.getFullYear() - naissance.getFullYear();
        console.log(age + " ans");
    };
    /**
     * Afficher toutes les informations du Mammifère
     */
    Mammifere.prototype.afficher = function () {
        console.log("\n            Nom: ".concat(this.nom, ",\n            Date de naissance : ").concat(this.dateNaissance, ",\n            Poids : ").concat(this.poids, " Kg"));
    };
    return Mammifere;
}());
exports.Mammifere = Mammifere;
