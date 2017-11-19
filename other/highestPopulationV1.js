"use strict"

// given a list of people with their birth and death years, find the year with the highest population
// solution with O(P + Y.P)

var people = [
	{ birth: 1991, death: 2010 },
	{ birth: 2000, death: 2020 },
	{ birth: 1975, death: 2000 },
	{ birth: 1956, death: 1990 },
	{ birth: 1991, death: 2010 },
	{ birth: 1803, death: 1809 },
	{ birth: 1750, death: 1869 },
	{ birth: 1975, death: 2003 },
	{ birth: 1842, death: 1935 },
	{ birth: 1860, death: 1921 },
	{ birth: 1894, death: 1921 }
];

var is_alive = (person, year) => { return (person.birth <= year) && (year <= person.death) };

function highestPopulation() {
	var years = new Set();

	// find min birth and max birth
	for (const person of people) {
		years.add(person.birth);
	}

	console.log(years);
	let populationYear = 0;
	let populationTotal = 0;

	// dont need to go every year only the ones where things happen
	for (const year of years) {
		let count = 0;
		for (const person of people) {
			if (is_alive(person, year)) {
				count++;
			}
		}
		if (count > populationTotal) {
			populationYear = year;
			populationTotal = count;
		}
	}

	console.log("Year: " + populationYear + " of population " + populationTotal);
	return populationYear;
}

highestPopulation();