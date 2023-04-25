let somme = 0;

function onClick(){
    // 1-Récupérer la valeur de l'input
    const inputAdd = document.getElementById("input-add");
    const inputValue = parseInt(inputAdd.value);
    
    // 2-ajouter à la somme
    somme = somme + inputValue;
    
    // 3-modifier la balise dont l'id est 'display-somme'
    const displaySomme = document.getElementById("display-somme");
    displaySomme.innerText = somme;

}