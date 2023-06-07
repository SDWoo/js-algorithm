const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let i = 0; i < input[0]; i+=1) {
        for(let j =0; j < i+1; j+=1) {
            process.stdout.write("*")
        }
        console.log();
    }
});