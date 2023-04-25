
// La boucle while
console.log("=> DEMO BOUCLE WHILE");
let nbrOeuf = 5;

while ( nbrOeuf > 0 ){
    console.log( "Je lance un oeuf" );
    nbrOeuf--;
}

console.log("Il n'y a plus d'oeuf...");



console.log("=> DEMO BOUCLE DO...WHILE")
// while()...
// Je veux (re)demander une valeur entre 5 et 10 au user
// tant qu'il ne m'a pas donné une valeur valide

// let choix1 = prompt("donne la valeur [5-10]:")
// while( choix1 < 5 || choix1 > 10 ){
//     choix1 = prompt("autre valeur stp [5-10]:")
// }
// console.log( "bravo", choix1 )

// do ... while()
// 1er itération "gratuite"
// A utiliser quand la condition dépend d'une valeur calculée dans
// la boucle

let choix2;
do {
    choix2 = prompt("Entrez une valeur [5-10]:");
} while ( choix2 < 5 || choix2 > 10 );
console.log( "bravo", choix2 )

// ==> EXERCICES <==
console.log("=> EXERCICES")

// 1) Ecrivez un script permettant à l'utilisateur de remplir un 
//    tableau de 5 cases. Affichez ensuite les valeurs du tableau.

// <--> Correction <-->
// const tab = [0,0,0,0,0];

// let compteur = 0;
// while( compteur < 5 ){
//     const valeur = prompt("Veuillez entrer une valeur:");
//     // tab.push(valeur);
//     tab[compteur] = valeur;
//     compteur++;
// }

// 2) Faites en sorte que l'utilisateur puisse choisir la taille
//    du tableau. La taille choisie ne peut être qu'entre 1 et 5.

// <--> Correction <-->

console.log("=> CORRECTION EXO 2 (voire code)");

let taille;
do {
    taille = prompt("Entrez une valeur [1-5]:");
} while ( taille < 1 || taille > 5 );

//
// const tab = [];
// let compteur = 0;
// while( compteur < taille ){
//     const valeur = prompt("Veuillez entrer une valeur:");
//     // tab.push(valeur);
//     tab[compteur] = valeur;
//     compteur++;
// }

for( let cpt = 0 ; cpt < taille ; cpt++ ){
    const valeur = prompt("Veuillez entrer une valeur:");
    // tab.push(valeur);
    tab[cpt] = valeur;
}

// La boucle for

// La boucle while du début
// let nbrOeuf = 5;
// while ( nbrOeuf > 0 ){
//     console.log( "Je lance un oeuf" );
//     nbrOeuf--;
// }

// peut être simplifiée en une boucle for
// for( let nbrO = 5 ; nbrO > 0 ; nbrO-- ){
//     console.log( "Je lance un oeuf" );
// }

// console.log("Il n'y a plus d'oeuf...");

// Attention ce n'est pas le cas de tout les boucle while
// Les boucles for ont tendances à être plus utiles dans les cas
// ou il est possible de déterminer le nombre d'itération à réaliser 
// juste vant la boucle


// La boucle foreach

const tab2 = [0,5,2,3]

// cherche du maximum
let max;

for ( const element of tab ) {
    if(element > max){
        max = element;
    }    
}

// Incrémentation des cases du tableau

// Avec le foreach, on peut plus difficile modifier les cases du tableau
// Pour modifier le tableau il est préférable de passer la un for
for( let cpt = 0; cpt < tab2.length ; cpt++ ) {
    tab2[cpt] = tab2[cpt] + 1;
}

// Ou un forin (pas présents dans tous les langages)
// for( const index in tab2 ){
//     tab2[index] = tab2[index] + 1;
// }

console.log(tab2);
