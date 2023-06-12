const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    str.split('').forEach((chr) => {
        chr.toUpperCase() === chr ? 
            process.stdout.write(chr.toLowerCase()) :
            process.stdout.write(chr.toUpperCase())
    })
});