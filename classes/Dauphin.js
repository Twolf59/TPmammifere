"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Dauphin = void 0;
var mammifere_1 = require("./mammifere");
var Dauphin = /** @class */ (function (_super) {
    __extends(Dauphin, _super);
    function Dauphin(dateNaissance, nom, poids) {
        return _super.call(this, dateNaissance, nom, poids) || this;
    }
    /**
     * Faire retenir la respiration du dauphin
     */
    Dauphin.prototype.retenirRespiration = function () {
        console.log("retiens respiration");
    };
    /**
     * Faire cliquetter le dauphin
     */
    Dauphin.prototype.cliquetter = function () {
        console.log("clic");
    };
    /**
     * Faire nager le dauphin
     */
    Dauphin.prototype.nager = function () {
        console.log("Le dauphin nage");
    };
    /**
     * Faire repirer le dauphin sous l'eau
     */
    Dauphin.prototype.respirerSousEau = function () {
        console.log("Le dauphin respire sous l'eau");
    };
    return Dauphin;
}(mammifere_1.Mammifere));
exports.Dauphin = Dauphin;
