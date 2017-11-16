"use strict"

// given a list of people with their birth and death years, find the year with the highest population
// linear solution O(P + Y)

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

function highestPopulation() {
	var years = [];
	for (const person of people) {
		years[person.birth] = years[person.birth] ? years[person.birth] + 1 : 1;
		years[person.death] = years[person.death] ? years[person.death] - 1 : -1;
	}

	var count = 0;
	var maxPop = 0;
	var maxYear = 0;

  	Object.keys(years).forEach(function(year, index) {
  		count = count + years[year];

  		if (count > maxPop) {
  			maxPop = count;
  			maxYear = year;
  		}
  	});
	console.log("Year: " + maxYear + " of population " + maxPop);
}

highestPopulation();