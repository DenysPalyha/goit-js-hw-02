const findLongestWord = function (string) {
  let word = string.split(" ");
  let lengthWord;
  let itemWords;
  for (let i = 0; i < word.length; i += 1) {
    lengthWord = word[1].length;

    if (word[i].length > lengthWord) {
      itemWords = word[i];
      return itemWords;
    }
  }
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));

console.log(findLongestWord("May the force be with you"));
