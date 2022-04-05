"use strict";
exports.__esModule = true;
var Chat_1 = require("./classes/Chat");
var Dauphin_1 = require("./classes/Dauphin");
/**
 * instanciation d'un chat
 */
var chat = new Chat_1.Chat(new Date(2000, 0, 0), 'chat Test', 5);
/**
 * instanciation d'un Dauphin
 */
var dauphin = new Dauphin_1.Dauphin(new Date(2001, 0, 0), 'dauphin Test', 20);
/**
 * appels fonctions chat
 */
chat.afficher();
chat.age();
chat.miauler();
chat.marcher();
chat.respirerHorsDeLeau();
/**
 * appels fonctions dauphin
 */
dauphin.afficher();
dauphin.age();
dauphin.nager();
dauphin.cliquetter();
dauphin.retenirRespiration();
dauphin.respirerSousEau();
