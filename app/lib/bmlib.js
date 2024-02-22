export function firstLetterUpper(word) {
  let newWord = word.trim();
  const firstCharacter = newWord[0];
  const uppercaseFirstCharacter = firstCharacter.toUpperCase();
  const capitalizedWord = uppercaseFirstCharacter + newWord.slice(1);
  return capitalizedWord;
}

export function handleSmoothScroll(id) {
  var target = document.querySelector(id);
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
