
function letterValue(letter: string): number {
  return letter.charCodeAt(0) - 96;
}

console.log(letterValue('a'));
console.log(letterValue('z'));

