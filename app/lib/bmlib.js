export function firstLetterUpper(word) {
    let newWord = word.trim();
    const firstCharacter = newWord[0];
    const uppercaseFirstCharacter = firstCharacter.toUpperCase();
    const capitalizedWord = uppercaseFirstCharacter + newWord.slice(1);
    return capitalizedWord;
  }