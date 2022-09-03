// Basic Euclidean Algorithm
// Javascript to be run with node.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input two integers: \na: ', (a) => {
    rl.question('b: ', (b) => {
        
        console.log(`The greatest common divisor (gcp) is:, ${gcd(a,b)}`);
        rl.close();

      });
});

rl.on('close', function () {
    console.log('\nexit program...');
    process.exit(0);
});

// GCD of a and b
function gcd( a,  b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
 