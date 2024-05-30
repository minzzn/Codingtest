let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];
let result = [];

// 명령 수 만큼의 배열을 생성 하기 위해 shift
const leng =  parseInt(input.shift());

for(let i=0; i< leng; i++){
    switch(input[i]) {
	    case "pop":
		    if (stack.length != 0)
			    result.push(stack.pop());
		    else
			    result.push(-1);
		    break;

	    case "top":
		    if (stack.length != 0 )
		    	result.push(stack[stack.length-1]);
		    else
			    result.push(-1);
		    break;

	    case "size":
		    result.push(stack.length);
		    break;
	    case "empty":
		    // 스택이 비었으면 0,
		    if (stack.length == 0)
			    result.push(1);
		    // 아니면 1 출력
		    else
			    result.push(0);
		    break;
	    default:
		    stack.push(input[i].split(" ")[1]); // 수행 후 콘솔에 출력
		    break;
	}
}
console.log(result.join("\n"));