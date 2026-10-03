let salaries = {
    John: 100,
    Bill: 300,
    Mike: 250
};

let sum = 0;

for (let key in salaries) {
    sum = sum + salaries[key];
}

let average = sum / Object.keys(salaries).length;

console.log(average);
//
