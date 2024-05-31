const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cmd = parseInt(input.shift());

let queue = [];
let result = [];

for (let i = 0; i < cmd; i++) {
    const command = input[i].split(" ");
    switch (command[0]) {
        case "pop":
            result.push(queue.length === 0 ? -1 : queue.shift());
            break;

        case "size":
            result.push(queue.length);
            break;

        case "empty":
            result.push(queue.length === 0 ? 1 : 0);
            break;

        case "front":
            result.push(queue.length === 0 ? -1 : queue[0]);
            break;

        case "back":
            result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
            break;

        case "push":
            queue.push(command[1]);
            break;

        default:
            break;
    }
}

console.log(result.join("\n"));
