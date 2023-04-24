// Structure conditionnelles

const age = prompt("Quel est votre âge?");

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


// structure switch
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

// on peut récréer le comportement d'une structure switch 
// A l'aide du "if-else if-else".
if( age === "67" ){
    console.log("retraite");
}
else if( age === "18" ){
    console.log("majorité");
}
else {
    console.log("rien de spécial");
}