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
exports.Chat = void 0;
var mammifere_1 = require("./mammifere");
var Chat = /** @class */ (function (_super) {
    __extends(Chat, _super);
    function Chat(dateNaissance, nom, poids) {
        return _super.call(this, dateNaissance, nom, poids) || this;
    }
    /**
     * Faire miauler le chat
     */
    Chat.prototype.miauler = function () {
        console.log("le chat miaule");
    };
    /**
     * Faire marcher le chat
     */
    Chat.prototype.marcher = function () {
        console.log("le chat marche");
    };
    /**
     * Faire respirer hors de l'eau
     */
    Chat.prototype.respirerHorsDeLeau = function () {
        console.log("le chat respire");
    };
    return Chat;
}(mammifere_1.Mammifere));
exports.Chat = Chat;
