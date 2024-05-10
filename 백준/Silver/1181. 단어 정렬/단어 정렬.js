let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const set = new Set(input);
let inputs = Array.from(set);

inputs.sort((x, y) => {
    // 길이순 정렬
    if (x.length !== y.length) {
        return x.length - y.length;
    } else {
        // 알파벳순 정렬
        return x > y ? 1 : -1;
    }    
});

console.log(inputs.join("\n"));