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


// Structure conditionnelles

const age = prompt("Quel est votre âge?");

if( age > 120 || age < 0 ){
    throw "Error";
}

console.log( "mon traitement..." )












if( age >= 18 ){
    console.log("Vous êtes majeur.")
}
else if( age >= 14 ){  // 14 <= age < 18
    console.log("Vous êtes adolescent.")
}
else if( age >= 5 ){ // 5 <= age < 14
    console.log("Vous êtes un enfant")
}
else if( age >= 0 ){ // 0 <= age < 5
    console.log("Vous êtes un bébé")
}
else { // age < 0
    console.log("Age invalide")
}

// ....
console.log("arrivé")

switch ( age ) { // egalité stricte (===)
    case "67":
        console.log("retraite");
        break;
    case "18":
        console.log("majorité");
        break;
    default:
        console.log("rien de spécial");
        break;
}

if( age === "67" ){
    console.log("retraite");
}
else if( age === "18" ){
    console.log("majorité");
}
else {
    console.log("rien de spécial");
}