let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let n = input.shift();
let arr = [];
let result = [];
for (let i=1; i<=n; i++){ 
	arr.push(i);
}
while(arr.length > 1){
	result.push(arr.shift());
	arr.push(arr.shift());
}
result.push(arr[0]);
console.log(result.join(' '));