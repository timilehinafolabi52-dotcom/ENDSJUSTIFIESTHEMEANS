const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy object
const person = { name: "Tim", age: 19 };
const updatedPerson = { ...person, age: 21 };
console.log(updatedPerson); // { name: "Tim", age: 21}
