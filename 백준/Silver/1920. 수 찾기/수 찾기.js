let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let A = input[1].split(' ').map(Number);
let M = input[3].split(' ').map(Number);
let Aset = new Set(A);

const answer = M.map((b) => (Aset.has(b) ? 1 : 0));
console.log(answer.join('\n'));