
import express from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

//exercicio 1
//Resposta: Sendo n o tamanho da string input, complexidade é: O(n).

//exercicio 2
export const func = (
    source: string,
    comparison: string
  ): boolean => {
    if (
      comparison.length > source.length + 1 ||
      comparison.length < source.length - 1
    ) {
      return false;
    }
    let commonCharQuantity = 0;

    for (const char of comparison) {
      if (source !== comparison) {
        commonCharQuantity++;
      }
    }
    return (
      commonCharQuantity <= source.length + 1 &&
      commonCharQuantity >= source.length - 1
    );
  };

//Resposta: Sendo n o tamanho da string comparison, complexidade é: O(n).

//exercicio 3
export const replaceMatrixValue = (
    matrix: number[][],
    rowIndex: number,
    columnIndex: number,
    value: number
  ): void => {
    if (
      matrix[rowIndex] === undefined ||
      matrix[rowIndex][columnIndex] === undefined
    ) {
      throw new Error("Fora do intervalo da matriz");
    }

    matrix[rowIndex][columnIndex] = value;
  };

//Resposta: complexidade é O(1).

//exercicio 4
function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
      }
    }
    return false;
  }

//Resposta: Sendo n o tamanho da lista listOfNumbers, complexidade é: O(n^2)

//exercicio 5
//Resposta: Da maior eficiência/performance para a menor: 3 → 1 = 2 → 4