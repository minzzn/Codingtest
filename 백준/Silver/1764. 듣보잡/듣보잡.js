let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let n = input[0].split(" ").map(Number)[0];
let m = input[0].split(" ").map(Number)[1];

let nArr = input.slice(1,n+1);
let mSet = new Set(input.slice(n+1,n+1+m));
const result = [];

for(let i=0; i<n; i++){
	let name = nArr[i];
	if(mSet.has(name))
		result.push(nArr[i]);
}

result.sort();
console.log(result.length);
console.log(result.join("\n"));
