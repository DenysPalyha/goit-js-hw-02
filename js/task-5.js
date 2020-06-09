const checkForSpam = function (message) {
  const messages = message.toLowerCase();

  const stringWord = messages.includes("spam") || messages.includes("sale");
  return stringWord;
};

console.log(checkForSpam("Latest technology news"));

console.log(checkForSpam("JavaScript weekly newsletter"));

console.log(checkForSpam("Get best sale offers now!")); 

console.log(checkForSpam("[SPAM] How to earn fast money?"));
