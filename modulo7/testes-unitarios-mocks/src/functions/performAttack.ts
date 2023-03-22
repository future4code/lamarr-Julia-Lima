import { Character } from "../model/character";
import { validateCharacter } from "./validateCharacter";

/* export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  }; */

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  }; 

  /* c. Explique, com as suas palavras, as diferenças entre as duas implementações
     No primeiro caso eu tenho a função performAttack dependente da função validateCharacter. 
     Para resolver isso, no segundo caso foi feito uma injeção de dependências. Ao invés 
     de eu importar a função validateCharacter, eu passo ela como parâmetro. Dessa forma consigo 
     fazer um teste unitário na função performAttack.
  */

