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
    // start from 2 and increment up till the given max
    for (var i = 2; i <= max; ++i) {
        // if value not part of sieve, means it is prime
        if (!sieve[i]) {
            // add to the list of primes
            primes.push(i);
            // add all multiples of that value to the sieve
            for (var j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    console.log(sieve);
    return primes;
}


var primes = find2Primes(10)
console.log(primes[0] + " + " + primes[1]);