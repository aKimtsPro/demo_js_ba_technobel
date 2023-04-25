
let continuer;

do {

    const taille = prompt("taille?");

    let ligne = "";
    for( let i = 0 ; i < taille ; i++ ){
        ligne += 'A';
        console.log( ligne )
    }

    continuer = prompt("Continuer? (y/n)")

} while( continuer === 'y' );

