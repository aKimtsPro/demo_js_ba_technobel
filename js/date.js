const dateNow = new Date();
const dateParse = new Date("2020-01-01");
const datePrecise = new Date(2020, 0, 1, 0, 0, 0, 0);
const epoch = new Date(0);

console.log(dateNow);
console.log(dateParse);
console.log(datePrecise);
console.log(epoch);

const month = dateNow.getMonth();

const comparaisonDeDate = new Date() > new Date(0); // true
const egaliteDeDate = new Date(0) == new Date(0);   // false