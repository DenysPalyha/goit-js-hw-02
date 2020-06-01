const checkForSpam = function (message) {
  const messages = message.toLowerCase();
  const word = "spam";
  const words = "sale";

  const stringWord = messages.includes(word) || messages.includes(words);
  return stringWord;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!")); 

console.log(checkForSpam("[SPAM] How to earn fast money?"));
