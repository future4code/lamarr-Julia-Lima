import { performAttack } from "../src/functions/performAttack";
import { validateCharacter } from "../src/functions/validateCharacter";
import { Character } from "../src/model/character";

//a. Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "". 
test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

  //b. Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero. 
test("Should return false for life 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  });

//c. Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero. 
test("should return false for strenght 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 0,
      defense: 500,
    });

    expect(result).toBe(false);
  });
  

//d. Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero.
  test("should return false for defense 0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 0,
    });

    expect(result).toBe(false);
  });

//e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
test("should return false for life <0 or strenght <0 or defense <0", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: -10,
    });

    expect(result).toBe(false);
  });

//f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas
test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });

  test("Showing jest.fn", () => {
    const mock = jest.fn(() => {
        const user = {
                name: "Astrodev",
                age: 29
        }
        return user
    })
})

/* a. De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? 
Devemos criar o mock da função validateCharacter, pois ela é utilizada pela função performAttack.
*/

test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});

test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});

test("Should perform attack", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    performAttack(attacker, defender, validatorMock as any);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });