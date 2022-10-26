const { fizzbuzz } = require("./fizzbuzz");

const args = process.argv.slice(2);

let PROCESS_SIZE = 101

if (args.length > 1) {
    console.error("This script accepts just 1 argument : size of fizzbuzz")
} else if (args.length && (typeof parseInt(args[0], 10) === 'number')) {
    PROCESS_SIZE = parseInt(args[0], 10) + 1
}

fizzbuzz(PROCESS_SIZE)

