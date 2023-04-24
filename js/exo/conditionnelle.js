const date = new Date();

switch( date.getDay() ){
    case 0:
        console.log("On est dimanche")
        break;
    case 1:
        console.log("On est lundi")
        break;
    case 2:
        console.log("On est mardi")
        break;
    case 3:
        console.log("On est mercredi")
        break;
    case 4:
        console.log("On est jeudi")
        break;
    case 5:
        console.log("On est vendredi")
        break;
    default:
        console.log("On est samedi")
        break;
}

const annee = date.getFullYear();
if( (annee % 4 == 0 && annee % 100 != 0) || (annee % 400 == 0) ){
    console.log(annee + " est bissextile");
}
else {
    console.log(annee + " n'est pas bissextile");
}