let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let command = parseInt(input.shift());

let queue = [];
let result = [];

for(let i=0; i<command; i++){
	switch(input[i]) {

		case "pop":
			if(queue.length === 0)
				result.push(-1);
			else
				result.push(queue.shift());
			break;

		case "size":
			result.push(queue.length);
			break;

		case "empty":
			if(queue.length == 0)
				result.push(1);
			else
				result.push(0);
			break;

		case "front":
			if(queue.length == 0)
				result.push(-1);
			else
				result.push(queue[0]);
			break;

		case "back":
			if(queue.length == 0)
				result.push(-1);
			else
		        result.push(queue[queue.length-1]);
			break;

		default:
			queue.push(input[i].split(" ")[1]);
			break;
	}
}

console.log(result.join("\n"));