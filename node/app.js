const fs = require('fs');
const os = require('os');
let text;
function fileReader() {
  const data = fs.readFileSync('test.txt');
  text = data.toString();
}

function fileCreater() {
  fs.open('newFile.txt', 'w', (err) => {
    if (err) {return console.log(err)}
  })
}

function fileWriter(result) {
  console.log(result)
  fs.writeFile('newFile.txt', result, (err) => {
    if (err) {return console.log(err)}
  })
}

fileReader();
let arr = text.split('');
arr.reverse();

let result = arr.join('');

fileCreater();
fileWriter(result);

const homeDir = os.homedir();
console.log({'homeDir': homeDir});
console.log({'os': process.platform});