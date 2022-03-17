// ### Assignment 1

// Play around with president data
// Do it in a functional way!
// - preferably create functions for each subtask.
// - make use of the learned techniques and preferably do not use loop-constructs.

// load presidents - do not change the following three lines
const fs = require('fs');
const rawPresidents = fs.readFileSync('data/presidents.js');
const allPresidents = JSON.parse(rawPresidents);

// console.log(allPresidents);

// 1.1 TODO your code here 
// Get all the presidents born after 1950
// Expected result:
/*
[ { id: 43,
    name: 'OBAMA B',
    birth_year: 1961,
    years_served: 8,
    death_age: null,
    party: 'DEMOCRATIC',
    state_id_born: 34 } ]
*/
const presidentsBornAfter1950 = presidents => presidents.filter(president => president.birth_year > 1950);

// use this line to test your code
console.log(`Searching for Presidents born after 1950`);
console.log(presidentsBornAfter1950(allPresidents));


// 1.2. TODO write a function to get the president data by his name
// Expected result:
/*
[ { id: 25,
    name: 'ROOSEVELT T',
    birth_year: 1858,
    years_served: 7,
    death_age: 60,
    party: 'REPUBLICAN',
    state_id_born: 46 } ]
*/
const getPresidentByName = (presidents, presidentName) => presidents.filter(president => president.name == presidentName);

// use this line to test your code
const searchName = 'ROOSEVELT T';
console.log(`Searching for ${searchName}`);
console.log(getPresidentByName(allPresidents, searchName));


// 1.3. TODO your code here:
const average = numberArr =>	{
    let i = 0, sum = 0, ArrayLen = numberArr.length;
    while (i < ArrayLen) {
        sum = sum + numberArr[i++];
}
    return sum / ArrayLen;
}
// Your task is to 
//
// -> calculate the average birth year of all REPUBLICAN presidents!!
console.log(`Calculating the average birth year of all REPUBLICAN presidents`);
const avgBirthRepublicanPresidents = presidents => average((presidents.filter(president => president.party == "REPUBLICAN").map(pres => pres.birth_year)));

// use this line to test your code
console.log(avgBirthRepublicanPresidents(allPresidents));


// ### DO NOT CHANGE THE FOLLOWING LINES
module.exports = {
    presidentsBornAfter1950, 
    allPresidents,
    getPresidentByName,
    avgBirthRepublicanPresidents
};