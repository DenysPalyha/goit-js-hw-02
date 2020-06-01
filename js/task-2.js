const calculateEngravingPrice = function (message, pricePerWord) {
  for (let i = 0; i < message.length;) {
    let mess = Array.from(message.split(" "));
    mess = mess.length * pricePerWord;
    return mess;
  }
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
