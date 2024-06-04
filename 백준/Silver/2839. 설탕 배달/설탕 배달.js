let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let m = parseInt(input / 5);
let result = -1;

for (let i = m; i >= 0; i--) {
    let balance = input - i * 5;
    if (balance % 3 === 0) {
        result = i + (balance / 3);
        break;
    }
}

console.log(result);
