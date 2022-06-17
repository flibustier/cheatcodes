const { readFileSync, writeFileSync } = require("fs");

const regex = /,(?!\s*?[{["'\w])/g;

const files = process.argv.splice(2);
for (let file of files) {
  const input = readFileSync(file).toString();
  let correct = input.replace(regex, "");
  writeFileSync(file, correct);
}
