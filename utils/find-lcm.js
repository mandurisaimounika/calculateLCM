const gcd = (a, b) => a ? gcd(b % a, a) : b;  //calculates the GCD for the given numbers

const lcm = (a, b) => a * b / gcd(a, b);  //calculated the LCM for the given numbers

module.exports = lcm;