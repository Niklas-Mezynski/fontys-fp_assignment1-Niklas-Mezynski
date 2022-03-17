const assignment = require('../assignment.js');

describe("Assignment 1.1 - Get presidents born after 1950", () => {
    test('there is only one presidents is born after 1950', () => {
        const presidents = assignment.presidentsBornAfter1950(assignment.allPresidents);
        expect(presidents.length).toBe(1);
    });

    test('The president born after 1950 is Obama only!', () => {
        const presidents = assignment.presidentsBornAfter1950(assignment.allPresidents);
        expect(presidents[0].name).toBe("OBAMA B"); 
    });
});

describe("Assignment 1.2 - get president by its name ", () => {
    test('Must be Roosevelt only!', () => {
        const presidents = assignment.getPresidentByName(assignment.allPresidents, 'ROOSEVELT T');
        expect(presidents[0].name).toBe("ROOSEVELT T");
    });
});

describe("Assignment 1.3 - get the average birth year of all republican presidents ", () => {
    test('average birth is around 808', () => {
        const avgBirth = assignment.avgBirthRepublicanPresidents(assignment.allPresidents);
        expect(avgBirth).toBeCloseTo(1871.52, 1);
    });

});