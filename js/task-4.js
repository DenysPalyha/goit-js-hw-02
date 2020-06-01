const formatString = function (string) {
  let limit = 40;
  string = string.trim();
  if (string.length <= limit) return string;
  string = string.slice(0, limit);
  let lastSpace = string.lastIndexOf(" ");
  if (lastSpace < 0) {
    string = string.substr(0, lastSpace);
  }
  return string + "...";
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));

console.log(formatString("Curabitur ligula sapien."));

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
