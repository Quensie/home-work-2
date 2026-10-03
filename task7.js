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
/*let salaries = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50
};
