import { valida } from "../js/main.js";
export class Saludo {
  /**@param {string} nombre*/
  calculaSaludo(email){
    const emailSinEspacios = email ? email.trim() : "";
    valida(emailSinEspacios, "Falta proporcoanar el email.");
    return "Hola $(emailSinEspacios}.;
  }
}
