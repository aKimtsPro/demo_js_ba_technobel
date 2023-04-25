function increment(param){
    return param++;
}

function incrementTab(tableau){
    tableau[0]++;
}
// fonction anonyme
incrementTab = function (){
    console.log("salut");
}
// Fonction flechée
const maFonction = (element) => console.log(element % 2 == 0);
maFonction(5); // false

let a = 0;
let tab = [0];



a = increment(a);
incrementTab(tab);



console.log(a);
console.log(tab);