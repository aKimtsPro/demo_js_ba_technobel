const tab = [ 5, 2, 7, 19, 2 ];

function findIndex(array, value){

    for( let index = tab.length-1 ; index >= 0 ; index-- ){

        if( array[index] == value ){
            return index;
        }

    }
    
    return -1;

}

console.log( findIndex(tab, 2) ); // 1

// try {
//     throw "error";
// }
// catch (err) {
//     console.log("une erreur s'est produite: " + err)
// }

// console.log("Après l'erreur");
