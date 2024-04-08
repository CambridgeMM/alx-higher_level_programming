#!/usr/bin/node
/ Check the number of arguments passed
const numArgs = process.argv.length - 2; // Subtracting 2 to exclude 'node' and the script filename

// Check the number of arguments and print the appropriate message
if (numArgs === 0) {
    console.log("No argument");
} else if (numArgs === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
