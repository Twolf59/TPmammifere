import {Chat} from "./classes/Chat";
import {Dauphin} from "./classes/Dauphin";

/**
 * instanciation d'un chat
 */
const chat: Chat = new Chat(new Date(2000, 0, 0),'chat Test', 5);

/**
 * instanciation d'un Dauphin
 */
const dauphin : Dauphin = new Dauphin(new Date(2001, 0, 0), 'dauphin Test',20);

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


