const tab = creerTableau(10);
const tabPair = [];
const tabImpair = [];

// 1 - remplir le tableau:






// for( let i = 0 ; i < 10 ; i++ ){
//     const number = prompt("Veuillez entrer un nombre");
//     if( !isNaN(number) ){
//         tab.push( parseInt(number) );
//     }
//     else{
//         alert("nombre invalid")
//         i--;
//     }
// }

// remplirTableau(10, tab);






// 2 - Distinguer les nombres pairs/impairs

for (const number of tab) {
    
    if( number % 2 == 0 ){
        tabPair.push(number);
    }
    else {
        tabImpair.push(number);
    }

}

// 3 - afficher les tableaux

console.log(tabPair);
console.log(tabImpair);









// procédure
function remplirTableau( taille, tableau ) { // taille = -5, tableau = []

    for( let i = 0 ; i < taille ; i++ ){ // i = 0
        const number = prompt("Veuillez entrer un nombre");
        if( !isNaN(number) ){
            tableau.push( parseInt(number) );
        }
        else{
            alert("nombre invalid")
            i--;
        }
    }
}

// fonction
function creerTableau( taille ){ // taille = -5
    const tab = [];
    remplirTableau( taille, tab );
    return tab;
}

const tabTest = creerTableau(-5);
