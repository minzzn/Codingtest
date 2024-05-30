let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const logs = parseInt(input.shift());

let names = new Set(); // 퇴근에 따라 배열 길이 달라질 수 있으므로 let

for(let i=0; i<logs; i++) {
	let name = input[i].split(" ")[0];
	if(input[i].includes('enter'))
		names.add(name);
	else
		names.delete(name);

}

let result = Array.from(names).sort().reverse();
console.log(result.join("\n"));
