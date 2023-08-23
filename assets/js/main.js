const form = document.querySelector("[data-form");
const characters = document.querySelector(".char");
const word = document.querySelector(".word");
const vowel = document.querySelector(".vowel");
const consonant = document.querySelector(".consonant");
const number = document.querySelector(".number");

let totalChar = 0;
let totalPalavras = 0;
let totalVogais = 0;
let totalConsoantes = 0;
let totalNumeros = 0;

function CountWords(event) {
  event.preventDefault();

  const input = form.inWords.value.toLowerCase();
  const vogais = "aeiou";
  const consoante = "bcdfghjklmnpqrstvwxyz";
  const numeros = "1234567890";

  const charArray = input;
  totalChar = charArray.length;
  characters.innerHTML = `Caracteres: <span>${totalChar}</span>`;

  const wordArray = input.split(/\s+/).filter((palavra) => palavra.length > 0);
  totalPalavras = wordArray.length;
  word.innerHTML = `Palavras: <span>${totalPalavras}</span>`;

  const vogalArray = input.split("").filter((char) => vogais.includes(char));
  totalVogais = vogalArray.length;
  vowel.innerHTML = `Vogais: <span>${totalVogais}</span>`;

  const consoanteArray = input
    .split("")
    .filter((char) => consoante.includes(char));
  totalConsoantes = consoanteArray.length;
  consonant.innerHTML = `Consoantes: <span>${totalConsoantes}</span>`;

  const numberArray = input.split("").filter((num) => numeros.includes(num));
  totalNumeros = numberArray.length;
  number.innerHTML = `Números: <span>${totalNumeros}</span>`;
}

form.addEventListener("change", CountWords);
