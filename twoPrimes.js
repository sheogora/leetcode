"use strict"

// Given an even number ( greater than 2 ), return two prime numbers whose sum will be equal to given number.
// return array of integers

function find2Primes(evenNum) {
	var primes = [];

	var allPrimes = getPrimes(evenNum);

	for (const prime of allPrimes) {
		var secondPrime = evenNum - prime;
		if (allPrimes.includes(secondPrime)) return [prime, secondPrime];
	}

	return [];
}

function getPrimes(max) {
    var sieve = [];
    var primes = [];
    for (var i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (var j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}


var primes = find2Primes(250)
console.log(primes[0] + " + " + primes[1]);